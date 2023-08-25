class RailwayForm{
    constructor(name,number){
        this.name=name;
        this.number=number;
        console.log("construter called");
    }

    submitte(){
        console.log(`${this.name} is submitted the form number ${this.number}`)
    }

    cancel(){
        console.log(`${this.name} is cancel the form number ${this.number}`)
    }   
}


let pramodForm=new RailwayForm("Pramod",2342);


pramodForm.submitte();
pramodForm.cancel();