
	checar = function()
	{
		var nome 	  = document.getElementById('InputNome').value;
		var sobrenome = document.getElementById('InputSobrenome').value;
		var email = document.getElementById('email').value;
		var senha = document.getElementById('senha').value;
		var senha2 = document.getElementById('Confirmasenha').value;

		if(nome == null || nome == "")
            document.getElementById('erroNome').innerHTML = "Campo obrigatorio";            
		if(sobrenome == null || nome == "")
			document.getElementById('erroSobrenome').innerHTML = "Campo obrigatorio";
		if(email == null || nome == "")
			document.getElementById('erroEmail').innerHTML = "Campo obrigatorio";
		if(senha == null || nome == "")
			document.getElementById('erroSenha').innerHTML = "Campo obrigatorio";
		if(senha2 == null || nome == "")
			document.getElementById('erroConfirmaSenha').innerHTML = "Campo obrigatorio";

		if(senha2 != senha)
		{
			document.getElementById('erroSenhas').innerHTML = "Senhas diferentes";
			document.getElementById('senha').innerHTML = '';
			document.getElementById('Confirmasenha').innerHTML = '';			
		}
		else
		{
			let dados =
			{
				Nome: nome,
				Sobrenome: sobrenome,
				Email: email,
				Senha: senha,				
			};
	
			$.post("http://localhost:3000/Usuario", dados,
			function(data, status){
				if (status=='success')
				{
					alert("Cadastrado com sucesso!");
					alert(data.mensagem);
					document.getElementById('InputNome').value ="";
					document.getElementById('InputSobrenome').value ="";
					document.getElementById('email').value ="";
					document.getElementById('senha').value ="";
					document.getElementById('Confirmasenha').value ="";
				}
				else
					alert('Ocorreu um erro!');
			});
    }
}