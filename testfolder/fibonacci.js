function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    
    //Write your code here:
    
    var output = [];
    let a = 0, b = 1;
    
    
    for (let i = 0; i < n; i++) {
        output.push(a);
        let next = a + b;
        a = b;
        b = next;
    }
    return output;
    //Return an array of fibonacci numbers starting from 0.
    
//Do NOT change any of the code below 👇
}


console.log(fibonacciGenerator (56));