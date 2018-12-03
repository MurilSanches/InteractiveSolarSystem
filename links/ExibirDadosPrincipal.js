

  var xmlhttp = new XMLHttpRequest();
  var url = "http://localhost:3000/estrela";
  xmlhttp.onreadystatechange=function() {
  if (this.readyState == 4 && this.status == 200)
  {
    ExibeDadosSol(this.responseText);
  }
  } 
  xmlhttp.open("GET", url, true); 
  xmlhttp.send();


  function ExibeDadosSol(response) 
  {
    var arr = JSON.parse(response);
    var out = "<p>Sol:</p><ul class=\"fonte\"><li>Volume: " + arr[0].Volume + 
    "</li><br><li>Massa: " + arr[0].Massa + 
    "</li><br><li>Gravidade: " + arr[0].Gravidade + 
    "</li><br><li>Temperatura: " + arr[0].TemperaturaSuperficie + 
    "</li><br><br><li><a href=\"Paginas/PaginaSol.html\">mais informações</a></li></ul>";     
    document.getElementsByClassName("informacaoBasico")[0].innerHTML = out;
  } 

  xmlhttp = new XMLHttpRequest();
  url = "http://localhost:3000/planeta/4331";
  xmlhttp.onreadystatechange=function() {
  if (this.readyState == 4 && this.status == 200)
  {
    ExibeDadosJupiter(this.responseText);
  }
  } 
  xmlhttp.open("GET", url, true); 
  xmlhttp.send();

  function ExibeDadosJupiter(response){
    var arr = JSON.parse(response); //converter JSON em array
    var out = "<p>Jupiter:</p><ul class=\"fonte\"><li>Volume: " + arr[0].Volume + 
    "</li><br><li>Massa: " + arr[0].Massa + 
    "</li><br><li>Gravidade: " + arr[0].Gravidade + 
    "</li><br><li>Temperatura: " + arr[0].Temperatura + 
    "</li><br><br><li><a href=\"Paginas/PaginaJupiter.html\">mais informações</a></li></ul>";         
    document.getElementsByClassName("informacaoBasico")[5].innerHTML = out;
  }

  xmlhttp = new XMLHttpRequest();
  url = "http://localhost:3000/planeta/686";
  xmlhttp.onreadystatechange=function() {
  if (this.readyState == 4 && this.status == 200)
  {
    ExibeDadosMarte(this.responseText);
  }
  } 
  xmlhttp.open("GET", url, true); 
  xmlhttp.send();

  function ExibeDadosMarte(response){
    var arr = JSON.parse(response); //converter JSON em array
    var out = "<p>Marte:</p><ul class=\"fonte\"><li>Volume: " + arr[0].Volume + 
    "</li><br><li>Massa: " + arr[0].Massa + 
    "</li><br><li>Gravidade: " + arr[0].Gravidade + 
    "</li><br><li>Temperatura: " + arr[0].Temperatura + 
    "</li><br><br><li><a href=\"Paginas/PaginaMarte.html\">mais informações</a></li></ul>";         
    document.getElementsByClassName("informacaoBasico")[4].innerHTML = out;
  }

  xmlhttp = new XMLHttpRequest();
  url = "http://localhost:3000/planeta/87";
  xmlhttp.onreadystatechange=function() {
  if (this.readyState == 4 && this.status == 200)
  {
    ExibeDadosMercurio(this.responseText);
  }
  } 
  xmlhttp.open("GET", url, true); 
  xmlhttp.send();

  function ExibeDadosMercurio(response){
    var arr = JSON.parse(response); //converter JSON em array
    var out = "<p>Mercurio:</p><ul class=\"fonte\"><li>Volume: " + arr[0].Volume + 
    "</li><br><li>Massa: " + arr[0].Massa + 
    "</li><br><li>Gravidade: " + arr[0].Gravidade + 
    "</li><br><li>Temperatura: " + arr[0].Temperatura + 
    "</li><br><br><li><a href=\"Paginas/PaginaMercurio.html\">mais informações</a></li></ul>";         
    document.getElementsByClassName("informacaoBasico")[1].innerHTML = out;
  }

  xmlhttp = new XMLHttpRequest();
  url = "http://localhost:3000/planeta/60190";
  xmlhttp.onreadystatechange=function() {
  if (this.readyState == 4 && this.status == 200)
  {
    ExibeDadosNetuno(this.responseText);
  }
  } 
  xmlhttp.open("GET", url, true); 
  xmlhttp.send();

  function ExibeDadosNetuno(response){
    var arr = JSON.parse(response); //converter JSON em array
    var out = "<p>Netuno:</p><ul class=\"fonte\"><li>Volume: " + arr[0].Volume + 
    "</li><br><li>Massa: " + arr[0].Massa + 
    "</li><br><li>Gravidade: " + arr[0].Gravidade + 
    "</li><br><li>Temperatura: " + arr[0].Temperatura + 
    "</li><br><br><li><a href=\"Paginas/PaginaNetuno.html\">mais informações</a></li></ul>";         
    document.getElementsByClassName("informacaoBasico")[8].innerHTML = out;
  }

  
  xmlhttp = new XMLHttpRequest();
  url = "http://localhost:3000/planeta/10759";
  xmlhttp.onreadystatechange=function() {
  if (this.readyState == 4 && this.status == 200)
  {
    ExibeDadosSaturno(this.responseText);
  }
  } 
  xmlhttp.open("GET", url, true); 
  xmlhttp.send();

  function ExibeDadosSaturno(response){
    var arr = JSON.parse(response); //converter JSON em array
    var out = "<p>Saturno:</p><ul class=\"fonte\"><li>Volume: " + arr[0].Volume + 
    "</li><br><li>Massa: " + arr[0].Massa + 
    "</li><br><li>Gravidade: " + arr[0].Gravidade + 
    "</li><br><li>Temperatura: " + arr[0].Temperatura + 
    "</li><br><br><li><a href=\"Paginas/PaginaSaturno.html\">mais informações</a></li></ul>";         
    document.getElementsByClassName("informacaoBasico")[6].innerHTML = out;
  }

  xmlhttp = new XMLHttpRequest();
  url = "http://localhost:3000/planeta/365";
  xmlhttp.onreadystatechange=function() {
  if (this.readyState == 4 && this.status == 200)
  {
    ExibeDadosTerra(this.responseText);
  }
  } 
  xmlhttp.open("GET", url, true); 
  xmlhttp.send();

  function ExibeDadosTerra(response){
    var arr = JSON.parse(response); //converter JSON em array
    var out = "<p>Terra:</p><ul class=\"fonte\"><li>Volume: " + arr[0].Volume + 
    "</li><br><li>Massa: " + arr[0].Massa + 
    "</li><br><li>Gravidade: " + arr[0].Gravidade + 
    "</li><br><li>Temperatura: " + arr[0].Temperatura + 
    "</li><br><br><li><a href=\"Paginas/PaginaTerra.html\">mais informações</a></li></ul>";         
    document.getElementsByClassName("informacaoBasico")[3].innerHTML = out;
  }

  xmlhttp = new XMLHttpRequest();
  url = "http://localhost:3000/planeta/30660";
  xmlhttp.onreadystatechange=function() {
  if (this.readyState == 4 && this.status == 200)
  {
    ExibeDadosUrano(this.responseText);
  }
  } 
  xmlhttp.open("GET", url, true); 
  xmlhttp.send();

  function ExibeDadosUrano(response){
    var arr = JSON.parse(response); //converter JSON em array
    var out = "<p>Urano:</p><ul class=\"fonte\"><li>Volume: " + arr[0].Volume + 
    "</li><br><li>Massa: " + arr[0].Massa + 
    "</li><br><li>Gravidade: " + arr[0].Gravidade + 
    "</li><br><li>Temperatura: " + arr[0].Temperatura + 
    "</li><br><br><li><a href=\"Paginas/PaginaUrano.html\">mais informações</a></li></ul>";         
    document.getElementsByClassName("informacaoBasico")[7].innerHTML = out;
  }

  xmlhttp = new XMLHttpRequest();
  url = "http://localhost:3000/planeta/225";
  xmlhttp.onreadystatechange=function() {
  if (this.readyState == 4 && this.status == 200)
  {
    ExibeDadosVenus(this.responseText);
  }
  } 
  xmlhttp.open("GET", url, true); 
  xmlhttp.send();

  function ExibeDadosVenus(response){
    var arr = JSON.parse(response); //converter JSON em array
    var out = "<p>Venus:</p><ul class=\"fonte\"><li>Volume: " + arr[0].Volume + 
    "</li><br><li>Massa: " + arr[0].Massa + 
    "</li><br><li>Gravidade: " + arr[0].Gravidade + 
    "</li><br><li>Temperatura: " + arr[0].Temperatura + 
    "</li><br><br><li><a href=\"Paginas/PaginaVenus.html\">mais informações</a></li></ul>";         
    document.getElementsByClassName("informacaoBasico")[2].innerHTML = out;
  }