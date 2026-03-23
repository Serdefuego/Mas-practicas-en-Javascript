document.getElementById("guardar").addEventListener("click", () => {

    let nombreActividad = document.getElementById("actividad").value
    let fechaActividad = document.getElementById("fecha").value
    let descripccion = document.getElementById("descripccion").value      

    let concatenacion = `${nombreActividad}, ${fechaActividad}, ${descripccion}`

    // agregar a la lista en pantalla
    let lista = document.getElementById("lista")
    let li = document.createElement("li")
    li.textContent = concatenacion
    lista.appendChild(li)

    //  traer lo que ya existe o crear array vacío
    let actividades = JSON.parse(localStorage.getItem("actividades")) || []

    // agregar nueva actividad
    actividades.push(concatenacion)

    // guardar array actualizado
    localStorage.setItem("actividades", JSON.stringify(actividades))

    // limpiar inputs
    document.getElementById("actividad").value = ""
    document.getElementById("fecha").value = ""
    document.getElementById("descripccion").value = ""
})