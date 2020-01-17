/** imports
 *  ------------------------------------------------------------------------------------------------
**/
import { init as carouselInit } from './carousels';
import { init as popupsInit, closePopups } from './popups';
import { init as formsInit } from './forms';
import { init as materialObserverInit } from './material-observer';


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


// TODO this needs to flesh out in it's own file!
const menuTrigger = document.querySelector('.SiteHeader__nav-trigger');
menuTrigger.addEventListener('click', (e) => {
  e.preventDefault();

  const menu = document.querySelector('.SiteHeader__nav');
  menu.classList.toggle('js--show--SiteHeader__nav');
}, false);


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
  }
};
