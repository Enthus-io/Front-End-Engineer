// Context: You’re part of a research team that has found a new mysterious organism at the
// bottom of the ocean near hydrothermal vents. Your team names the organism, Pila aequor
// (P. aequor), and finds that it is only comprised of 15 DNA bases. The small DNA samples and
// frequency at which it mutates due to the hydrothermal vents make P. aequor an interesting
// specimen to study. However, P. aequor cannot survive above sea level and locating P. aequor
// in the deep sea is difficult and expensive. Your job is to create objects that simulate the
// DNA of P. aequor for your research team to study.


// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};


// Your team wants you to simulate P. aequor‘s high rate of mutation.
// To simulate a mutation create the method .mutate().
// .mutate() is responsible for randomly selecting a base in the object’s dna property and changing the current base to a different base. Then .mutate() will return the object’s dna.
function fm() {
  let randomSelection = Math.floor(Math.random() * 15);
  let ramdomBase;

  do {
    ramdomBase = returnRandBase();
  } while (this.dna[randomSelection] === ramdomBase)

  this.dna[randomSelection] = ramdomBase;
  return this.dna;
}


// Your research team wants to be able to compare the DNA sequences of different P. aequor. You’ll have to add a new method .compareDNA()
// .compareDNA() has one parameter, another pAequor object.
// The behavior of .compareDNA() is to compare the current pAequor‘s .dna with the passed in pAequor‘s .dna and compute how many bases are identical and in the same locations. .compareDNA() does not return anything, but prints a message that states the percentage of DNA the two objects have in common — use the .specimenNum to identify which pAequor objects are being compared.
function fc(otherSpecimen) {
  let commonBases = [];

  for (let ith = 0; ith < this.dna.length; ith++) {
    if (this.dna[ith] === otherSpecimen.dna[ith]) {
      commonBases.push(ith);
    }
  }

  console.log(`Found ${commonBases.length} common bases out of 15 (${(commonBases.length / 15 * 100).toFixed(2)}%)`);
}


// P. aequor have a likelier chance of survival if their DNA is made up of at least 60% 'C' or 'G' bases.
// In the returned object of pAequorFactory(), add another method .willLikelySurvive().
// .willLikelySurvive() returns true if the object’s .dna array contains at least 60% 'C' or 'G' bases. Otherwise, .willLikelySurvive() returns false.
function fs() {
  let survivalTracker = 0;

  for (const base of this.dna) {
    if (base === 'C' || base === 'G') {
      survivalTracker++;
    }
  }


  // console.log(`Found ${survivalTracker} survival bases out of 15 (${(survivalTracker / 15 * 100).toFixed(2)}%)`);
  return (survivalTracker / 15 >= 0.6);
}


// Since you need to create multiple objects, create a factory function pAequorFactory() that has two parameters:
// The first parameter is a number (no two organisms should have the same number).
// The second parameter is an array of 15 DNA bases.
// pAequorFactor() should return an object that contains the properties specimenNum and dna that correspond to the parameters provided.
function pAequorFactory(specimenID, dna) {
  return {
    specimenID: specimenID,
    dna: dna,
    mutate: fm,
    compareDNA: fc,
    willLikelySurvive: fs
  }
}



// With the factory function set up, your team requests that you create 30 instances of pAequor that can survive in their natural environment. Store these instances in an array for your team to study later.
function createSurvivableSpecimen(amountRequest = 30) {
  let specimensList = [];
  let currentAmount = 0;
  let currentSpecimen;
  let id = 0;

  while (currentAmount < amountRequest) {
    currentSpecimen = pAequorFactory(id++, mockUpStrand());

    if (currentSpecimen.willLikelySurvive()) {
      specimensList.push(currentSpecimen);
      currentAmount++;
    }

  }

  return specimensList;
}

let specimens = createSurvivableSpecimen();

console.log(specimens);
