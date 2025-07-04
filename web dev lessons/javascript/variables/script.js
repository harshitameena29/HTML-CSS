var a = 5;
// a = a + 1
let b = 6;
let c = "Harry";
let _a = "Shubham";
// var 55a = "Rohan"; // Not Allowed
 
//let likhne se variable global ban jata h.let is used only inside a block and is valid for the block jiske ander vo h

// console.log(a +  b + 8);
// console.log(typeof a, typeof b, typeof c);
{
    // let a = 66;  agar isko comment out kiya to ab a = 5 ho jayega kyuki vo global var h 
    console.log(a) 
}
console.log(a)
// const a1 = 6;
// a1 = a1 + 1; // Not Allowed because a1 is constant

let x = "Harry bhai";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r) 
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)


let o = {  //object datatype
    "name": "Harry",
    "job code": 5600,
    "is_handsome": true
}

console.log(o);
o.salary = "100crores";
console.log(o);
o.salary = "500crores";
console.log(o);