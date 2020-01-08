/** Home page config
 *  ------------------------------------------------------------------------------------------------
**/
import pageSettings from './pageSettings';
import genericContentBlocks from './generic';

const materialConfig = [
  {
    label: 'Material',
    name: 'materialPageInstructions',
    widget: 'instructions',
    instructions: 'Materials can be assigned to styles and kitchens.\nThe primary/hero image will be used in multiple places around the site.\nContent added using the generic content blocks will only show when the material page is loaded directly.',
    flavour: 'header',
    required: false,
  },
  {
    label: 'Layout',
    name: 'layout',
    widget: 'hidden',
    default: 'layouts/material',
  },
  {
    label: 'Tags',
    name: 'tags',
    widget: 'hidden',
    default: 'material',
  },
  {
    label: 'Title',
    name: 'title',
    widget: 'string',
    default: 'Material Name',
  },
  {
    label: 'Primary Image and Sub-Header',
    name: 'hero',
    widget: 'object',
    fields: [
      {
        label: 'Primary/Hero Image',
        name: 'hero',
        widget: 'extraImage',
        showDetails: true,
        required: true,
        hint: 'Minimum width of 1,920px recommended. Anything above 3,000px will be cropped to 3,000px. This image will be shown in multiple formats across the site.',
      },
      {
        label: 'Sub-Header',
        name: 'subHeader',
        widget: 'string',
        required: false,
        default: 'Explore a range of styles and finished kitchens featuring this material below',
        hint: 'The main header will be the material Title',
      },
    ],
  },
  {
    label: 'Required Content',
    name: 'materialInstructionsOne',
    widget: 'instructions',
    flavour: 'divider',
    instructions: 'Each new material should feature a small bit of introductory text and ideally an extra image.',
    required: false,
  },
  {
    label: 'Material Information',
    name: 'materialInformation',
    widget: 'object',
    fields: [
      {
        label: 'Header',
        name: 'header',
        widget: 'string',
        required: true,
        hint: 'The pre-header will be material title. This should be something like `Sturdy and Refined`',
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
        label: 'Additional Image',
        name: 'additionalImage',
        required: false,
        widget: 'extraImage',
        showDetails: true,
      },
    ],
  },
  ...genericContentBlocks,
  {
    label: 'Explore Example Kitchens',
    name: 'materialPageInstructionsKitchens',
    widget: 'instructions',
    instructions: ' You can change the sub/title for the example kitchens section if you\'d like.',
    flavour: 'divider',
    required: false,
  },
  {
    label: 'Explore Example Kitchens Title',
    name: 'kitchensTitle',
    widget: 'string',
    default: 'Explore Example Kitchens',
  },
  {
    label: 'Explore Example Kitchens Sub-Title',
    name: 'kitchensSubTitle',
    widget: 'string',
    default: 'Using this material',
  },
  // include general page settings
  ...pageSettings,
];

export default materialConfig;
