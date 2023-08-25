//1. FiZZBuZZ

const myArray=[]
function fizzbuzz(num) {
    for (let i = 1; i <=num; i++) {
        if(i%3===0 && i%5===0){
          myArray.push("FizzBuzz")
        }
        else if(i%3===0){
            myArray.push('Fizz')
        }
        else if(i%5===0){
            myArray.push('Buzz')
        }
        else{
            myArray.push(i)
        } 
    }
    // console.log(myArray)
}

fizzbuzz(20)


//Prime Number
const number = 7
let count=0;

if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}

else if (number > 1) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            count++;
            break;
        }
    }

    if (i) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}

else {
    console.log("The number is not a prime number.");
}