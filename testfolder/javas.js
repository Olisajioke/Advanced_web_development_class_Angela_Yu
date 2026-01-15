var sname = input("Enter your name", "name");
var oda_char = sname.slice(1, -1);
var first_char = sname.slice(0, 1).toUpperCase();

console.log("Hello, " + first_char+oda_char);