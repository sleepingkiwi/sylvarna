/** Home page config
 *  ------------------------------------------------------------------------------------------------
**/
import pageSettings from './pageSettings';
import genericContentBlocks from './generic';

const brochureConfig = {
  name: 'brochure',
  label: 'CTA/Brochure Popup',
  delete: false,
  file: 'src/brochure.md',
  slug: '{{slug}}',
  create: false,
  fields: [
    {
      label: 'Brochure page / CTA popup',
      name: 'brochureInstructions',
      widget: 'instructions',
      flavour: 'header',
      instructions: 'This page is designed to be shown in a popup, whilst it can be linked to directly it is more often shown as a popup without it\'s hero image/title.\nTo create a popup which opens this page simply omit the URL in any CTA you create through this CMS.',
      required: false,
    },
    {
      label: 'Layout',
      name: 'layout',
      widget: 'hidden',
      default: 'layouts/brochure',
    },
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      default: 'Brochure',
    },
    {
      label: 'Tags',
      name: 'tags',
      widget: 'hidden',
      default: 'popup',
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
          hint: 'Minimum width of 1,920px recommended. Anything above 3,000px will be cropped to 3,000px',
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
    ...genericContentBlocks,
    {
      label: 'Request Brochure Block',
      name: 'brochureInstructionsRequest',
      widget: 'instructions',
      flavour: 'divider',
      instructions: 'This section contains a form to request a brochure and optionally a link to an online version.',
      required: false,
    },
    {
      label: 'Request a Brochure',
      name: 'requestBrochureBlock',
      widget: 'object',
      fields: [
        {
          label: 'Left Column Image',
          name: 'image',
          widget: 'extraImage',
          showDetails: true,
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
        {
          label: 'Text Content',
          name: 'text',
          widget: 'markdown',
          required: false,
          buttons: [
            'bold',
            'italic',
            'code',
            'link',
            'heading-one',
            'heading-two',
            'heading-three',
            'heading-four',
            'heading-five',
            'heading-six',
            'quote',
            'code-block',
            'bulleted-list',
            'numbered-list',
          ],
        },
        {
          label: 'Form Field Labels',
          name: 'labels',
          widget: 'object',
          required: false,
          fields: [
            {
              label: 'Customise Form Labels',
              name: 'brochureInstructionsLabels',
              widget: 'instructions',
              flavour: 'vanilla',
              instructions: 'Completely optional, but you can overwrite the labels given to each form field here.',
              required: false,
            },
            {
              label: 'Name',
              name: 'name',
              default: 'Name',
              widget: 'string',
              required: false,
            },
            {
              label: 'Email',
              name: 'email',
              default: 'Email',
              widget: 'string',
              required: false,
            },
            {
              label: 'Address',
              name: 'address',
              default: 'Address',
              widget: 'string',
              required: false,
            },
            {
              label: 'Request Printed Brochure',
              name: 'requestPrintedBrochure',
              default: 'Request Printed Brochure',
              widget: 'string',
              required: false,
            },
          ],
        },
        {
          label: 'Download CTA Text',
          name: 'cta',
          widget: 'string',
          required: false,
          hint: 'CTA is optional, but recommended.',
        },
        {
          label: 'Download CTA Link',
          name: 'ctaURL',
          widget: 'file',
          required: false,
          hint: 'CTA is optional, but recommended. If you omit this file or the CTA Text it will not show.',
        },
      ],
    },
    // we also include all of the regular page settings!
    ...pageSettings,
  ], // fields
};

export default brochureConfig;
