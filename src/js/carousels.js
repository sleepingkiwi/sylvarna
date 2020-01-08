/** Carousels...
 *  ------------------------------------------------------------------------------------------------
**/

/** MOVE THESE INTO UTILITIES
 *  ------------------------------------------------------------------------------------------------
**/
const getPreviousSibling = (elem, selector) => {
  let sibling = elem.previousElementSibling;

  while (sibling) {
    if (sibling.matches(selector)) return sibling;
    sibling = sibling.previousElementSibling;
  }

  return null;
};

const getNextSibling = (elem, selector) => {
  let sibling = elem.nextElementSibling;

  while (sibling) {
    if (sibling.matches(selector)) return sibling;
    sibling = sibling.nextElementSibling;
  }

  return null;
};


/** Action functions
 *  ------------------------------------------------------------------------------------------------
**/
const carouselGoTo = (target, carousel) => {
  /** START DEBUGGING **/
  // TODO - remove this debugging code!
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.log({
      message: 'carouselGoTo',
      target,
      carousel,
    });
  }
  /** END DEBUGGING **/
};

const carouselPrevNext = (direction, carousel) => {
  const active = document.getElementById(carousel.getAttribute('data-active-slide'));
  if (active) {
    const target = (
      direction === 'prev'
        ? getPreviousSibling(active, '.js--carousel__slide')
        : getNextSibling(active, '.js--carousel__slide')
    ) || carousel.querySelector('.js--carousel__slide:last-of-type');

    if (target) {
      carouselGoTo(target, carousel);
    }
  }
};

/** Handle actions
 *  ------------------------------------------------------------------------------------------------
**/
const carouselAction = (e) => {
  const carousel = e.target.closest('.js--carousel');

  if (carousel) {
    switch (e.target.getAttribute('data-action')) {
      case 'prev':
        carouselPrevNext('prev', carousel);
        break;
      case 'next':
        carouselPrevNext('next', carousel);
        break;
      case 'target':
        carouselGoTo(document.getElementById(e.target.getAttribute('data-target')), carousel);
        break;

      default:
        /** START DEBUGGING **/
        if (process.env.NODE_ENV !== 'production') {
          // eslint-disable-next-line no-console
          console.log({
            message: 'There was no usable data-action on a .js--carousel__nav-link',
            target: e.target,
          });
        }
        /** END DEBUGGING **/
        break;
    }
  }
};


/** Initialise listeners
 *  ------------------------------------------------------------------------------------------------
**/
export const init = () => {
  const carouselButtons = document.querySelectorAll('.js--carousel__nav-link');
  (carouselButtons || []).forEach(
    (butt) => {
      butt.addEventListener('click', carouselAction, false);
    },
  );
};

export default init;
