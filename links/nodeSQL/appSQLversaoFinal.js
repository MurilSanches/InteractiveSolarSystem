
const express = require('express');
const app = express();         
const bodyParser = require('body-parser');
const porta = 3000; //porta padrão
const sql = require('mssql');
const conexaoStr = "Server=regulus;Database=XXX;User Id=YYY;Password=ZZZ;";

//conexao com BD
sql.connect(conexaoStr)
   .then(conexao => global.conexao = conexao)
   .catch(erro => console.log(erro));

// configurando o body parser para pegar POSTS mais tarde   
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
//acrescentando informacoes de cabecalho para suportar o CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PATCH, DELETE");
  next();
});
//definindo as rotas
const rota = express.Router();
rota.get('/', (requisicao, resposta) => resposta.json({ mensagem: 'Funcionando!'}));
app.use('/', rota);

//inicia servidor
app.listen(porta);
console.log('API Funcionando!');

function execSQL(sql, resposta) {
	global.conexao.request()
				  .query(sql)
				  .then(resultado => resposta.json(resultado.recordset))
          //.then(resultado => console.log(resultado.recordset))
				  .catch(erro => resposta.json(erro));
}

rota.get('/estrela', (requisicao, resposta) =>{
execSQL('SELECT * FROM Estrela', resposta)
})


//o simbolo ? indica que id na rota abaixo é opcional
rota.get('/planeta/:id?', (requisicao, resposta) => {
let filtro = '';
if (requisicao.params.id)
filtro = ' where PeriodoOrbital=' + parseInt(requisicao.params.id);
execSQL('SELECT * from Planeta' + filtro, resposta);
})

rota.post('/Usuario', (requisicao, resposta) =>{
  //const cod = ultimoResp++;
  const nome = (requisicao.body.Nome.substring(0,15));
  const sobrenome = (requisicao.body.Sobrenome).substring(0,50);
  const email = requisicao.body.Email.substring(0,60);
  const senha = requisicao.body.Senha;  
  execSQL(`INSERT INTO Responsavel(Nome, Sobrenome, Email, Senha) VALUES('${nome}','${sobrenome}','${email}','${senha}')`, resposta);
  resposta.end(resposta.json({ mensagem: 'Incluído!'}))});