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
    
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {
    const thisNumberOfAncestors = this.numberOfVampiresFromOriginal;
    const vampireNumberOfAncestors = vampire.numberOfVampiresFromOriginal;

    // console.log('this ancestors :', );
    // console.log('vampire ancestors :', );

    //if comparing to root
    if (!this.creator) {
      return this;
    }

    if (!vampire.creator) {
      return vampire;
    }

    //if same creator
    if (this.creator.name === vampire.creator.name) {
      return this.creator;
    }

    //if different number of ancestors
    if (Math.abs(thisNumberOfAncestors - vampireNumberOfAncestors))

    console.log('this:')
    console.log('name:', this.name);
    console.log('offspring', this.offspring);
    console.log('creator', this.creator.name);
    console.log('thisNumberOfAncestors :', thisNumberOfAncestors);
    console.log('---')
    console.log('vampire')
    console.log('name:', vampire.name);
    console.log('offspring', vampire.offspring);
    console.log('creator', vampire.creator.name);;
    console.log('vampireNumberOfAncestors :', vampireNumberOfAncestors);
  }
}

//90 min

module.exports = Vampire;

