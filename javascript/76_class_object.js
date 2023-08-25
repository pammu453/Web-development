class RailwayForm{
    fill(name,number){
        this.name=name;
        this.number=number;
    }

    submitte(){
        console.log(`${this.name} is submitted the form number ${this.number}`)
    }

    cancel(){
        console.log(`${this.name} is cancel the form number ${this.number}`)
    }   
}


let pramodForm=new RailwayForm();
pramodForm.fill('pramod',3420);


pramodForm.submitte();
pramodForm.cancel();