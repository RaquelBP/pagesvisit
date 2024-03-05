const boton = document.getElementById("btnReestablecer")
const visitas = document.getElementById("contadorVisitas")


function contadorVisitas(){
    let v = localStorage.getItem("Contador")
    v++

    localStorage.setItem("Contador", v)

    return v
}



contadorVisitas()

visitas.innerHTML= localStorage.getItem("Contador")

boton.addEventListener("click", reset)

function reset(){
    localStorage.clear()
    visitas.innerHTML= 0
}