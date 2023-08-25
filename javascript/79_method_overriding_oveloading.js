//method overriding and use of super keyword

class Person{
    greet(){
        console.log("Hello,I am a person");
    }
}

class Employee extends Person{
    greet(){
        super.greet();
        console.log("And also an emplouee")
    }
}

let emp=new Employee();
emp.greet();


//js does not supports method method overloding