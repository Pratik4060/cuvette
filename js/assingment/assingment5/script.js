const numbers = [1,2,3,4,5];

const double  = numbers.map( num => num *2);
const even = numbers.filter(num => num % 2 == 0);
const sum = numbers.reduce((acc,num) => acc + num);

console.log(double);
console.log(even);
console.log(sum);

const user = {
    name: "pratik",
    age: 12,
    city: "pune"
}

const{name,age,city} = user;

const message = `my name is ${name} and i am ${age} years old lives in ${city}`
console.log(message);


const arr1 = [1,2,3];
const arr2 = [4,5,6];

const merge = [...arr1,...arr2];
console.log(merge)