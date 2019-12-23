/** Home page config
 *  ------------------------------------------------------------------------------------------------
**/
import pageSettings from './pageSettings';

const contactConfig = {
  name: 'conatct',
  label: 'Contact',
  delete: false,
  file: 'src/contact.md',
  slug: '{{slug}}',
  create: false,
  fields: [
    {
      label: 'Contact Page',
      name: 'contactPageInstructions',
      widget: 'instructions',
      flavour: 'header',
      instructions: 'Content for the contact page....',
      required: false,
    },
    {
      label: 'Layout',
      name: 'layout',
      widget: 'hidden',
      default: 'layouts/base',
    },
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      default: 'Home',
    },
    {
      label: 'Hero Image and Page Title',
      name: 'hero',
      widget: 'object',
      fields: [
        {
          label: 'Hero Image',
          name: 'hero',
          widget: 'extraImage',
          showDetails: true,
          required: true,
          hint: 'Minimum width of 1,920px recommended. Anything above 2,500px will be cropped to 2,500px',
        },
        {
          label: 'Pre-Header',
          name: 'preHeader',
          widget: 'string',
          required: false,
          hint: 'smaller text that appears above the header',
        },
        {
          label: 'Header',
          name: 'header',
          widget: 'string',
          required: false,
        },
      ],
    },
    // we also include all of the regular page settings!
    ...pageSettings,
  ], // fields
};

export default contactConfig;
