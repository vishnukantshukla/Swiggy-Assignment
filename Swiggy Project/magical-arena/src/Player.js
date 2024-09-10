class Player{
    constructor(health,strength,attack){
        this.health=health;
        this.strength=strength;
        this.attack=attack;

    }

    rollDice(){
        let rollDice=Math.floor(Math.random() * 6) + 1;
        return rollDice;
    }

    attackRoll(){
        let AttackValue = this.attack * this.rollDice();
        return AttackValue;
    }

    defendRoll(){
        let defendValue= this.strength * this.rollDice();
        // console.log(this.rollDice());
        return defendValue;
    }

    takeDamage(damage){
        this.health -= damage;
        if(this.health < 0){
            this.health = 0;
        }
    }

    isAlive(){
        return this.health > 0;
    }

    getHealth(){
        let getHealth = this.health;
        return getHealth;
    }

}

module.exports = Player;