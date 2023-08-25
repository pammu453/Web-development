// const hello = (name,age) =>{
//     console.log("Hello "+name);  console.log(age);
// } 
// hello("Pramod",23);

const x={
    name:'Pramod',
    age:23,
    show :function(){
        setTimeout(function(){
            console.log("Hey "+ this.name);
        },2000);
    }
}

x.show();
const x1={
    name:'Pramod',
    age:23,
    show :function(){
        setTimeout(()=>{
            console.log(this)
            console.log("Hey "+ this.name);
        },2000);
    }
}
x1.show();


































































