function guessGame(){
    let randomNr = Math.ceil(Math.random() * 10);
    let guess;

    do{
        guess = prompt(`Guess a number between 0 and 10`);
        console.log(guess, randomNr);
        if(randomNr > guess) {
            console.log('You guessed too %clow', 'color: red');
            alert('you guessed too low');
        }else if(randomNr < guess){
            console.log('You guessed too %chigh', 'color: green');
            alert('You guessed too high');   
        }
    }while(guess != randomNr);
    console.log('You Won!')
    alert('You Won!')
}

guessGame();
