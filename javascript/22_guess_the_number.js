// ranodm number between 1 and 10
let x=Math.floor(Math.random()*10+1);
let i=1;
let guess;

// 10 guesses are allowed
while(i<=10){
    guess=prompt("Guess the number :");
    guess=Number.parseInt(guess);

    if (x<guess){
        console.log("You guessed number is greter than random number");
    }
    if (x>guess){
        console.log("You guessed number is lesser than random number");
    }
    
    if (x==guess){
        console.log("You guessed the coreect number");
        break;
    }
    i++;
}
if(x==guess){
    console.log("succesful");
}
else{
    console.log(" unsuccesfull....");
}

