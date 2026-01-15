function whosPaying(names) {
    
/******Don't change the code above*******/
    
    //Write your code here.
    var num = Math.random()* names.length; 
    var wNum  = Math.floor(num);
    var payer = names[wNum];
    return payer + " is going to buy lunch today!"

/******Don't change the code below*******/    
}

var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
console.log(whosPaying(names));