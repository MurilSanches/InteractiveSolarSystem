	var ctx;
	
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

   	// myMove = function() 
	// {
	//  	var elem = document.getElementById("terra");   
	// 	var coordenadas = elem.getBoundingClientRect();
	// 	var xInicial = coordenadas.left;
	// 	var x = coordenadas.left;
	// 	var xInicial = coordenadas.left;
	// 	var xFinal = 1160;
	// 	var vx = 1;
	// 	var y = coordenadas.top;
	//   	var id = setInterval(frame, 10);
	//   	function frame() 
	//   	{  
	//     	if (x == xFinal) 
	//       		vx = -1;
	// 		if(x == xInicial) 	
	// 			vx = 1;

	// 		x+=vx; 
	// 		elem.style.left = x + 'px'; 
  	// 	}		
	// }

	limparTela = function()
	{
		ctx.clearRect(0, 0, $("#orbita").width(), $("#orbita").height());
	}

	carregar = function(){

		//myMove();
		orbitaPadrao();
		setInterval(testar, 100);
	}

	testar = function(){
		var chk = document.getElementById("switch");
		{
			var planeta = document.getElementById("sol");

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
				
				planeta.style.left = 0 +'px';
			}
			else
			{
				planeta.style.left = 45.125 + '%';
			}

			planeta = document.getElementById("mercurio");

			if(chk.checked != true)
			{
				
				planeta.style.left = 230 +'px';
			}
			else
			{
				planeta.style.left = 42 + '%';
			}

			planeta = document.getElementById("venus");

			if(chk.checked != true)
			{
				
				planeta.style.left = 300 +'px';
			}
			else
			{
				planeta.style.left = 38.5 + '%';
			}

			planeta = document.getElementById("terra");

			if(chk.checked != true)
			{
				
				planeta.style.left = 400 +'px';
			}
			else
			{
				planeta.style.left = 35 + '%';
			}

			planeta = document.getElementById("marte");

			if(chk.checked != true)
			{
				
				planeta.style.left = 500 +'px';
			}
			else
			{
				planeta.style.left = 31.5 + '%';
			}

			planeta = document.getElementById("jupiter");

			if(chk.checked != true)
			{
				
				planeta.style.left = 650 +'px';
			}
			else
			{
				planeta.style.left = 23 + '%';
			}

			planeta = document.getElementById("saturno");

			if(chk.checked != true)
			{
				
				planeta.style.left = 850 +'px';
			}
			else
			{
				planeta.style.left = 16.5 + '%';
			}

			planeta = document.getElementById("urano");

			if(chk.checked != true)
			{
				
				planeta.style.left = 1050 +'px';
			}
			else
			{
				planeta.style.left = 10 + '%';
			}

			planeta = document.getElementById("netuno");

			if(chk.checked != true)
			{
				
				planeta.style.left = 1250 +'px';
			}
			else
			{
				planeta.style.left = 4 + '%';
			}
		}
	}

