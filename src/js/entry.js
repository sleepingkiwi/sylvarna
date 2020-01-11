/** imports
 *  ------------------------------------------------------------------------------------------------
**/
import { init as carouselInit } from './carousels';
import { init as popupsInit, closePopups } from './popups';
import { init as formsInit } from './forms';


/** Init everything
 *  ------------------------------------------------------------------------------------------------
**/
// set up all the carousel listeners
carouselInit();
// listen for popups
popupsInit();
// validation listeners for forms
formsInit();


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
