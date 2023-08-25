// promise is good way to handle the the asynchronous operation

// two properties saate and result


//it has three state   & threeresults
// 1) pending            undefined
// 2)fullfilled          a result value
// 3)rejected            an error object

//syntax
let promise=new Promise(function(resole,reject){
    //Do something
});

//it has two arguments i.e two functions resove() and reject()
//if promise returns sucessfully,the resole() function is called.
//And if errors occurs the reject() function is called


const count=true;
// const count=false;
let promise1=new Promise(function(resole,reject){
    if(count){
        resole("there is count value");
    }else{
        reject("there is no count value")
    }
});

console.log(promise1)