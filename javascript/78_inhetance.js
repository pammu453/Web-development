class Animal{
    constructor(name,color){
        this.name=name;
        this.color=color;
    }
    
    info(){
        console.log(`${this.name} is good and its color is ${this.color}`);
    }
}

class Monkey extends Animal{
    jump(){
        console.log(`${this.name} is jumping.`)
    }
}

let mon1=new Monkey("chuppi",'red');

mon1.info();
mon1.jump();