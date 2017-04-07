console.log('gladiator.js is connected!');


// Write your Gladiator class in this file!!!!

class Gladiator {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
}

/* with error handler bonus */
/* don't feel like you should have gotten it, it was a very "look at the
   docs and see if you can read them enough to figure out how to apply"
   type of bonus. But if you're interested, read this code... */

class BonusGladiator {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = this.checkWeapon(weapon);
  }

  checkWeapon(weapon) {
    const possibleWeapons = ['Spear', 'Club', 'Trident'];
    // if the weapon isn't in the array
    if (possibleWeapons.indexOf(weapon) === -1) {
      // using the built-in Error object
      // which will stop BonusGladiator from even creating the
      // gladiator with the fake weapon.
      throw new Error(`${weapon} is not a weapon!!!`);
    } else return weapon;
  }
}