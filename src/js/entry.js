/** imports
 *  ------------------------------------------------------------------------------------------------
**/
import { init as carouselInit } from './carousels';
import { init as popupsInit, closePopups } from './popups';
import { init as formsInit } from './forms';
import { init as materialObserverInit } from './material-observer';
import { init as genericIntersectionInit } from './generic-intersection';
import { init as menuInit, closeMenu } from './menu';


/** Init everything
 *  ------------------------------------------------------------------------------------------------
**/
// set up all the carousel listeners
carouselInit();
// listen for popups
popupsInit();
// validation listeners for forms
formsInit();
// observing materials in lists on style pages (if relevant)
materialObserverInit();
// allowing elements to opt in to generic interesection observation by adding .js--wants-interestion
genericIntersectionInit();
// menu toggles and expanders
menuInit();


/** Cancel/close stuff with the esc key
 *  ------------------------------------------------------------------------------------------------
**/
document.onkeydown = (e) => {
  let pressedEsc = false;
  if ('key' in e) {
    pressedEsc = (e.key === 'Escape' || e.key === 'Esc');
  } else {
    pressedEsc = (e.keyCode === 27);
  }

  if (pressedEsc) {
    closePopups();
    closeMenu();
  }
};
