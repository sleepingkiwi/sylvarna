/** Carousels...
 *  ------------------------------------------------------------------------------------------------
**/
import { getNextSibling, getPreviousSibling } from './utils/siblings';


/** Action functions
 *  ------------------------------------------------------------------------------------------------
**/
const carouselGoTo = (target, carousel) => {
  // remove old active classes.
  const active = carousel.querySelectorAll('.js--carousel__slide--active');
  (active || []).forEach(
    (a) => {
      a.classList.remove('js--carousel__slide--active');
      a.classList.remove('js--carousel__slide--trans-in');
    },
  );

  // add new one
  target.classList.add('js--carousel__slide--active');
  // wait a tick for the transition class so that it animates...
  window.setTimeout(() => target.classList.add('js--carousel__slide--trans-in'), 10);
  carousel.setAttribute('data-active-slide', target.id);
};

const carouselPrevNext = (direction, carousel) => {
  const active = document.getElementById(carousel.getAttribute('data-active-slide'));
  if (active) {
    const target = (
      direction === 'prev'
        ? getPreviousSibling(active, '.js--carousel__slide')
        : getNextSibling(active, '.js--carousel__slide')
    ) || (
      direction === 'prev'
        ? carousel.querySelector('.js--carousel__slide:last-of-type')
        : carousel.querySelector('.js--carousel__slide:first-of-type')
    );

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

  // left/right for progress
  document.addEventListener('keydown', (e) => {
    if (e.keyCode === 37 || e.keyCode === 39) {
      const carousels = document.querySelectorAll('.js--carousel');
      (carousels || []).forEach(
        (carousel) => carouselPrevNext(e.keycode === 37 ? 'prev' : 'next', carousel),
      );
    }
  });
};

export default init;
