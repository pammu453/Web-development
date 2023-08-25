// every object having the prototype property

let a={
    name:"pramod",
    age:23,
    // run:()=>{
    //     alert("Hello1")
    // }
};

console.log(a);

let b={
    // run:()=>{
    //      alert("Hello2")
    // }
}
let c={
    run:()=>{
         alert("Hello3")
    }
}

a.__proto__ = b;  // a is prototype of b
b.__proto__= c;   // b is prototype of c
a.run();   // in this case run is checked in object a if found it will execute if not then checks in b(because a is prototype of b) an soon


