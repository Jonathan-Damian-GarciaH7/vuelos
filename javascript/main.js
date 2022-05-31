let nombre = prompt("ingrese su nombre");
let opcion;
const dias = ["LUNES","MARTES","MIERCOLES", "JUEVES","VIERNES"];
let existe2 = 0;
let vendido = 0;
let mensaje = document.getElementById("reserva")
alert("Bienvenido " + nombre + " a Vuelos Arg!");

class Aviones{

     constructor(capacidad,destino, valor){

          this.capacidad = capacidad.toUpperCase;
          this.destino = destino.toUpperCase;
          this.valor = parseFloat(valor);
     }

     calcular_iva(){

          this.valor = this.valor + (this.valor * 0.21);
     }
}
const vuelo = new Aviones (100,"Francia", 15000 );
const vuelo1 = new Aviones (200,"Dinamarca", 20000);
const vuelo2 = new Aviones (300,"Puerto Rico", 50000);
const vuelo3 = new Aviones (100,"Brasil",45000);


function comprobarDia(existe){
    
     existe = -1;
 
     while(existe == -1){
         
         for(let i = 0; i <5; i++){
 
             if(diaHabil == dias[i] ){
                 
                 existe = i;
             }
         }
 
         if(existe == -1){
             alert("el dia que ingreso es incorrecto");
             diaHabil = prompt("Elija el dia que quiere viajar a su destino elegido (los vuelos son solo de Lunes a Viernes)\nRECUERDE INGRESAR EL DIA SOLO EN MAYUSCULAS");
         }
         else{
             alert(`Genial lo esperamos el proximo ${dias[existe]}`); 
         }
         
     }
     
     existe2 = existe;
 
     return existe;
 
 }

alert("Seleccione el destino del vuelo que quiere comprar");
opcion = parseInt(prompt("1-Francia U$S 15000\n2-Dinamarca U$S 20000\n3-Puerto Rico U$S 50000\n4-Brasil U$S 45000\n5- Salir"));

let diaHabil = prompt("Elija el dia que quiere viajar a su destino elegido (los vuelos son solo de Lunes a Viernes)\nRECUERDE INGRESAR EL DIA SOLO EN MAYUSCULAS");
comprobarDia(existe2);

do {

     

     switch (opcion) {
 
         case 1:
             alert("Gracias por tu compra");
             vuelo.calcular_iva();
             mensaje.innerHTML = `<h2> <br> ${nombre.toUpperCase()} VIAJAS EL PROXIMO ${dias[existe2]}</h2> <br> <h3> Monto a abonar $${vuelo.valor} ARS </h3>`;
             vendido = 1;

             break;
         case 2:
             alert("Gracias por tu compra");
             vuelo1.calcular_iva();
             mensaje.innerHTML = `<h2> <br> ${nombre.toUpperCase()} VIAJAS EL PROXIMO ${dias[existe2]}</h2> <br> <h3> Monto a abonar $${vuelo1.valor} ARS </h3>`;
             vendido = 1;
             break;
         case 3:
             alert("Gracias por tu compra");
             vuelo2.calcular_iva();
             mensaje.innerHTML = `<h2> <br> ${nombre.toUpperCase()} VIAJAS EL PROXIMO ${dias[existe2]}</h2> <br> <h3> Monto a abonar $${vuelo2.valor} ARS </h3>`;
             vendido = 1;
             break;
 
         case 4:
             alert("Gracias por tu compra");
             vuelo3.calcular_iva();
             mensaje.innerHTML = `<h2> <br> ${nombre.toUpperCase()} VIAJAS EL PROXIMO ${dias[existe2]}</h2> <br> <h3> Monto a abonar $${vuelo3.valor} ARS </h3>`;
             vendido = 1;
             break;

          case 5:
               vendido = 1;
            break;
 
         default:
             alert("numero incorrecto, vuelva a ingresarlo");
             break
          
          }
 
     

     if (opcion != 5 && vendido == 0){
          opcion = parseInt(prompt("1-Francia U$S 15000\n2-Dinamarca U$S 20000\n3-Puerto Rico U$S 50000\n4-Brasil U$S 45000\n5- Salir"));
          if(opcion == 5){
              alert("Muchas gracias por elegirnos");
          }
     }
     

}while(vendido != 1);
       
/*usuario y contraseña     LOCAL STORAGE*/





/*
let msj= localStorage.getItem("admin")
let name= localStorage.getItem("nombre")

console.log(typeof dia)

localStorage.removeItem("dia")
localStorage.clear()

*/
