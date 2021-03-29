class Ninja {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.speed = 3;
    this.strength = 3;
  };

  sayName() {
    console.log(this.name);
  };

  showStats() {
    console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`)
  };

  drinkSake() {
    this.health += 10;
  };

  punch(target) {
    if (target instanceof Ninja){
      target.health -= 5;
      console.log(`${target.name} was punched by ${this.name} and lost 5 Health!`);
      return target;
    } else {
      console.log('You must be a Ninja to peform such a lethal attack move...');
    };
  };

  kick(target) {
    if(target instanceof Ninja){
    target.health -= (this.strength * 15);
    return target;
    } else {
      console.log('You must be a Ninja to peform such a lethal attack move...');
    };
  };
};

var ninja1 = new Ninja('Cyrus');
var ninja2 = new Ninja('Jason');
var Ninja3 = new Ninja('Emily');

ninja1.punch(ninja2);
ninja2.showStats();
