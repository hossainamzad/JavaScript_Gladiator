console.log('arena.js is connected!');


// Write your Arena class in this file!!!

class Arena {
  constructor(name) {
    this.name = this.normalizeName(name);
    this.gladiators = [];
  }

  normalizeName(name) {
    const capitalizedFirstLetterOfName = name.charAt(0).toUpperCase();
    const stringWithoutFirstLetter = name.slice(1);
    return capitalizedFirstLetterOfName + stringWithoutFirstLetter;
  }

  addGladiator(gladiator) {
    /* this is VERY BONUS, see note in gladiator.js */
    if (!gladiator.hasOwnProperty('weapon')) {
      throw new Error('That\'s not a gladiator!');
    }
    /* end bonus */
    if (this.gladiators.length > 2) {
      console.log('No more gladiators allowed!');
    } else {
      // add the gladiator to the gladiators array
      this.gladiators.push(gladiator);
    }
  }

  fight() {
    /* this is VERY BONUS, see note in gladiator.js */
    if (this.gladiators.length < 2) {
      throw new Error('Not enough gladiators for a fight!');
    }
    /* end bonus */

    const firstFighter = this.gladiators[0];
    const secondFighter = this.gladiators[1];
    if (firstFighter.weapon === secondFighter.weapon) {
      while (this.gladiators.length > 0) {
        // pop both the gladiators off the end. you could also have written
        // this.gladiators.pop() twice instead of doing a while loop
        this.gladiators.pop();
      }
    } else if (firstFighter.weapon === 'Spear' && secondFighter.weapon === 'Club' ||
               firstFighter.weapon === 'Trident' && secondFighter.weapon === 'Spear' ||
               firstFighter.weapon === 'Club' && secondFighter.weapon === 'Trident') {
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop <--- if you don't know about this method!!
      // essentially, the second gladiator lost. and since pop takes the last element off the array,
      // we want to use that one to remove the loser.
      this.gladiators.pop();
    } else {
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift <--- if you don't know about this method!!
      // this is what happens if the first gladiator loses.
      // since shift takes the first element off the array, we can use it to remove the loser.
      this.gladiators.shift();
    }
  }

  removeFromArena(name) {
    // loop through the gladiators array
    for (let i = 0; i < this.gladiators.length; i++) {
      // find the gladiator whose name property matches the name fed to the function
      if (this.gladiators[i].name === name) {
        // Splice deletes and/or inserts elements in an array.
        // Splice and slice are super similar, if you want to get into them check out this link http://www.devcurry.com/2010/12/slice-and-splice-in-javascript.html
        // starting from the index we're currently at, remove one element from the array.
        this.gladiators.splice(i, 1);
      } else console.log('No gladiator by that name here!');
    }
  }

  entertained() {
    // we have to loop through the gladiators array again and check the name
    for (let i = 0; i < this.gladiators.length; i++) {
      if (this.gladiators[i].name === 'Maximus') {
        console.log('The crowd is entertained!!!!');
      } else console.log('Bored :(');
    }
  }

  fightWithElimination() {
    /// I will add this soon!!!
  }

}