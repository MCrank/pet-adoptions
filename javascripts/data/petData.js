import { setPetsArray, getPetsArray, petsBuilder, filterTypeBuilder } from '../components/petComponents.js';

function requestData() {
  const data = JSON.parse(this.responseText);
  setPetsArray(data.pets);
  filterTypeBuilder('type');
  petsBuilder(getPetsArray());
}
function dataLoadError() {
  console.log('Failed to retrieve data source');
}
const getPetsDb = () => {
  let myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', requestData);
  myRequest.addEventListener('error', dataLoadError);
  myRequest.open('GET', './db/pets.json');
  myRequest.send();
};

export { getPetsDb };
