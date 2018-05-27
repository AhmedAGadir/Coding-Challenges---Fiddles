function add5ToFunction(funct) {
return funct() + 5
}

function twoPlus2(){
return 2 + 2 
}

console.log(add5ToFunction(twoPlus2))