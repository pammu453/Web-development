// 1. Print all even numbers from 0 – 10
// for (let i = 0; i <=10; i++) {
//     if(i%2==0){
//         console.log(i)
//     }  
// }

// 2. Print a table containing multiplication tables
// for (let i = 1; i <=10; i++) {
//     //  console.log(i*1)  
//     console.log(i +" ith table")   
//     for (let j = 1; j <=10; j++) {
//         console.log(i*j);
//     }
// }

//3. Create a length converter function

// function lengthConverter(kilometer) {
//     const miles=kilometer*0.6213711922;
//     console.log(miles)
// }

// lengthConverter(3)

// 4. Calculate the sum of numbers within an array

// let sum=0;
// const myArray=[1,2,3,4,-5];

// for (let i = 0; i < myArray.length; i++) {
//     sum+=myArray[i] 
// }
// console.log(sum)

//5 Create a function that reverses an array

// const myArray1=[1,2,3,4,5];

// const myArray=myArray1.reverse();
// console.log(myArray)

// 6. Sort an array from lowest to highest

// const myArray=[3,1,55,223,443,32,2,2];
// myArray.sort((a,b)=>a-b);
// console.log(myArray)


//7. Create a function that filters out negative numbers

// var myArray = [4, -5, 0, 2, -67, 8, 10, -34];

// function getNumbers(array) {
//   return array.filter(value => value > 0);
// }
// console.log(getNumbers(myArray));


//8. Remove the spaces found in a string

// let string="  s we w wr wew "
// let x=string.replaceAll(" ", "");
// console.log(x)

//9. Return a Boolean if a number is divisible by 10

 // function divisible(num) {
//     if(num%10==0){
//         return true
//     }else{
//         return false;
//     }
// }
// console.log(divisible(100))

//10. Return the number of vowels in a string

// let string='pramod'
// function countVowels(subject) {
//     return subject.match(/[aeiou]/g).length;
// }
// console.log(countVowels(string));

// 11.Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

// const date=new Date();
// const num=date.getUTCDay();
// const days=['sun','mon','tue','wed','thur','fri','sat'];
// console.log('Taday is :'+days[num-1])
