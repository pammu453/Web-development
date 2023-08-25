// delete
// let myarr=[10,20,30,40,50];
// delete myarr[1];
// console.log(myarr); 


//concat
// let myarry1=[10,20,30,40,50];
// let myarry2=[100,200,30,400,500];
// let myarry3=[1000,2000,3000,4000,5000];
// let myarry = myarry1.concat(myarry2,myarry3);
// console.log(myarry);                     // we can concat one or more array...

//slice
// let arr=[10,20,30,40];
// console.log(arr.slice(1,42));
// console.log(arr.slice(1,));
// console.log(arr.slice(0));


// splice
// let kel=[10,200,20,40,50,4,5,6];
// console.log(kel.splice(1,2,200000))
// console.log(kel);



// //revrese
// let myarr4=[1,20,244,100,21,22,23,24,'sandy',"Marry","one",'teo'];
// let myarr5=myarr4.reverse();
// console.log(myarr5);
// console.log(myarr4);   // it affect the the original array



//sort
const compare = (a,b)=>{
  //   return a-b;   // assending
  return b-a;   // desending
}

// let arr1=[11,20,20,40,50,8,1,2,3,4,5,6,7,8,0,9];
// let arr2=arr1.sort(compare);
// console.log(arr2);

// let arr1=[11,20,20,40,50,8,1,2,3,4,5,6,7,8,0,9];
// let arr2=arr1.sort();
// console.log(arr1);
// console.log(arr2);  // it also affect the original array


// let name_arr=["zuppi",'marry','sandy', "alert"];
// let name=name_arr.sort();
// console.log(name);