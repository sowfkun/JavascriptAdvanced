class Hero {
    constructor (name, hp, damage) {
        this.name = name;
        this.hp = hp;
        this.damage = damage;
    }
    
    applyDamage(damage){
        this.hp -= damage;
    }

    attack(enemy) {
        enemy.applyDamage(this.damage);
    }
}

const IronMan = new Hero("IronMan", 100, 10);
const Thor = new Hero("Thor", 200, 20);
console.log({IronMan, Thor});

IronMan.attack(Thor); 
console.log({IronMan, Thor});

class RangeDamageHero extends Hero {
    constructor(name, hp, damage, range) {
        super(name, hp, damage);
        this.range = range;
    }
    
    attack(enemy) {
        super.attack(enemy);
        this.hp += this.damage * 30/100;
    }

    // super call constructor or override method of parent class
}

const Hulk = new RangeDamageHero("Hulk", 300, 50);
const CaptainAmerica = new Hero("CaptainAmerica", 200, 20);
console.log({Hulk, CaptainAmerica});

Hulk.attack(CaptainAmerica); 
console.log({Hulk, CaptainAmerica});