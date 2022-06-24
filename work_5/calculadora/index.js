
//let numeroAOperar = "2+8-3*4"
let numeroAOperar = prompt("Escriba la operacion")

while (numeroAOperar.length>20){
    numeroAOperar = prompt("Vuelva a escribir el nuermo")
}




console.log("Operación", numeroAOperar)
//console.log(typeof(numeroAOperar))

var arrayString = numeroAOperar.split('')
//console.log("array string")
//console.log(arrayString)





let realizarOperacion = (array,signo)=>{
    let indiceSigno = array.indexOf(signo)
    let primerNumero = array[indiceSigno-1]
    let segundoNumero = array[indiceSigno+1]
    let operacion
    if (signo ==="*"){
        return operacion = parseFloat(primerNumero) * parseFloat(segundoNumero)
    } else if(signo ==="/"){
        return operacion = parseFloat(primerNumero) / parseFloat(segundoNumero)
    } else if(signo ==="+"){
        return operacion = parseFloat(primerNumero) + parseFloat(segundoNumero)
    } else if(signo ==="-"){
        return operacion = parseFloat(primerNumero) - parseFloat(segundoNumero)
    }
}
let quitarDigitos = (array, digit, callback)=>{
  
    let digitStart = array.indexOf(digit)-1
    array.splice(digitStart, 3, callback)
    let newArray = array
    

    return newArray
}

let numeroSignos = 1;

let existeMult = false
let existeDiv = false

arrayString.forEach(digit=>{
    //console.log(digit)
    if (digit === "*"){
         existeMult = true
        numeroSignos+=1
    } else if (digit === "/"){
         existeDiv = true
        numeroSignos+=1
    } else if (digit === "-"){
        numeroSignos+=1
    } else if (digit === "+"){
        numeroSignos+=1
    }
    if (digit ==="*" || digit ==="/"){
        existeMultDiv = true
    }
})

//console.log(`en esta operacion hay ${numeroSignos}`)


let finalPrimeraIteracion = false;
for (let i = 0; i< numeroSignos;i++){
    //console.log("array al principio", arrayString)
    arrayString.forEach(digit=>{
        if (digit ==="*" || digit ==="/" || digit ==="+" || digit ==="-" ){
            if ((digit ==="*" || digit ==="/")){
                if (digit ==="*"){
                   (quitarDigitos(arrayString, digit, realizarOperacion(arrayString, "*")))
                } else if(digit ==="/") {
                    (quitarDigitos(arrayString, digit, realizarOperacion(arrayString, "/")))
                }  
            }  else{
                if ((digit ==="+" || digit ==="-") && (!(existeMult)&&!(existeDiv))){
                    if (digit ==="+"){
                        (quitarDigitos(arrayString, digit, realizarOperacion(arrayString, "+")))
                    } else if(digit ==="-") {
                       (quitarDigitos(arrayString, digit, realizarOperacion(arrayString, "-")))
                    }  
                    
                }  
            }
        }
        existeMult = (arrayString.includes("*"))
        existeDiv = (arrayString.includes("/"))
    })
    finalPrimeraIteracion = true

  //  console.log("array al final", arrayString)
    if (arrayString.length ===1){
        break
    }
}
console.log("Resultado", arrayString)


