class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    
    for (const offspring of this.offspring) {
      offspring.creator = this;
    }
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfVampires = 0;
    let vampire = this;

    //the root has no creator, so that's when the loop stops
    while (vampire.creator) {
      vampire = vampire.creator;
      numberOfVampires++;
    }

    return numberOfVampires;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    return this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal;
  }

  /** Tree traversal methods **/

  // Returns the vampire object with that name, or null if no vampire exists with that name

  vampireWithName(name) {

    if(name === 'root') {
      return this;
    };

    for (const offspring of this.offspring) {
      if (name === offspring.name) {
        return offspring;

      } else {
        for (const offspring1 of offspring.offspring) {
          if (name === offspring1.name) {
            return offspring1;
            
          } else {
            for (const offspring2 of offspring1.offspring) {
              if (name === offspring2.name) {
                return offspring2;
              }
            }
          }
        }
      }
    }

    return null;
  };

  //a try at recursion that did not go well
  // vampireWithName(name) {
  //   let resultArray = [];
  //   if(name === 'root') {
  //     console.log('returning 1 :', this.name);
  //     return this;
  //   };
  //   for (const offspring of this.offspring) {
  //     if(name === offspring.name) {
  //       console.log('returning 2 :', offspring.name);
  //       resultArray.push(offspring);
  //     } else {
  //       resultArray.concat(offspring.vampireWithName(name));
  //     }
  //   }
  // if (resultArray.length > 0) {
  //   console.log(' resultArray:', resultArray);
  //   return resultArray[0];
  // }
  //   console.log(' resultArray:', resultArray);
  //   return resultArray;
  // }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    let totalVampires = 0;

    for (const offspring of this.offspring) {
      if(this.offspring.length >= 0) {
        totalVampires += 1 + offspring.totalDescendents;
      }
    }
  
    return totalVampires;
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    let result = [];

    //if the current vampire's year is > 1980 add them to result
    if (this.yearConverted > 1980) {
      result.push(this);
    }

    //loop through offspring
    for (const offspring of this.offspring) {

      //call the method on all offspring recursively
      const millenialVampires = offspring.allMillennialVampires;

      //combine results
      result = result.concat(millenialVampires);
    }

    return result;
  }
}


module.exports = Vampire;