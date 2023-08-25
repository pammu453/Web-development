//it will through an error

// console.log(a);

// setTimeout(() => {
//     console.log("hi");
// }, 0);


// setTimeout(() => {
//     console.log("hello");
// }, 0);

// setTimeout(() => {
//     console.log("hiow are you");
// }, 0);

//===========================================
// error handling
// try{
//     console.log(a);
// }

// catch(error){
//     console.log("error handled succefully")
// }

// setTimeout(() => {
//     console.log("hi");
// }, 0);

// setTimeout(() => {
//     console.log("hello");
// }, 0);

// setTimeout(() => {
//     console.log("hiow are you");
// }, 0);

//==========================================================
try{
    setTimeout(() => {
        console.log(b);  //it will throgh an error because inside try block we can try synchrouns code only but here setTimeOut is asynchrnous code
    }, 0);
}

catch(error){
    console.log("error handled succefully")
}

setTimeout(() => {
    console.log("hi");
}, 0);

setTimeout(() => {
    console.log("hello");
}, 0);

setTimeout(() => {
    console.log("hiow are you");
}, 0);