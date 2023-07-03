function fib(number){
    let num = [0,1]; 
    for(let i=2; i< number; i++){
        num[i] = num[i-1] + num[i-2]
    }
    return num;
}

console.log('FIB', fib(10))