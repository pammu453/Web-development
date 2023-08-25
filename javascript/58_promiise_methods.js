let promise1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("value 1");
    },1000);
});

let promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 2");
    },2000);
});

let promise3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 3");
    },3000);
});

// promise1.then((value)=>{
//     console.log(value);
// });
// promise2.then((value)=>{
//     console.log(value);
// });
// promise3.then((value)=>{
//     console.log(value);
// solve

// let promise_all=Promise.all([promise1,promise2,promise3]);
// let promise_all=Promise.allSettled([promise1,promise2,promise3]);
// let promise_all=Promise.race([promise1,promise2,promise3]);
// let promise_all=Promise.any([promise1,promise2,promise3]);
// let promise_all=Promise.resolve(78);
let promise_all=Promise.reject(new Error("Hello"));

promise_all.then((value)=>{
    console.log(value);
});