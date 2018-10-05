import { getPets } from './data/petData.js';
import { attachEvents } from './events.js';

const initApp = () => {
  getPets();
  attachEvents();
};

initApp();
