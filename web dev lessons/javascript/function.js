//functions are used when we have to use a block of used repeatedly
//function invocation is a way to use the code inside the function
function nice(name) {
    console.log("Hey " + name + " you are nice!")
    console.log("Hey " + name + " you are good!")
    console.log("Hey " + name + " your tshirt is nice!")
    console.log("Hey " + name + " your course is good too!")
}
nice("Harshu")

function sum(a, b, c = 3) { //value of c=3 it is default value
    // console.log(a + b)
    console.log(a, b, c) //this will print the input numbers
    return a + b + c
}


result1 = sum(3, 2)
result2 = sum(7, 5)
result3 = sum(3, 13, 1)

console.log("The sum of these numbers is: ", result1)
console.log("The sum of these numbers is: ", result2)
console.log("The sum of these numbers is: ", result3)

//arrow function: variable ke ander function ko kaid krne ke liye. it is a compact alternative to a traditional function expression
const func1 = (x)=>{
    console.log("I am an arrow function", x)
}
func1(34);
func1(66);
func1(84);