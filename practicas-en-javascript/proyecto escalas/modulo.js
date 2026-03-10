let escalaCromatica=["DO","RE","MI","FA","SOL","LA","SI"]

// limpia el div resultado
function borrado(){
    let resultado=document.getElementById("resultados")
    resultado.innerHTML=""
}

// imprime las notas de la escala
function imprimir(nombre){

    let indice=escalaCromatica.indexOf(nombre)
    let escala=[]

    for(let i=indice;i<escalaCromatica.length;i++){
        escala.push(escalaCromatica[i])
    }

    for(let x=0;x<=indice;x++){
        escala.push(escalaCromatica[x])
    }

    for(let j=0;j<escala.length;j++){
        let p=document.createElement("p")
        p.textContent=escala[j]
        let resultado=document.getElementById("resultados")
        resultado.appendChild(p)
    }
}

// busca la nota
function buscador(nombre,escalaCromatica){

    let validacion=escalaCromatica.includes(nombre)

    if(validacion){
        borrado()
        imprimir(nombre)
    }else{
        alert("no se encuentra")
    }
}

document.getElementById("boton").addEventListener("click",()=>{

    let nota=document.getElementById("nota").value
    let valor=nota.toUpperCase()

    buscador(valor,escalaCromatica)

})