let form = document.getElementById("form")

form.addEventListener("submit",(event) =>{
    event.preventDefault()
    let nombre = document.getElementById("exampleInputName1").value
    let apellido = document.getElementById("exampleInputSurname1").value
    let gmail = document.getElementById("exampleInputEmail1").value
    let consulta = document.getElementById("consulta").value


    console.log(nombre)
    console.log(apellido)
    console.log(gmail)
    console.log(consulta)
})



/* JSON + STORAGE */

const dia=[{id: 2, producto:"vuelos"}];
const diaJSON = JSON.stringify(dia);
console.log(diaJSON);


localStorage.setItem("dia",diaJSON);

localStorage.removeItem("admin");

/* librerias*/
Swal.fire('Reserva tu vuelo')
