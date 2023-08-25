// let promise=new Promise((resolve,reject)=>{
//     resolve(56);
// });

// promise.then((value)=>{
//     console.log(value);
//     return value+1;
// })

// .then((value)=>{
//     console.log(value);
//     return value+1;
// })

// .then((value)=>{
//     console.log(value);
//     return value+1;
// })

// .then(()=>{
//     console.log("Completed")
// })


let promise=new Promise((resolve,reject)=>{
    reject("its having error ");
});

promise.then((value)=>{
    console.log(value);
    return value+1;
})

.then((value)=>{
    console.log(value);
    return value+1;
})

.then((value)=>{
    console.log(value);
    return value+1;
})

.catch((error)=>{
    console.log("Completed " + error)
})