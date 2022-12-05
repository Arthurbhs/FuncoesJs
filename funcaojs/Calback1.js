const notas  = [1.7, 7.6, 4.5, 5.4, 8.7]

let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
}
    )
    console.log(notasBaixas2)

const notasMenorQue7 = nota => nota > 7

    const notasBaixas3 = notas.filter(notasMenorQue7)
    console.log(notasBaixas3)