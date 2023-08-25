//A closure in an inner function that has access to the outer functions variables and parameters
//it allows the inner function to access and manipulate the outer functions variable,even after the ouside function has returned

function myfunc() {
    let name="mozilla";
    function display(){
        console.log(name);
    }
    // name="yyy"; // it prints because it return the lexical environment
    return display;
}

const func=myfunc();
func();