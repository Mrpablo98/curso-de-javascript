
let free=false;

function comprobarEdad(){

let date=new Date();
let hour=date.getHours();
let edad=document.getElementById('edad').value;
console.log(hour);
console.log(date)
document.getElementById('entrada').innerHTML="";
if(edad<18){
    document.getElementById('resultado').innerHTML= "No puede ingresar, debe ser mayor de edad";
}else if(edad>=18){
    document.getElementById('resultado').innerHTML="Puede ingresar";
    if(hour>=2 && hour<=7 && free==false){
        document.getElementById('entrada').innerHTML="No tiene que pagar, la entrada es gratuita a partir de las 2 am";
        free=true;
    }
}

}
