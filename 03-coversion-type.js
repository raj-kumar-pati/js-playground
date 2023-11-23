//we can conveart number,boolian,string .=>check for null undefind and NaN(not a num);


//let someStr = null; 
//let someStr = "55";
//let someStr = true;
//let someStr = 33;
let someStr = undefined;

let newNum = Number(someStr);
let newBool = Boolean(someStr);
let newStr = String(someStr);

console.table([newNum,newBool,newStr]);
console.table([typeof(newBool),typeof(newNum),typeof(newStr)]);





