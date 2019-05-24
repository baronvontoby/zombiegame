var inquirer = require('inquirer');

let playerHealth = 70;
let zombieHealth = 15;
let kills = 0;
let deaths = 0;


inquirer.prompt([
    {
        type: 'input',
        message: 'What is your name zombie killer?',
        name: 'player'
    },
    {
        type: 'list',
        name: 'weapon',
        message: 'Choose your weapon zombie killllllerr!!!',
        choices: ['Sword', 'Machette', 'Pencil', 'Water Gun', 'A box full of Angry Monkeys']
    },
    {
        type: 'confirm',
        name: 'confirm',
        message: 'Are you ready to slay some Zombies',
        default: true
    }
]).then(function(inquirerResponse){
    if (inquirerResponse.confirm) {
        game();
    }
    else {
        console.log('Man up! Lets kill some zombies!')
    }
})

function game () {
    if (playerHealth === 0 ) {
        console.log('You suck and died');
        playerHealth = 70;
        zombieHealth = 15;
        deaths++;

    }
    if (zombieHealth === 0) {
        console.log('You won buddy!');
        playerHealth = 70;
        zombieHealth = 15;
        kills++;
    }
    inquirer.prompt([
        {
            type: 'list',
            name: 'number',
            message: 'Guess a number',
            choices: ['1','2','3','4','5']
        }
    ]).then(function(numberResponse){
        
        if(randomNumber() == numberResponse.number ){
            zombieHealth = zombieHealth - 5;
            console.log('zombie health is: ' + zombieHealth);
            console.log('player health is: ' + playerHealth);
            console.log('Kills :' + kills);
            console.log('Deaths :' + deaths);

        }
        else
        {
            playerHealth = playerHealth - 5;
            console.log('zombie health is: ' + zombieHealth);
            console.log('player health is: ' + playerHealth);
            console.log('Kills :' + kills);
            console.log('Deaths :' + deaths);
        }
        game();
    })
}
    
function randomNumber (){
    var goalNumber = Math.floor(Math.random() * 5 + 1);
    return goalNumber; 
}