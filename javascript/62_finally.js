// the final clause run in every situation

// if we write a try,catch,finally inside function and we return  value in try in that case finalyy will also run
//. finally executed just before the return statement

let harry=()=>{
    try {
        // a;
        return "Hello"
       
    }
     catch (error) {
        console.log(error)
    }
    
    finally{
        console.log("I am good boy")
    }
}

harry();
console.log("End")
