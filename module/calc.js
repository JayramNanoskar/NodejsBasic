function add(a, b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

module.exports.add = add; // first way to export
exports.sub = sub; 
//second way to export
// internally in node, it is var exports = module.exports;

//third way to export
module.exports = { // here we can export directly as inline object
    add, // internally, add : add
    sub // internally, sub : sub
}
