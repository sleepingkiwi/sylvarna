/** page settings - things that appear on pretty much every page!
 *  ------------------------------------------------------------------------------------------------
**/

import { metaConfigPage } from './meta';

const pageSettings = [
  {
    label: 'Page Settings & SEO',
    name: 'genericInstructions',
    widget: 'instructions',
    flavour: 'divider',
    instructions: 'Settings for this page that affect the overall appearence or overwrite global defaults.',
    required: false,
  },
  {
    label: 'Transparent Header?',
    name: 'transparentHeader',
    widget: 'boolean',
    default: true,
    hint: 'Set to false if you would like a solid background behind the header on this page.',
  },
  {
    label: 'Show partnerships in footer?',
    name: 'footerPartners',
    widget: 'boolean',
    default: true,
    hint: 'Do you want to display partner logos in the footer of this page? (You can configure them in the global settings)',
  },
  {
    label: 'Show CTA in footer?',
    name: 'footerCTA',
    widget: 'boolean',
    default: true,
    hint: 'Do you want a footer CTA on this page? (You can configure it in the global settings)',
  },
  // include all of the social & meta options at the end
  ...metaConfigPage,
];

export default pageSettings;
