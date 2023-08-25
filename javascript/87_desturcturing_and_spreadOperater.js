//desturing which allows unpack values of arry\ay and objects into distinct variables

let arr=[10,20,30,40,50];

// let [a,b]=arr;
// console.log(a,b);

// let [a,b,c]=arr;
// console.log(a,b);


// let [a,b,c]=arr;
// console.log(a,b,c,d,e,f);  //error

// let [a,b,...rest]=arr;
// console.log(a,b,rest);

// let [a,b,...rest]=arr;
// console.log(a,b,...rest);

// let [a, , ,...rest]=arr;
// console.log(a,...rest);


let obj={
    a:1,
    b:2
}

// let {a,b}=obj
// console.log(a,b)

// let {a}=obj
// console.log(a)

// let {a,b,c}=obj
// console.log(a,b,c)  / c is undefined



//spread operater = used to  expand or spred an iterable or array

// let arr1=['my',"name",'is',"lorem"];
// console.log(arr1);
// console.log(...arr1);

//copying an array spread operater

// let arr1=[10,20,30,40];
// let arr2=[...arr1,50,60,70];
// console.log(arr2);

// let arr1=[10,20,30,40];
// let arr2=[50,60,70];
// let arr3=[...arr1,...arr2];
// console.log(arr3);

//cloning array using operater

// let arr1=[10,20,30,40];
// let arr2=[...arr1];   
// console.log(arr2)

//spread operater with object

let obj1={
    a:1,
    b:2
}
let obj2={
    c:1,
    d:2
}

let obj3={...obj1,...obj2};
console.log(obj3);

//rest parameter

let func= function(...args){
    console.log(args)
}

func(3);
func(3,4,5,4,3,3);



let sum= function(x,y){
    console.log(x+y);
}

const num1=[1,2,3,4,5];
sum(...num1)