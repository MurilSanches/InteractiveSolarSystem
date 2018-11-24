logar = function()
	{
		var email = document.getElementById('email').value;
		var senha = document.getElementById('senha').value;
		var erro = false;

		if(email == null || email == ""){
			document.getElementById('erroEmail').innerHTML = "* Campo obrigatorio";
			erro = true;
		}
		if(senha == null || senha == ""){
			document.getElementById('erroSenha').innerHTML = "* Campo obrigatorio";
			erro = true;
		}

		if(!erro)
		{	
			let logou = false;

			let dados =
			{
				Email: email,
				Senha: senha
			};
		
			$.post("http://localhost:3000/Usuario/login", dados,
			function(data, status){
				if (status == 'success')
				{																		
				   	if (data[0].nome != undefined)
				    {
						nomeUsuario = new String (data[0].nome);	
						alert("Logado!");
						logou = true;
					   	sessionStorage.setItem("Nome", nomeUsuario);					   					   	
						document.getElementById('email').value = '';
						document.getElementById('senha').value = '';
						document.getElementById('erroSenha').innerHTML = "*";	
						document.getElementById('erroEmail').innerHTML = "*";						
						document.getElementById('liLogin').innerHTML = 'Olá, '+ nomeUsuario;
						document.getElementById('liCadastro').innerHTML = 'Sair';
						document.getElementById("liCadastro").addEventListener("click", sair);	
						document.getElementById("liCadastro").removeAttribute('href');
						document.getElementById('liLogin').removeAttribute('href');																									  								
					}
					else{
						alert('Login não existe');
					}
				}
				else
				{
					alert('Não Logou');
				}
			});	
		}		 
	}
