// there are 7 primitive datatypes

// null,number,Symbol,string,Boolean,BigInt,undefined(nnssbbi)

let a=null;
let b=23; // let b=3.3333
let c=Symbol("this is me");
let d='Hello';
let e=true  //let e=false
let f=BigInt("100")+BigInt("20")
let g;  // let g=undefined;
console.log(a,b,c,d,e,f,g);
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);


/////////////////////////////////////////////////////////////

//non primitive datatypes -objects

const  items = {
       "name":"Pramod",
       "age":23
};

console.log(items["name"]);
console.log(items.name);    //both are same


//typ of  null is object