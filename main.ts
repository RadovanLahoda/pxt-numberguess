var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var randomNumber = Math.floor(Math.random() * 100) + 1;
var attempts = 0;
var askQuestion = function () {
    rl.question('Uhádni číslo (1-100): ', function (answer) {
        var guess = parseInt(answer, 10);
        attempts++;
        if (isNaN(guess)) {
            console.log('Prosím, zadej číslo.');
        }
        else if (guess < randomNumber) {
            console.log('Zadané číslo je příliš nízké!');
        }
        else if (guess > randomNumber) {
            console.log('Zadané číslo je příliš vysoké!');
        }
        else {
            console.log("Gratuluji, tvé číslo jsi dokázal zjistit v ".concat(attempts, " pokusech."));
            rl.close();
            return;
        }
        askQuestion();
    });
};
askQuestion();
