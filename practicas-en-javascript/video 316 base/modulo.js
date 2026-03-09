let pass = document.getElementById("pass")

function validar() {
    let v_1 = false

    for (let letra of pass.value) {
        if (letra == "." || letra == "@") {
            v_1 = true
        }
    }

    if (v_1) {
        document.getElementById("resultado").textContent = "es valida"
    } else {
        document.getElementById("resultado").textContent = "no es valida"
    }
}

document.getElementById("boton")
        .addEventListener("click", validar)

export default validar