	VerificaUsuario = function(response, dados)
	{
		var arr = JSON.parse(response);

		if(arr[0] == null || arr[0] == "")		
			Cadastrar(dados);			
		else
			alert("Email ja cadastrado");

	}	

	Cadastrar = function(dados)
	{
		$.post("http://localhost:3000/Usuario", dados,
			function(data, status){
			if (status=='success')
			{	    
				alert(data.mensagem);			
				sessionStorage.setItem("Nome", dados.Nome);	
				document.getElementById('InputNome').value ="";
				document.getElementById('InputSobrenome').value ="";
				document.getElementById('email').value ="";
				document.getElementById('senha').value ="";
				document.getElementById('Confirmasenha').value ="";
				document.getElementById('erroSenhas').innerHTML = "";
				document.getElementById('erroConfirmaSenha').innerHTML = "*";
				document.getElementById('erroSenha').innerHTML = "*";
				document.getElementById('erroEmail').innerHTML = "*";
				document.getElementById('erroNome').innerHTML = "*";   
				document.getElementById('erroSobrenome').innerHTML = "*";
				document.getElementById('liLogin').innerHTML = 'Olá, '+ dados.Nome;
				document.getElementById('liCadastro').innerHTML = 'Sair';
				document.getElementById("liCadastro").addEventListener("click", sair);	
				document.getElementById("liCadastro").removeAttribute('href');
				document.getElementById('liLogin').removeAttribute('href');		
				window.location.replace("PaginaPrincipal.html");									
			}
			else
				alert('Ocorreu um erro!');
			});
	}

	checar = function()
	{
		var nome 	  = document.getElementById('InputNome').value;
		var sobrenome = document.getElementById('InputSobrenome').value;
		var email = document.getElementById('email').value;
		var senha = document.getElementById('senha').value;
		var senha2 = document.getElementById('Confirmasenha').value;
		var erro = false;

		if(nome == null || nome == "")
		{
			document.getElementById('erroNome').innerHTML = "* Campo obrigatorio";   
			erro = true;
		}         
		if(sobrenome == null || sobrenome == ""){
			document.getElementById('erroSobrenome').innerHTML = "* Campo obrigatorio";
			erro = true;
		}         
		if(email == null || email == ""){
			document.getElementById('erroEmail').innerHTML = "* Campo obrigatorio";
			erro = true;
		}         
		if(senha == null || senha == ""){
			document.getElementById('erroSenha').innerHTML = "* Campo obrigatorio";
			erro = true;
		}         
		if(senha2 == null || senha2 == ""){
			document.getElementById('erroConfirmaSenha').innerHTML = "* Campo obrigatorio";
			erro = true;
		}         

		if(senha2 != senha)
		{
			document.getElementById('erroSenhas').innerHTML = "* Senhas diferentes";
			document.getElementById('senha').value = '';
			document.getElementById('Confirmasenha').value = '';
			erro = true;			
		}
		
		if(!erro)
		{
			let dados =
			{
				Nome: nome,
				Sobrenome: sobrenome,
				Email: email,
				Senha: senha,				
			};
			
		    var xmlhttp = new XMLHttpRequest();
  			var url = "http://localhost:3000/Usuario/"+dados.Email;
  			xmlhttp.onreadystatechange=function() 
  			{
			  	if (this.readyState == 4 && this.status == 200)
			  	{
			   		VerificaUsuario(this.responseText , dados);
			  	}
		  	} 
		  	xmlhttp.open("GET", url, true); 
		  	xmlhttp.send();			
    	}
	}