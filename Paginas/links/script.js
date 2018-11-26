	var ctx;
	var nomeUsuario;
	var logou;
	
	orbitaPadrao = function() 
    {  
		var c=document.getElementById("orbita");
      	if(c.getContext)
      	{
			ctx=c.getContext("2d");
			ctx.strokeStyle = 'white';
	        ctx.beginPath();
	        ctx.arc(938,403,125,0,2*Math.PI);
			ctx.stroke();
			ctx.closePath();
			
	        ctx.beginPath();
	        ctx.arc(937,403,180,0,2*Math.PI);
			ctx.stroke();
			ctx.closePath();

	        ctx.beginPath();
	        ctx.arc(935,403,245,0,2*Math.PI);
			ctx.stroke();
			ctx.closePath();

	        ctx.beginPath();
	        ctx.arc(930,403,310,0,2*Math.PI);
	        ctx.stroke();
			ctx.closePath();

			ctx.beginPath();
	        ctx.arc(930,403,440,0,2*Math.PI);
			ctx.stroke();
			ctx.closePath();
	    
	        ctx.beginPath();
	        ctx.arc(930,403,570,0,2*Math.PI);
			ctx.stroke();
			ctx.closePath();

	        ctx.beginPath();
	        ctx.arc(930,403,700,0,2*Math.PI);
			ctx.stroke();
			ctx.closePath();

	        ctx.beginPath();
	        ctx.arc(930,403,820,0,2*Math.PI);
			ctx.stroke();
			ctx.closePath();
	    }
	};
	
	orbita = function() 
    {  
		ctx.strokeStyle = 'white';
		ctx.beginPath();
		ctx.arc(60,403,180,0,2*Math.PI);
		ctx.stroke();
		ctx.closePath();
		
		ctx.beginPath();
		ctx.arc(58,403,260,0,2*Math.PI);
		ctx.stroke();
		ctx.closePath();

		ctx.beginPath();
		ctx.arc(58,403,360,0,2*Math.PI);
		ctx.stroke();
		ctx.closePath();

		ctx.beginPath();
		ctx.arc(55,403,460,0,2*Math.PI);
		ctx.stroke();
		ctx.closePath();

		ctx.beginPath();
		ctx.arc(55,403,650,0,2*Math.PI);
		ctx.stroke();
		ctx.closePath();
	
		ctx.beginPath();
		ctx.arc(55,403,840,0,2*Math.PI);
		ctx.stroke();
		ctx.closePath();

		ctx.beginPath();
		ctx.arc(55,403,1030,0,2*Math.PI);
		ctx.stroke();
		ctx.closePath();

		ctx.beginPath();
		ctx.arc(55,403,1220,0,2*Math.PI);
		ctx.stroke();
		ctx.closePath();
	    
    };

	limparTela = function()
	{
		ctx.clearRect(0, 0, $("#orbita").width(), $("#orbita").height());
	}

	carregar = function(){	    
		orbitaPadrao();		
		setInterval(testar, 10);
	}

	carregar2 = function()
	{
		setInterval(testar, 10);
	}

	mudarOrbita = function()
	{
		if (document.getElementById('switch'))
		{
			var chk = document.getElementById("switch");
			{
				var planeta = document.getElementById("sol");
				planeta.style.transition = "all 2s";

				if(chk.checked != true)
				{
					limparTela();
					orbita();
				}
				else
				{
					limparTela();
					orbitaPadrao();
				}

				if(chk.checked != true)
				{
					
					planeta.style.left = 0 +'%';
				}
				else
				{
					//planeta.style.left = 870 + 'px';
					planeta.style.left = 46.5 + '%';
				}

				planeta = document.getElementById("mercurio");
				planeta.style.transition = "all 2s";

				if(chk.checked != true)
				{
					
					planeta.style.left = 12.5 +'%';
				}
				else
				{
					planeta.style.left = 43.2 + '%';
					//planeta.style.left = 838 + 'px';
				}

				planeta = document.getElementById("venus");
				planeta.style.transition = "all 2s";

				if(chk.checked != true)
				{
					
					planeta.style.left = 16.3 +'%';
				}
				else
				{
					planeta.style.left = 39.7 + '%';
				}

				planeta = document.getElementById("terra");
				planeta.style.transition = "all 2s";

				if(chk.checked != true)
				{
					
					planeta.style.left = 21.5 +'%';
				}
				else
				{
					planeta.style.left = 36.3 + '%';
				}

				planeta = document.getElementById("marte");
				planeta.style.transition = "all 2s";

				if(chk.checked != true)
				{
					
					planeta.style.left = 27 +'%';
				}
				else
				{
					planeta.style.left = 32.5 + '%';
				}

				planeta = document.getElementById("jupiter");
				planeta.style.transition = "all 2s";

				if(chk.checked != true)
				{
					
					planeta.style.left = 34.5 +'%';
				}
				else
				{
					planeta.style.left = 23 + '%';
				}

				planeta = document.getElementById("saturno");
				planeta.style.transition = "all 2s";

				if(chk.checked != true)
				{
					
					planeta.style.left = 46 +'%';
				}
				else
				{
					planeta.style.left = 16.5 + '%';
				}

				planeta = document.getElementById("urano");
				planeta.style.transition = "all 2s";

				if(chk.checked != true)
				{
					
					planeta.style.left = 56 +'%';
				}
				else
				{
					planeta.style.left = 10 + '%';
				}

				planeta = document.getElementById("netuno");
				planeta.style.transition = "all 2s";

				if(chk.checked != true)
				{
					
					planeta.style.left = 67 +'%';
				}
				else
				{
					planeta.style.left = 4 + '%';
				}
			}
		}
	}

	testar = function()
	{	
		mudarOrbita();

		var screx = $("body").width(); 
		if(screx >= 1200)
		{
			$("ul.itens").css("font-size" , "16px");
			$("h1.titulo").css("font-size", "40px");
			$("button.css3button").css("font-size","14px");
			$("button.css3button").css("padding","9px 23px");
			$("button.css3button").css("border-radius","27px");
			$("button.css3button").css("left","91%");
		}
		if (screx > 660 && screx < 1200) 
		{
			$("ul.itens").css("font-size" , "14px");
		  	$("h1.titulo").css("font-size", "36px"); 
		  	$("button.css3button").css("font-size","12px");
			$("button.css3button").css("padding","7px 20px");
			$("button.css3button").css("border-radius","20px");
			$("button.css3button").css("left","89%");
		} 
		if (screx <= 660) 
		{	 
			$("ul.itens").css("font-size" , "12px");
		  	$("h1.titulo").css("font-size", "33px");
		  	$("button.css3button").css("font-size","14px");
			$("button.css3button").css("padding","9px 23px");
			$("button.css3button").css("border-radius","27px");
			$("button.css3button").css("left","85%");
		} 

		if(document.getElementById("orbita") && document.getElementById("switch"))
		{
			var screy = $("body").height();

			var body = document.getElementsByTagName('body')[0],
			screX = body.clientWidth,
			screY = body.clientHeight;

			var c=document.getElementById("orbita");

			c.width = screX;
			c.height = screY - (screY * 16 * 0.01); 

			var chk = document.getElementById("switch");
		
			if(chk.checked != true)
			{
				limparTela();
				orbita();
			}
			else
			{
				limparTela();
				orbitaPadrao();
			}
		}
		var nome = sessionStorage.getItem("Nome");	
		if(nome != null && nome != "null")
		{			
			document.getElementById('liLogin').innerHTML = 'Olá, '+ nome;
			document.getElementById('liCadastro').innerHTML = 'Sair';
			document.getElementById("liCadastro").addEventListener("click", sair);	
			document.getElementById("liCadastro").removeAttribute('href');
			document.getElementById('liLogin').removeAttribute('href');	
		}
	}

	
	sair = function()
	{
		sessionStorage.setItem("Nome", null);
		document.getElementById('liLogin').innerHTML = 'Fazer login ou';
		document.getElementById('liCadastro').innerHTML = 'Cadastrar';	
		document.getElementById('liCadastro').removeEventListener("click", sair);
		document.getElementById("liCadastro").setAttribute('href',"PaginaCadastro.html");
		document.getElementById('liLogin').setAttribute('href',"PaginaLogin.html");	
		window.location.replace("PaginaPrincipal.html");
		alert('Deslogado!');
	}