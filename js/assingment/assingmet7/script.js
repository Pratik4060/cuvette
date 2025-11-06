console.log(x);
var x =10

greet()

function greet(){
    console.log("hello");
}


function hello (callback){
    const name = "pratik"
       console.log(callback(name))
}

function input(name){
 return `hello, ${name}`;
}
hello(input)

function makeCounter() {
  let count = 0; 

  return function() {
    count++;
    console.log(count);
  };
}

const counter = makeCounter();

counter(); 
counter(); 
counter(); 
