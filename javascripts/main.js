import { getPetsDb } from './data/petData.js';
import { attachEvents } from './events.js';

const initApp = () => {
  getPetsDb();
  attachEvents();
};

initApp();
