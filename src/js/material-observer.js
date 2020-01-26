/** Intersection Observer to watch and see the elements we scroll
 *  ------------------------------------------------------------------------------------------------
 *  ref: https://alligator.io/js/intersection-observer/
**/
const deactivateMaterial = (material, isNode = false) => {
  const activeMaterial = isNode ? material : material.target;
  activeMaterial.classList.remove('js--material--active');
  const imageTarget = activeMaterial.getAttribute('data-target');
  if (imageTarget) {
    document.getElementById(imageTarget).classList.remove('js--material-image--active');
  }
};

const activateMaterial = (material) => {
  // de-activate old ones first
  const activeMats = document.querySelectorAll('.js--material--active');
  (activeMats || []).forEach(
    (activeMaterial) => deactivateMaterial(activeMaterial, true),
  );

  // activate the new one
  material.target.classList.add('js--material--active');
  const imageTarget = material.target.getAttribute('data-target');
  if (imageTarget) {
    document.getElementById(imageTarget).classList.add('js--material-image--active');
  }
};

const config = {
  // we count an intersection as having passed a line 30% from the bottom of the screen
  // in either direction
  rootMargin: '-70% 0px -30% 0px',
  // threshold: [0, 0.25, 0.75, 1],
};

const observer = new IntersectionObserver(
  (entries/* , obs */) => {
    entries.forEach((entry) => {
      // console.log(entry.intersectionRatio);
      // > 0 means it has entered our rootMargin box
      if (entry.intersectionRatio > 0) {
        activateMaterial(entry);
      } else {
        // deactivateMaterial(entry);
      }
    });
    // console.log('observer:', obs);
  },
  config,
);

export const init = () => {
  const materials = document.querySelectorAll('.js--material');
  (materials || []).forEach((material) => {
    observer.observe(material);
  });
};

export default init;