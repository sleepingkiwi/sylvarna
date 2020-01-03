/** Style landing page config
 *  ------------------------------------------------------------------------------------------------
**/
import pageSettings from './pageSettings';
import genericContentBlocks from './generic';

const styleLandingConfig = {
  name: 'styleLanding',
  label: 'Styles Landing Page',
  delete: false,
  file: 'src/style.md',
  slug: '{{slug}}',
  create: false,
  fields: [
    {
      label: 'Styles Landing Page',
      name: 'stylesLandingPageInstructions',
      widget: 'instructions',
      instructions: 'Landing page listing all of the styles you have added.',
      flavour: 'header',
      required: false,
    },
    {
      label: 'Layout',
      name: 'layout',
      widget: 'hidden',
      default: 'layouts/styleLanding',
    },
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      default: 'Styles',
    },
    {
      label: 'Primary Image and Header',
      name: 'hero',
      widget: 'object',
      fields: [
        {
          label: 'Primary/Hero Image',
          name: 'hero',
          widget: 'extraImage',
          showDetails: true,
          required: false,
          hint: 'Minimum width of 1,920px recommended. Anything above 3,000px will be cropped to 3,000px. This image will be shown in multiple formats across the site.',
        },
        {
          label: 'Pre-Header',
          name: 'preHeader',
          widget: 'string',
          required: false,
        },
        {
          label: 'Header',
          name: 'header',
          widget: 'string',
          required: false,
        },
      ],
    },
    ...genericContentBlocks,
    // include general page settings
    ...pageSettings,
  ],
};

export default styleLandingConfig;
