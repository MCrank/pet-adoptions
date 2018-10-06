import { filterAllPets } from './components/petComponents.js';

const filterSelectEvents = () => {
  const filterSelectInput = document.getElementsByClassName('filter-selects');
  for (let i = 0; i < filterSelectInput.length; i++) {
    filterSelectInput[i].addEventListener('change', () => {
      filterAllPets();
    });
  }
};

const attachEvents = () => {
  filterSelectEvents();
};
export { attachEvents };
