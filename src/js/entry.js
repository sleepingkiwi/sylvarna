import { soModern, soFunctional } from './test';
import { init as carouselInit } from './carousels';

console.log(`Oh. ${soModern()}`);

soFunctional().forEach((l) => console.log(l));

// set up all the carousel listeners
carouselInit();
