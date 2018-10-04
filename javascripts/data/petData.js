function requestData() {
  const data = JSON.parse(this.responseText);
  console.log(data.pets);
  // Put your functions here to handle the 'load' event
  // setCharacters(data.characters);
  // charactersBuilder(getCharacterz());
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
