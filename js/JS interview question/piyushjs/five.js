console.log( 0.1 + 0.2 == 0.3) // false because floor value behaves differently as compared to numbers 
console.log(0.1+0.2)
const obj = {
    a:1,
    b:2
}
// console.log(obj.toString(obj)) // it will not be useful because it doesnt print the actual data inside the object it only prints [object Object]

// if you actually want to convert the above obj to string used JSON.stringify
 const str = JSON.stringify(obj)
 console.log(str)

 // shallow copy ans deep copy 
 // map() filter() reduce()
 