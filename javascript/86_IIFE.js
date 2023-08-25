// IIFE = immediatly invoked function expression it is also called "self executing anonymous function"
//variable are declred in the this function are not available outside
//these functions can either named function or anonymous

function hello(){
    console.log("Hello World");
}
hello();

(function hello(){
    console.log("Hello World");
})();


//*********************************/

let a=()=>{
    console.log("Hello World");
}
a();

(()=>{
    console.log("Hello World");
})();

//*********************************/

((x,y,z)=>{
    console.log(x,y,z)
})(10,20,30);