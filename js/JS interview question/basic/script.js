// console.log("my name is pratik ", "my hobby is coding")
// console.log(45*2-10)
// const dt = new Date();
// console.log(dt.getFullYear());
// var first= "pratik";
// var last = "raaut"
// console.log(first + " " +last)
// console.log(`${first} ${last}`)

// var a = 12
// console.log(a)
// a=20
// console.log(a)

// console.log(12*12)

// var a = true;
// console.log(typeof a)

// var age = 16
// if(age > 18) console.log(true);
// else console.log(false);

// console.log(100/0)


// let av= 12
// console.log(av)
// const pi = 3.14
// console.log(pi)

// let ab = 14
// ab = 19
// console.log(ab)

// var s = null
// console.log(typeof s) // typeof null is always object 

// var aa = "23"
// console.log(typeof aa)

// var sc = true
// console.log(typeof sc)
//  var aa = "pratik"
//  var dv = 34
//  var rd = true
//  console.log(aa,dv,rd)

// var a;
// console.log(typeof a)  

// 12 = Number
// "harsh" = String
// true false = boolean 
// NaN = number
// null = object 

//  for( let  i = 1;i< 50; i++){
//     console.log(i);
//  }
// let i = 1;
// let ans = 0;
// while ( i <=10){
//     ans  = i +ans;
//         i++;
 
// }
//    console.log(ans);
 
// let str = " javascript"
// for(let i of str){
//     console.log(i)
// }

// for(let  i = 0; i<21; i++){
//     if(i % 2 !== 0){
//       console.log(i)  
//     } 

// }
// var aa = 5;


// do {
//     console.log(aa);
//     aa--
// }
// while(aa > 0)
//  let ans = 1;
//     for (let i = 5; i>0; i-- ){
// ans = ans * i;
//     }
//     console.log(ans)


// var arr = [1,2,3,4,5]

// let sp = 0;
// let ep  = arr.length-1;
// while(sp < ep){
//     let temp = arr[sp];
//     arr[sp] = arr[ep];
//     arr[ep] = temp;
//   sp ++;
//   ep--;
// }
// console.log(arr);

// let i =0;
// while(i<101){
//     if(i % 5 == 0){
//         console.log(i)
//     }
//     i++;
// }

// var obj = {
//     name:"pratik",
//     age: 21,
//     city: "pune"
// }
// for (let key in obj )
// {
//     console.log(key)
// }

// var arr = ["a","v","d"];

// arr.forEach(function(value){
//     console.log(value);
// })


// var arr = [1,2,3,4];
// arr.unshift(1,3)
// console.log(arr)
// arr.pop()
// console.log(arr)
// let ans = arr.slice(1,3)
// console.log(ans)

// let ans = arr.indexOf(4)
// console.log(ans)

// let ans = arr.includes(5)
// console.log(ans);

// var a =[1,2,33,12,45,8,9]

// a.sort(function (x,y){
//     return x-y
// })
// console.log(a);


// var arr1 = [1,23,4,5,6]
// var arr2 = [...arr1]
// var arr3 = []

// arr1.forEach(function(value){
//     arr3.push(value)
// })
// console.log(arr2)
// console.log(arr3)

// function evd (num){
//     if(num % 2 ==0){
//         console.log("even")
//     }else{
//         console.log("odd");
//     }

// }
// evd(5)

// function area(r){
//     return Math.PI* r*r;
// }
// console.log(area(2))

// function sum(arr){
//     var sum = 0;
//     arr.forEach(element => {
//         sum = sum  + element;
        
//     });
//     return sum;

// }

// console.log(sum([1,2,3,4]))

// function checker (str,char) {
//     return str.startsWith(char)
// }
// console.log(checker("harsg","h"))
function max (a,b){
    var ans = Math.max(a,b)
    return ans;
}
console.log(max(2,4))