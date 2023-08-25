let num=[10,20,30,40,50,60];

// map= it creates new arry element by performing some operation on the each arry element
let new_num=num.map((value,index,arry)=>{
    return value+index;
});
console.log(new_num);

//reduse = it returns array to single value
let n_num= num.reduce((a,b)=>{
    return a+b;
});
console.log(n_num);

//filter
let nnum= num.filter((a)=>{
    return a>30;
});
console.log(nnum);
