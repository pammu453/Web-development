let myarry1 = [10,20,30,40];
let myarry2 = ["harry",2,true,34.4444];

console.log(myarry1.length);
console.log(myarry1[1]);
console.log(myarry1[4]);  //udefined
console.log(myarry1); 
 
myarry1[0]="dddd";
console.log(myarry1);    //changing the array value

myarry1[4]="Last element";
console.log(myarry1);   // adding element last to the array

myarry2[400]="Last element";
console.log(myarry2);    // output : [ 'harry', 2, true, 34.4444, <396 empty items>, 'Last element' ]


for (let i = 0; i < myarry1.length; i++) {
    console.log(myarry1[i]);  
}

for (let i = 0; i < myarry2.length; i++) {
    console.log(myarry2[i]);
}

