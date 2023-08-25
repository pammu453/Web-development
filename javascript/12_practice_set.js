const marks={
    pramod:23,
    sanvi:22,
    jenny:34,
    ravi:12
}

for(let i=0 ; i<Object.keys(marks).length ; i++){
    console.log(Object.keys(marks)[i]+"Has got marks "+marks[Object.keys(marks)[i]])
}

// for(let key in marks){
//     console.log(key,"Having marks",marks[key]);
// }


// let sn=10;

// while(true){
//     let num=prompt("Enter the correct number :");
//     num=Number.parseInt(num);
//     if(num==sn){
//         break;
//     }
// }


// const mean= (a,b,c,d,e)=>{
//     let sum=a+b+c+d+e;
//     let m=sum/5;
//     console.log(m);
// }
// mean(1,2,3,4,5);

// console.log(Object.keys(marks)[i],"having marks",marks[Object.keys(marks)[i]]);