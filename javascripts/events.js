const filterSelectEvents = () => {
  const filterSelectInput = document.getElementsByClassName('filter-selects');
  for (let i = 0; i < filterSelectInput.length; i++) {
    filterSelectInput[i].addEventListener('change', (event) => {
      console.log(event);
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
