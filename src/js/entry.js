/** imports
 *  ------------------------------------------------------------------------------------------------
**/
import { init as carouselInit } from './carousels';
import { init as popupsInit } from './popups';
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
