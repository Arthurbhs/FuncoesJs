const fabricantes =  ["Mercedez", "Audi", "BMw"]

function imprimir(name, indice) {
    console.log(`${indice + 1}. ${name}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => 
    console.log(fabricante)
)