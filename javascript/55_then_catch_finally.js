// let p1=new Promise(function(resolve,reject){
//     console.log("Promise is paending");
//     setTimeout(()=>{
//         resolve("this is resolved");
//     } ,3000);
// })

// let p2=new Promise(function(resolve,reject){
//     console.log("Promise is paending");
//     setTimeout(()=>{
//         reject(new Error);
//     } ,3000);
// })

//''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
// p1.then((value)=>{
//     console.log(value);
// },(error)=>{
//     console.log(error)
// })

// p1.finally(()=>{
//     console.log("thanks for promise");
// })
//....................................................................

// p2.then((value)=>{
//     console.log(value);
// },(error)=>{
//     console.log(error)
// })

// p2.finally(()=>{
//     console.log("thanks for promise");
// })

//....................................................................

// p2.catch((error)=>{
//     console.log(eror);
// })



// const count=true;
const count=false;
let promise=new Promise(function(resole,reject){
    if(count){
        resole("there is count value");
    }else{
        reject("there is no count value")
    }
});

// promise.then((value)=>{
//     console.log(value);
// });

// promise.catch((error)=>{
//     console.log(error);
// });

// promise.then((value)=>{
//     console.log(value);
// },(error)=>{
//     console.log(error);
// })

