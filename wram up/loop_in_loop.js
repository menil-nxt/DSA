// loop within a loop.
console.log("loop within loop");
for (let i = 0; i < 3; i++){
    console.log("jotaniya",i);
    for(let j = 0; j < 3; j++){
        console.log("menil",j);
    }
}


for (let i = 0; i < 3; i++){
    for (let j = 0; j < i ; j++){
        console.log("i => " + i , "j => " + j);
    }
}


console.log("j <= i");
for(let i = 0; i < 5; i++){
    for (let j = 0; j <= i; j++){
        console.log("i => " + i , "j => " + j)
    }
}

console.log("j = i");
for(let i = 0; i < 3; i++){
    for (let j = i; j > 0; j--){                    // output ;- (1 -> 1),(2 -> 2),(2 -> 1). 
        console.log("i => " + i , "j => " + j)          
    }
}


console.log("j >= i");
for(let i = 0; i < 3; i++){
    for (let j = i; j >= 0; j--){                    // output ;- (1 -> 1),(2 -> 2),(2 -> 1). 
        console.log("i => " + i , "j => " + j)          
    }
}


console.log(" Complate reverse loop");
for(let i = 5; i > 0; i--){
    for (let j = 0; j < i; j++){                    // output ;- (1 -> 1),(2 -> 2),(2 -> 1). 
        console.log("i => " + i , "j => " + j)          
    }
}