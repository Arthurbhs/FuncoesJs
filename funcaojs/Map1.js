const carrinho = [
    '{"nome": "borracha", "preço": 3.45} ',
    '{"nome": "Caderno", "preço": 13.90 } ',
    '{"nome": "Kit de lapis", "preço": 41.22 } ',
    '{"nome": "Caneta", "preço": 3.50 } '
]
 const paraObjeto = json => JSON.parse(json)
 const apenasPreco = produto => produto.preco

 const resulado = carrinho.map(paraObjeto).map(apenasPreco)
 console.log(resultado)