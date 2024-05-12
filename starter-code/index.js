// Soldier................................
class Soldier{

    constructor(health=10,strength=2){

        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }

    receiveDamage(damage){

       this.health -= damage;
    }
}

// Viking...............................................
class Viking extends Soldier {
  constructor(name,health,strength){
    super(health,strength);
    this.name = name;
    
  }
  receiveDamage(damage){
    this.health -= damage;
    if(this.health > 1){
        return this.name +" has received "+ this.damage + " points of damage ";
    }else{
        return this.name + " has died in act of combat";
    }
    
 }

  battleCry(){
    return "Odin Owns You All!";
  };
}


const soldier = new Soldier();
console.log(soldier.attack());
console.log(soldier.health);

const viking = new Viking();
console.log(viking.battleCry());

viking.receiveDamage(5);
console.log(viking.health);




// Saxon ............................................................................
class Saxon extends Soldier {

    constructor(health,strength){
        super(health,strength);
        
      }

      receiveDamage(damage){
        this.health -= damage;
        if(this.health > 1){
            return "A Saxon has received "+ damage + " points of damage";
        }else{
            return "A Saxon  has died in combat";
        }
     }
}
 const saxon  = new Saxon();
 console.log(saxon.receiveDamage(10));
 console.log(saxon.health);

// War
function War() {}