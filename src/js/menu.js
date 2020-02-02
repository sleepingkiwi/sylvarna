export const closeMenu = (e) => {
  if (e) {
    e.preventDefault();
  }

  const menu = document.querySelector('.SiteHeader__nav');
  menu.classList.remove('js--show--SiteHeader__nav');
};

const toggleMenu = (e) => {
  if (e) {
    e.preventDefault();
  }

  const menu = document.querySelector('.SiteHeader__nav');
  menu.classList.toggle('js--show--SiteHeader__nav');
};

export const init = () => {
  const menuTrigger = document.querySelectorAll('.SiteHeader__nav-trigger');
  const menuCloser = document.querySelectorAll('.SiteHeader__nav-close');

  menuTrigger.forEach(
    (n) => {
      n.addEventListener('click', toggleMenu, false);
    },
  );

  menuCloser.forEach(
    (n) => {
      n.addEventListener('click', closeMenu, false);
    },
  );

  const menu = document.querySelector('.SiteHeader__nav');
  if (menu) {
    menu.querySelector('ul').addEventListener('focusin', () => {
      menu.classList.add('js--show--SiteHeader__nav', 'js--show--SiteHeader__nav--has-focus');
    });

    menu.querySelector('ul').addEventListener('focusout', () => {
      menu.classList.remove('js--show--SiteHeader__nav', 'js--show--SiteHeader__nav--has-focus');
    });
  }
};
