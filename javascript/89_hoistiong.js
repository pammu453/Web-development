//hoisting is js's default behaviour of moving delcarations to the top.

// x=5;
// console.log(x);
// var x;

//same as above
var x;
x=5;
console.log(x);




//let and const cann't be hoisted where as var can be hoisted

// console.log(a);
// var a;          //undefined

// console.log(a);
// let a;          //error

// console.log(a);
// const a=10;          //error


// hello();          // hoisting in function
// function hello(){
//     console.log("Hello world")
// }


// hello1()
// var or const or let a=function hello1(){
//     console.log("Hello world1") 
// }                                      //error


//intilization can not be hoisted
// var a=10
// var b=10
// console.log(a,b)

// var a=10
// console.log(a,b)
// var b=10;

// var a=10
// var b;
// console.log(a,b)
// b=1;

//BETTER PRACTICE IS TO DECLARE VARIABLES AT THE TOP
