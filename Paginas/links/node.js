
var xmlhttp = new XMLHttpRequest();
var url = "http://localhost:3000/estrela";
xmlhttp.onreadystatechange=function() {
if (this.readyState == 4 && this.status == 200) {
//quand o os dados retornarem da requisição serão enviados para a função ExibeDados()
ExibeDados(this.responseText);
}
} 
xmlhttp.open("GET", url, true); 
xmlhttp.send();

function ExibeDados(response) {
console.log(response);
var arr = JSON.parse(response); //converter JSON em array
console.log(arr);
var out = "<table>";
for(var i = 0; i < arr.length; i++) {
out += "<tr><td>" + arr[i].Nome + "</td><td>" + arr[i].Nome + "</td><td>" + arr[i].Volume + "</td><td>" + arr[i].Massa + "</td><td>" +
arr[i].Gravidade + "</td><td>" + arr[i].QntsPlanetasOrbitam + "</td></tr>";
}
out += "</table>";
document.getElementById("id01").innerHTML = out;
}