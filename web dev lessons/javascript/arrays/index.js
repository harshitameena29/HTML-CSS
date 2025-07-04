//array are mutable kyuki ham original array me changes kr skte h
//typeof array are object 
let arr = [1, 2, 4, 5, 7]
//  Index  0, 1, 2, 3, 4

arr[0] = 5666;
// console.log(arr, typeof arr);
// console.log(arr.length)

// console.log(arr[0])
// console.log(arr[2])
// console.log(arr[4])

console.log(arr.toString()) //convert array to string
console.log(arr.join(" and ")) //har element ke beech me "and" aa jayega

//a.pop() -> remove last element

//a.push()->add element to the last of array. you can also puch "Harry" to the array so it will become [1,2,3,'Harry']

//a.shift()-> remove first element(pop ka bhai)
//a.unshift->add element to first of array(push ka bhai)

// delete a[6] -> deletes the 6th index element of array. agar length dekhe to delete krne ke baad bhi length same hi rahegi pr agar a[6] ko print kare na apan to undefined aayega

//let a1 = [1,2,3]
//let a2 = [4,5,6]
//let a3 = [9,8,7]
//a1.concat(a2,a3) 
// it returns [1,2,3,4,5,6,9,8,7]
//it return a new array and does not change existing arrays

//let a = [7,3,9]
//a.sort()
//it modifies original array

//let numbers = [1,2,3,4,5]
//numbers.splice(1,3)
//this will remove the elements of index 1,2,3 from element

//numbers.splice(1,3,22,55) 
//this will remove elements of index 1,2,3 and add 22,55 in place of 1,2,3 
//arr = [1,2,3,4,5]
//removing 2,3,4 numbers
// output = [1,22,55,5]

//slice()-> slice out a piece of elements
//const num = [1,2,3,4,5]
//num.slice(2) -> [3,4]
//num.slice(1,3) -> [2,3]

//reverse()-> reverse the original array.  
//[1,2,3].reverse()