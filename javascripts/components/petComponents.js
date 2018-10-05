import { printToDom } from '../helpers/util.js';
// import { getPets } from '../data/petData.js';

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

export { setPetsArray, getPetsArray, petsBuilder };
