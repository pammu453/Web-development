class Aminal{
    constructor(name){
        this._name=name;
    }

    fly(){
        console.log("I am flying")
    }

    get name(){
        return this._name;
    }
    set name(newName){
        this._name=newName;
    }
}

let a=new Aminal("jimmy");
console.log(a.name);
a.fly();

a.name='rocky';
console.log(a.name);


console.log(a instanceof Aminal)  //true
console.log(b instanceof  Aminal) //false

