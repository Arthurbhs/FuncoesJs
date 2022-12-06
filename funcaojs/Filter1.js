Array.prototype.filter2 = function(callback){
const newArray = []
for (let i =0; i < this.length; i++) {
    if(callback(this[i], i, this)) {
        newArray.push(this[i])
    }
  }
  return newArray
}


const produtos = [
    {nome: "notebook", preco: 2499, fragil: true},
    {nome: "iPad pro", preco: 4199, fragil: true},
    {nome: "Copo de vidro", preco: 12.49, fragil: true},
    {nome: "Cop de plastico", preco: 18.99, fragil: false}
]


console.l0g(produtos.filter(function(p) {
    return false
}))

const caro = produto => produto.preço >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))