let promise=new Promise((resolve,reject)=>{
    resolve("its having error ");
});

promise.then(()=>{
    console.log("this is handler one");
})

promise.then(()=>{
    console.log("this is handler two");
})

promise.then(()=>{
    console.log("this is handler three");
})