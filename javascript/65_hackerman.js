async function helloHack(){

    let promise1=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Initilising...");
        },1000)
    })
    let promise2=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Attcking...");
        },2000)
    })
    let promise3=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Getting userid...");
        },3000)
    })
    let promise4=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Done");
        },4000)
    })
    let promise5=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("hacked succefullly....");
        },5000)
    })

    p1=await promise1;
    console.log(p1);
    p2=await promise2;
    console.log(p2);
    p3=await promise3;
    console.log(p3);
    p4=await promise4;
    console.log(p4);
    p5=await promise5;
    console.log(p5);


}

helloHack()