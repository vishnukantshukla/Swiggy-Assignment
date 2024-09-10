const Player = require('./Player.js');

class Arena{
    constructor(playerA ,playerB){
        this.playerA = playerA;
        this.playerB = playerB;
    }

    startBattle(){
        console.log("Battle Start!");

        while(this.playerA.isAlive() && this.playerB.isAlive()){
            this.playTurn();
        }
        this.determinWinner();

    }

    playTurn(){
        if(this.playerA.getHealth() < this.playerB.getHealth()){
            this.fight(this.playerA , this.playerB);
        }
        else{
            this.fight(this.playerB , this.playerA);
        }
    }
    
    fight(attacker , defender){
        const attackDamage = attacker.attackRoll();
        const defenseDamage = defender.defendRoll();
        const damage = attackDamage - defenseDamage;
        if(damage > 0){
            defender.takeDamage(damage);
            console.log(`Attacker dealt  ${damage} damage. Defender's health: ${defender.getHealth()}`);
        }
        else{
            console.log("Defender defended successfully.");
        }
    }

    determinWinner() {
        if(this.playerA.isAlive()){
            console.log('Player A wins!');
        }
        else{
            console.log('Player B wins!');
        }
    }
}

module.exports = Arena;
