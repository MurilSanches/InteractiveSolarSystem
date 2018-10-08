const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const porta = 3000; //porta padrão
const sql = require('mssql');
const conexaoStr = "Server=regulus;Database=PR118187;User Id=PR118187;Password=PR118187;";

sql.connect(conexaoStr)
 .then(conexao => global.conexao = conexao)
 .catch(erro => console.log(erro));

 app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.listen(porta);
alert('API Funcionando!');


function execSQL(sql, resposta) 
{
    global.conexao.request()
    .query(sql)
    .then(resultado => resposta.json(resultado.recordset))
    .catch(erro => resposta.json(erro));
}
    
rota.get('/clientes', (requisicao, resposta) =>
{
    var massa = execSQL('SELECT Massa FROM Planeta', res);
    alert(massa);
})
    