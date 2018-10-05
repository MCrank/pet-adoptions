import { filterSelectBuilder } from './components/petComponents.js';

const filterSelectEvents = () => {
  const filterSelectInput = document.getElementsByClassName('filter-selects');
  for (let i = 0; i < filterSelectInput.length; i++) {
    filterSelectInput[i].addEventListener('change', (event) => {
      console.log(event);
      let myArray = [];
      const selectType = event.target.name;
      if (selectType === 'petTypeSelect') {
        let myArray = filterSelectBuilder('type');
      } else if (selectType === 'petColorSelect') {
        filterSelectBuilder('color');
      }
    });
  }
};

const clearFilterEvents = () => {
  const clearFilterBtn = document.getElementById('clear-filter');
  //   clearFilterBtn.addEventListener('click', clearFilter);
};

const attachEvents = () => {
  filterSelectEvents();
  clearFilterEvents();
};
export { attachEvents };
