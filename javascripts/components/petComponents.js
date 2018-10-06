import { printToDom } from '../helpers/util.js';

let petsArray = [];

const setPetsArray = (newArray) => {
  petsArray = newArray;
};

const getPetsArray = () => {
  return petsArray;
};

const petsBuilder = (petArray) => {
  let newString = '';
  petArray.forEach((pet) => {
    newString += `<div class="col-sm-2 card m-2 shadow">
        <div class="card-header">${pet.name}</div>
            <div class="card-body">
                <img class="card-img-top" src="${pet.imageUrl}" alt="Card image cap">
                <h6 class="card-text">${pet.color}</h6>
                <p class="card-text">${pet.specialSkill}</p>
            </div>
        <div class="card-footer">${pet.type[0].toUpperCase() + pet.type.slice(1)}</div>
    </div>`;
  });
  printToDom(newString, 'pets');
};

// Wow this murdered the hell out of me. Spent more time on the .map passing in the variable because the
// bracket notation. Completely forgot about that...  :(
const filterTypeBuilder = () => {
  const filterParams = ['type', 'color'];
  for (let i = 0; i < filterParams.length; i++) {
    const pet = `pet.${filterParams[i]}`;
    let newFilterString = `<option value="all" selected>All</Option>`;
    petsArray
      .map((pet) => pet[filterParams[i]])
      .filter((value, index, self) => self.indexOf(value) === index)
      .forEach((x) => {
        newFilterString += `<option value="${x}">${x[0].toUpperCase() + x.slice(1)}</option>`;
      });

    if (filterParams[i] === 'type') {
      printToDom(newFilterString, 'petTypeSelect');
    } else if (filterParams[i] === 'color') {
      printToDom(newFilterString, 'petColorSelect');
    }
  }
};

const filterAllPets = () => {
  const pType = document.getElementById('petTypeSelect').value;
  const pColor = document.getElementById('petColorSelect').value;
  if (pType === 'all' && pColor === 'all') {
    petsBuilder(petsArray);
  } else if (pType !== 'all' && pColor === 'all') {
    const filteredPets = petsArray.filter((x) => x.type === pType);
    petsBuilder(filteredPets);
  } else if (pType === 'all' && pColor !== 'all') {
    const filteredPets = petsArray.filter((x) => x.color === pColor);
    petsBuilder(filteredPets);
  } else if (pType !== 'all' && pColor !== 'all') {
    const filteredPets = petsArray.filter((x) => x.color === pColor && x.type === pType);
    petsBuilder(filteredPets);
  }
};

export { setPetsArray, getPetsArray, petsBuilder, filterTypeBuilder, filterAllPets };
