
//consumo la api de productos
let productos = fetch('https://fakestoreapi.com/products')
.then(res => res.json())
.then(json => mostrar(json))

function suma(precios){

    let total = document.getElementById("total")

    let suma = parseFloat(total.textContent)

    let precio = parseFloat(precios)

    return precio + suma

}
//defino la funcion que va cargando los productos
function mostrar(pro){
    //capturo la ul del documento
    let lista = document.getElementById("lista")

    //recorro los items de la api
    for (let item of pro){
        //por cada item crea una lista y toma de la api el nombre y precio del producto
        let li = document.createElement("li")
        li.textContent = `${item.title} - ${item.price}`

        let img = document.createElement("img")
        img.src = item.image
        img.className = "image"

        let boton = document.createElement("button")
        boton.textContent = "+"

        //capturo el evento de + y voy agregando la suma del precio
       boton.addEventListener("click", () => {

            let contenido = document.getElementById("contenido")

            let nuevo = document.createElement("li")
            nuevo.textContent = `${item.title} - ${item.price}`

            contenido.append(nuevo)

            let sumado = suma(item.price)

            let resultado = document.getElementById("total")
            resultado.textContent = sumado

        })
        li.appendChild(img)
        li.appendChild(boton)
        lista.appendChild(li)
    }
}

