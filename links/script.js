	orbita = function() 
    {  
		var c=document.getElementById("orbita");
      	if(c.getContext)
      	{
	        var ctx=c.getContext("2d");
	        ctx.globalCompositeOperation='destination-over';
	        ctx.strokeStyle = 'white';
	        ctx.beginPath();
	        ctx.arc(938,403,125,0,2*Math.PI);
	        ctx.stroke();
	        ctx.closePath();
	    }

	    c=document.getElementById("orbita");
      	if(c.getContext)
      	{
	        var ctx=c.getContext("2d");
	        ctx.globalCompositeOperation='destination-over';
	        ctx.strokeStyle = 'white';
	        ctx.beginPath();
	        ctx.arc(937,403,180,0,2*Math.PI);
	        ctx.stroke();
	    }

	    c=document.getElementById("orbita");
      	if(c.getContext)
      	{
	        var ctx=c.getContext("2d");
	        ctx.globalCompositeOperation='destination-over';
	        ctx.strokeStyle = 'white';
	        ctx.beginPath();
	        ctx.arc(935,403,245,0,2*Math.PI);
	        ctx.stroke();
	    }

	    c=document.getElementById("orbita");
      	if(c.getContext)
      	{
	        var ctx=c.getContext("2d");
	        ctx.strokeStyle = 'white';
	        ctx.beginPath();
	        ctx.arc(930,403,310,0,2*Math.PI);
	        ctx.stroke();
	    }

	    c=document.getElementById("orbita");
      	if(c.getContext)
      	{
	        var ctx=c.getContext("2d");
	        ctx.strokeStyle = 'white';
	        ctx.beginPath();
	        ctx.arc(0,0,130,0,2*Math.PI);
	        ctx.stroke();
	    }

	    c=document.getElementById("orbita");
      	if(c.getContext)
      	{
	        var ctx=c.getContext("2d");
	        ctx.strokeStyle = 'white';
	        ctx.beginPath();
	        ctx.arc(0,0,130,0,2*Math.PI);
	        ctx.stroke();
	    }

	    c=document.getElementById("orbita");
      	if(c.getContext)
      	{
	        var ctx=c.getContext("2d");
	        ctx.strokeStyle = 'white';
	        ctx.beginPath();
	        ctx.arc(0,0,130,0,2*Math.PI);
	        ctx.stroke();
	    }

	    c=document.getElementById("orbita");
      	if(c.getContext)
      	{
	        var ctx=c.getContext("2d");
	        ctx.strokeStyle = 'white';
	        ctx.beginPath();
	        ctx.arc(0,0,130,0,2*Math.PI);
	        ctx.stroke();
	    }
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

	carregar = function(){

		//myMove();
		orbita();
	}
