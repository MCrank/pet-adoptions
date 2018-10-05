import { setPetsArray, getPetsArray, petsBuilder } from '../components/petComponents.js';

function requestData() {
  const data = JSON.parse(this.responseText);
  setPetsArray(data.pets);
  petsBuilder(getPetsArray());
}
function dataLoadError() {
  console.log('Failed to retrieve data source');
}
const getPets = () => {
  let myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', requestData);
  myRequest.addEventListener('error', dataLoadError);
  myRequest.open('GET', './db/pets.json');
  myRequest.send();
};

export { getPets };
