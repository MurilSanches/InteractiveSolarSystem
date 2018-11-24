var url_atual = window.location.href;

if (url_atual.match(/PaginaJupiter.html/))
{
  var xmlhttp = new XMLHttpRequest();
  var url = "http://localhost:3000/planeta/4331";
  xmlhttp.onreadystatechange=function() {
  if (this.readyState == 4 && this.status == 200) {
  ExibeDadosJupiter(this.responseText);
  }
  } 
  xmlhttp.open("GET", url, true); 
  xmlhttp.send();
}

if(url_atual.match(/PaginaMarte.html/))
{
  var xmlhttp = new XMLHttpRequest();
  var url = "http://localhost:3000/planeta/686";
  xmlhttp.onreadystatechange=function() {
  if (this.readyState == 4 && this.status == 200) {
  ExibeDadosMarte(this.responseText);
  }
  } 
  xmlhttp.open("GET", url, true); 
  xmlhttp.send();
}

if(url_atual.match(/PaginaMercurio.html/))
{
  var xmlhttp = new XMLHttpRequest();
  var url = "http://localhost:3000/planeta/87";
  xmlhttp.onreadystatechange=function() {
  if (this.readyState == 4 && this.status == 200) {
  ExibeDadosMercurio(this.responseText);
  }
  } 
  xmlhttp.open("GET", url, true); 
  xmlhttp.send();
}
  
if(url_atual.match(/PaginaNetuno.html/)){
  var xmlhttp = new XMLHttpRequest();
  var url = "http://localhost:3000/planeta/60190";
  xmlhttp.onreadystatechange=function() {
  if (this.readyState == 4 && this.status == 200) {
  ExibeDadosNetuno(this.responseText);
  }
  } 
  xmlhttp.open("GET", url, true); 
  xmlhttp.send();
}

if(url_atual.match(/PaginaSaturno.html/)) {
  var xmlhttp = new XMLHttpRequest();
  var url = "http://localhost:3000/planeta/10759";
  xmlhttp.onreadystatechange=function() {
  if (this.readyState == 4 && this.status == 200) {
  ExibeDadosSaturno(this.responseText);
  }
  } 
  xmlhttp.open("GET", url, true); 
  xmlhttp.send();
}

if(url_atual.match(/PaginaSol.html/)){
  var xmlhttp = new XMLHttpRequest();
  var url = "http://localhost:3000/estrela";
  xmlhttp.onreadystatechange=function() {
  if (this.readyState == 4 && this.status == 200) {
  ExibeDadosSol(this.responseText);
  }
  } 
  xmlhttp.open("GET", url, true); 
  xmlhttp.send();
}

if(url_atual.match(/PaginaUrano.html/)){
  var xmlhttp = new XMLHttpRequest();
  var url = "http://localhost:3000/planeta/30660";
  xmlhttp.onreadystatechange=function() {
  if (this.readyState == 4 && this.status == 200) {
  ExibeDadosUrano(this.responseText);
  }
  } 
  xmlhttp.open("GET", url, true); 
  xmlhttp.send();
}
 
if(url_atual.match(/PaginaTerra.html/)){
  var xmlhttp = new XMLHttpRequest();
  var url = "http://localhost:3000/planeta/365";
  xmlhttp.onreadystatechange=function() {
  if (this.readyState == 4 && this.status == 200) {
  ExibeDadosTerra(this.responseText);
  }
  } 
  xmlhttp.open("GET", url, true); 
  xmlhttp.send();
}

