let arregloPaises=[
    "argentina","peru","chile","brasil","japon"
]

function paises(arreglo){
    for (let items of arreglo){
        let opccion=document.createElement("option")
        opccion.textContent=items
        document.getElementById("paises").append(opccion)
    }
}



export {arregloPaises,paises}

