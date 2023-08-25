//erorr object properties name and message
try{
    //harry

    
    //custom error
    // throw Error("This is not valid");
    // throw ReferenceError("this reference error");

    let e=new ReferenceError("this is nan error");
    throw e;
}
catch(error){
    console.log(error.name);
    console.log(error.message);
    // console.log(error.stack) or //console.log(error)
}