//CALCULADORA DE FUNCIONES CUADRATICAS --> F(x) = Ax + Bx + C --> Ax SIEMPRE ESTA ELEVADO AL CUADRADO
//DADOS LOS VALORES DE Ax, Bx Y C, VA A CALCULAR AMBAS RAICES, DE SER POSIBLE(NO CALCULA LAS RAICES EN EL CONJUNTO DE COMPLEJOS), EL VERTICE Y LA ORDENADA AL ORIGEN DE LA FUNCION DADA
//EL PROGRAMA CUENTA CON 3 FUNCIONES, LA PRIMERA CALCULA AMBAS RAICES DE LA FUNCION, LA SEGUNDA EL X DEL VERTICE Y LA TERCERA EL Y DEL VERTICE
function calcularRaices(a, b, c, i) {
    let discriminante = b * b - 4 * a * c
    if (discriminante < 0) {
        console.log("Las Raices Pertenecen al Conjunto de Numeros Complejos. Por lo Tanto, el Discriminante es Menor que 0")
        return 0
    } else {
        discriminante = Math.sqrt(discriminante)
        if(i == 0) {
            let raizUno = parseFloat((-b + discriminante) / (2 * a))
            return raizUno
        } else {
            let raizDos = parseFloat((-b - discriminante) / (2 * a))
            return raizDos
        }
    }
}

function calcularXVertice(a, b) {
    let xVertice = parseFloat(-b / (2 * a))
    return xVertice
}

function calcularYVertice(a, b, c, xVertice) {
    let cuentaAux = a * xVertice
    let yVertice = parseFloat(cuentaAux * cuentaAux + b * xVertice + c)
    return yVertice
}


let a, b, c, xUno, xDos, xV, yV, ordenadaOrigen
let userRespuesta = "S"
alert("CALCULADORA DE FUNCIONES CUADRATICAS")
alert("RECUERDE QUE EL VALOR DE Ax SIEMPRE ESTA ELEVADO AL CUADRADO")
while(userRespuesta === "S") {
    a = parseInt(prompt("Ingrese el Valor de Ax: "))
    while(a == 0) {
        a = parseInt(prompt("Ingrese el Valor de a: "))
    }
    b = parseInt(prompt("Ingrese el Valor de Bx: "))
    c = parseInt(prompt("Ingrese el Valor de C: "))
    console.log(a)
    console.log(b)
    console.log(c)
    for(let i = 0; i < 2; i++) {
        if(calcularRaices(a, b, c, i) != 0) {
            if(i == 0) {
                xUno = calcularRaices(a, b, c, i)
                console.log("1º Raiz = ", xUno)
            } else {
                xDos = calcularRaices(a, b, c, i)
                console.log("2º Raiz = ", xDos)
            }
        } else {
            break
        }
    }
    xV = calcularXVertice(a, b)
    yV = calcularYVertice(a, b, c, xV)
    console.log("Vertice = (", xV,";", yV, ")")
    ordenadaOrigen = c
    console.log("Ordenada al Origen = ", c)
    userRespuesta = prompt("Desea Ingresar Otra Funcion(S/N): ")
}