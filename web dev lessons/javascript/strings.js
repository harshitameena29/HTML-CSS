console.log("This is strings tutorial")
let a = "Harry";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
// console.log(a[5]);  //undefined

console.log(a.length)

let real_name = "Harry"
let friend = "Rohan"
//Template literals
console.log("His name is " + real_name + " and his friends name is " + friend)
console.log(`His name is ${real_name} and his friends name is ${friend}`) //more convinient 

let b = "ShivamSh"
console.log(b.toUpperCase())  //SHIVAMSH
console.log(b.toLowerCase())  //shivamsh
console.log(b.length)     //8
console.log(b.slice(1, 5))   //1 included and 5 not included
console.log(b.slice(1)) //upto length

console.log(b.replace("Sh", "77")) //sirf pehli occurence ke liye
console.log(b.concat(a, "Aishwariya", "Rahul", "Priya"))

console.log(b)

//you can run javascript anywhere. just inspect  on any page and in console you can write  
//strings are inmutable //ek baar b = "string" hogya to ab aap b ko change nhi kr skte ho mtlb b ki jagah d = "string" is not valid