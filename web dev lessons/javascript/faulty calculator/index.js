/* Create a faulty calculator using JavaScript
This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:
+ ---> -
* ---> +
- ---> /
/ ---> **
It performs wrong operation 10% of the times*/

let random = Math.random();
console.log(random)
let a = prompt("Enter first number")
let c = prompt("Enter the operator")
let b = prompt("Enter second number") 

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**",
}
if(random > 0.1){
    //perform correct calculation
    console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`) //eval evaluates the string produced by `${a} ${c} ${b}` as actual JavaScript code.eval executes code from a string, which is dangerous if user input is involved.Safe for small demos, but avoid in real projects if possible.
}
else{
    //perform wrong calculation
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)

}