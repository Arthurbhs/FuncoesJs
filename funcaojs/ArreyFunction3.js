let comparaThis = function(param){
    console.log(this === param)
}

comparamThis(global)

const obj = {}
comparamThis = comparamThis.bind(obj)
comparamThis(global)
comparamThis(obj)

let comparamThisArrow = param => console.log(this === param)
comparamThisArrow(global)
comparamThisArrow(module.exports)

comparamThisArrow = comparamThisArrow.bind(obj)
comparamThisArrow(obj)
comparamThisArrow(module.exports)