if(url_atual.match(/PaginaVenus.html/)){
  var xmlhttp = new XMLHttpRequest();
  var url = "http://localhost:3000/planeta/225";
  xmlhttp.onreadystatechange=function() {
  if (this.readyState == 4 && this.status == 200) {
  ExibeDadosVenus(this.responseText);
  }
  } 
  xmlhttp.open("GET", url, true); 
  xmlhttp.send();
}
  
  function ExibeDadosSaturno(response) {
  
    var arr = JSON.parse(response); //converter JSON em array
    
    var out = "<table>";
    for(var i = 0; i < arr.length; i++) {
    out += "<ul class=\"informacaoSol\"><li>Volume: " + arr[i].Volume + "</li><li>Área da Superficie: " + arr[i].AreaDaSuperficie + "</li><li>Massa: " + arr[i].Massa + "</li><li>Densidade: " + arr[i].Densidade + "</li><li>Gravidade: " + arr[i].Gravidade + "</li><li>Período De Rotação: " + arr[i].PeriodoDeRotacao + "</li><li>Periodo Orbital: " + arr[i].PeriodoOrbital + "</li><li>Temperatura: " + arr[i].Temperatura + "</li><li>Velocidade Orbital: " + arr[i].VelocidadeOrbital + "</li><li>Satélites Naturais: " + arr[i].QntsSatelitesNaturais + "</li></ul>"
      }
    out += "</table>";
    document.getElementById("div-content5").innerHTML = out;
    } 
  

  function ExibeDadosSol(response) 
  {
    var arr = JSON.parse(response); //converter JSON em array
    
    var out = "<table>";
    for(var i = 0; i < arr.length; i++) {
    out += "<ul class=\"informacaoSol\"><li>Volume: " + arr[i].Volume + "</li><li>Área da Superficie: " + arr[i].AreaDaSuperficie + "</li><li>Massa: " + arr[i].Massa + "</li><li>Densidade: " + arr[i].Densidade + "</li><li>Gravidade: " + arr[i].Gravidade + "</li><li>Período Orbital Galáctico: " + arr[i].PeriodoOrbitalGalactico + "</li><li>Planetas Orbitantes: " + arr[i].QntsPlanetasOrbitam + "</li><li>Temperatura da Superficie: " + arr[i].TemperaturaSuperficie + "</li><li>Temperatura do Núcleo: " + arr[i].TemperaturaNucleo + "</li><li>Velocidade De Rotação: " + arr[i].VelocidadeDeRotacao + "</li></ul>"
      }
    out += "</table>";
    document.getElementById("div-content6").innerHTML = out;
  } 

  function ExibeDadosUrano(response) 
  {
  
    var arr = JSON.parse(response); //converter JSON em array
    
    var out = "<table>";
    for(var i = 0; i < arr.length; i++) {
    out += "<ul class=\"informacaoSol\"><li>Volume: " + arr[i].Volume + "</li><li>Área da Superficie: " + arr[i].AreaDaSuperficie + "</li><li>Massa: " + arr[i].Massa + "</li><li>Densidade: " + arr[i].Densidade + "</li><li>Gravidade: " + arr[i].Gravidade + "</li><li>Período De Rotação: " + arr[i].PeriodoDeRotacao + "</li><li>Periodo Orbital: " + arr[i].PeriodoOrbital + "</li><li>Temperatura: " + arr[i].Temperatura + "</li><li>Velocidade Orbital: " + arr[i].VelocidadeOrbital + "</li><li>Satélites Naturais: " + arr[i].QntsSatelitesNaturais + "</li></ul>"
      }
    out += "</table>";
    document.getElementById("div-content8").innerHTML = out;
  } 

  function ExibeDadosTerra(response) 
  { 
    var arr = JSON.parse(response); //converter JSON em array
    var out = "<table>";
    for(var i = 0; i < arr.length; i++) {
    out += "<ul class=\"informacaoSol\"><li>Volume: " + arr[i].Volume + "</li><li>Área da Superficie: " + arr[i].AreaDaSuperficie + "</li><li>Massa: " + arr[i].Massa + "</li><li>Densidade: " + arr[i].Densidade + "</li><li>Gravidade: " + arr[i].Gravidade + "</li><li>Período De Rotação: " + arr[i].PeriodoDeRotacao + "</li><li>Periodo Orbital: " + arr[i].PeriodoOrbital + "</li><li>Temperatura: " + arr[i].Temperatura + "</li><li>Velocidade Orbital: " + arr[i].VelocidadeOrbital + "</li><li>Satélites Naturais: " + arr[i].QntsSatelitesNaturais + "</li></ul>"
     }
    out += "</table>";
    document.getElementById("div-content7").innerHTML = out;
  }

  function ExibeDadosVenus(response) 
  {
    var arr = JSON.parse(response);
    
    var out = "<table>";
    for(var i = 0; i < arr.length; i++) {
    out += "<ul class=\"informacaoSol\"><li>Volume: " + arr[i].Volume + "</li><li>Área da Superficie: " + arr[i].AreaDaSuperficie + "</li><li>Massa: " + arr[i].Massa + "</li><li>Densidade: " + arr[i].Densidade + "</li><li>Gravidade: " + arr[i].Gravidade + "</li><li>Período De Rotação: " + arr[i].PeriodoDeRotacao + "</li><li>Periodo Orbital: " + arr[i].PeriodoOrbital + "</li><li>Temperatura: " + arr[i].Temperatura + "</li><li>Velocidade Orbital: " + arr[i].VelocidadeOrbital + "</li><li>Satélites Naturais: " + arr[i].QntsSatelitesNaturais + "</li></ul>"
      }
    out += "</table>";
    document.getElementById("div-content9").innerHTML = out;
  } 

  function ExibeDadosJupiter(response) 
  {
    var arr = JSON.parse(response); //converter JSON em array
    var out = "<table>";
    for(var i = 0; i < arr.length; i++) {
    out += "<ul class=\"informacaoSol\"><li>Volume: " + arr[i].Volume + 
      "</li><li>Área da Superficie: " + arr[i].AreaDaSuperficie + 
        "</li><li>Massa: " + arr[i].Massa + 
          "</li><li>Densidade: " + arr[i].Densidade +
             "</li><li>Gravidade: " + arr[i].Gravidade + 
              "</li><li>Período De Rotação: " + arr[i].PeriodoDeRotacao +               
                "</li><li>Periodo Orbital: " + arr[i].PeriodoOrbital + 
                  "</li><li>Temperatura: " + arr[i].Temperatura + 
                    "</li><li>Velocidade Orbital: " + arr[i].VelocidadeOrbital +
                       "</li><li>Satélites Naturais: " + arr[i].QntsSatelitesNaturais + "</li></ul>"
      }
    out += "</table>";
    document.getElementById("div-content1").innerHTML = out;
  } 

  function ExibeDadosMarte(response) 
  {
    var arr = JSON.parse(response); //converter JSON em array
    
    var out = "<table>";
    for(var i = 0; i < arr.length; i++) {
    out += "<ul class=\"informacaoSol\"><li>Volume: " + arr[i].Volume + "</li><li>Área da Superficie: " + arr[i].AreaDaSuperficie + "</li><li>Massa: " + arr[i].Massa + "</li><li>Densidade: " + arr[i].Densidade + "</li><li>Gravidade: " + arr[i].Gravidade + "</li><li>Período De Rotação: " + arr[i].PeriodoDeRotacao + "</li><li>Periodo Orbital: " + arr[i].PeriodoOrbital + "</li><li>Temperatura: " + arr[i].Temperatura + "</li><li>Velocidade Orbital: " + arr[i].VelocidadeOrbital + "</li><li>Satélites Naturais: " + arr[i].QntsSatelitesNaturais + "</li></ul>"
      }
    out += "</table>";
    document.getElementById("div-content2").innerHTML = out;
  } 

  function ExibeDadosMercurio(response) {
  
    var arr = JSON.parse(response); //converter JSON em array
    
    var out = "<table>";
    for(var i = 0; i < arr.length; i++) {
    out += "<ul class=\"informacaoSol\"><li>Volume: " + arr[i].Volume + "</li><li>Área da Superficie: " + arr[i].AreaDaSuperficie + "</li><li>Massa: " + arr[i].Massa + "</li><li>Densidade: " + arr[i].Densidade + "</li><li>Gravidade: " + arr[i].Gravidade + "</li><li>Período De Rotação: " + arr[i].PeriodoDeRotacao + "</li><li>Periodo Orbital: " + arr[i].PeriodoOrbital + "</li><li>Temperatura: " + arr[i].Temperatura + "</li><li>Velocidade Orbital: " + arr[i].VelocidadeOrbital + "</li><li>Satélites Naturais: " + arr[i].QntsSatelitesNaturais + "</li></ul>"
      }
    out += "</table>";
    document.getElementById("div-content3").innerHTML = out;
    } 

    function ExibeDadosNetuno(response) {
  
      var arr = JSON.parse(response); //converter JSON em array
      
      var out = "<table>";
      for(var i = 0; i < arr.length; i++) {
      out += "<ul class=\"informacaoSol\"><li>Volume: " + arr[i].Volume + "</li><li>Área da Superficie: " + arr[i].AreaDaSuperficie + "</li><li>Massa: " + arr[i].Massa + "</li><li>Densidade: " + arr[i].Densidade + "</li><li>Gravidade: " + arr[i].Gravidade + "</li><li>Período De Rotação: " + arr[i].PeriodoDeRotacao + "</li><li>Periodo Orbital: " + arr[i].PeriodoOrbital + "</li><li>Temperatura: " + arr[i].Temperatura + "</li><li>Velocidade Orbital: " + arr[i].VelocidadeOrbital + "</li><li>Satélites Naturais: " + arr[i].QntsSatelitesNaturais + "</li></ul>"
        }
      out += "</table>";
      document.getElementById("div-content4").innerHTML = out;
      } 