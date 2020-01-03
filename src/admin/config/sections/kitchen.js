/** Home page config
 *  ------------------------------------------------------------------------------------------------
**/
import pageSettings from './pageSettings';
import genericContentBlocks from './generic';

const kitchenConfig = [
  {
    label: 'Kitchen',
    name: 'kitchenPageInstructions',
    widget: 'instructions',
    instructions: 'Kitchen pages can be assigned to styles.\nThey are normally shown in popups and do not have hero/header images of their own.',
    flavour: 'header',
    required: false,
  },
  {
    label: 'Layout',
    name: 'layout',
    widget: 'hidden',
    default: 'layouts/kitchen',
  },
  {
    label: 'Title',
    name: 'title',
    widget: 'string',
    default: 'Kitchen Name',
  },
  {
    label: 'Required Content',
    name: 'kitchenInstructionsOne',
    widget: 'instructions',
    flavour: 'divider',
    instructions: 'This information is shown on the the style page. Other content is hidden until the kitchen popup is opened.',
    required: false,
  },
  {
    label: 'Kitchen Information',
    name: 'kitchenInformation',
    widget: 'object',
    fields: [
      {
        label: 'Location Name/Pre-header',
        name: 'location',
        widget: 'string',
        required: true,
        hint: 'The main header will be the kitchen title. This is intended to be something like `London` or `Modern Luxury`',
      },
      {
        label: 'Kitchen Description',
        name: 'description',
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
        label: 'Images',
        name: 'additionalImages',
        required: true,
        widget: 'list',
        showDetails: true,
        hint: 'The first image will be shown on the Style page, all others form part of a carousel in the popup.',
        fields: [
          {
            label: 'Image Name',
            name: 'name',
            widget: 'string',
            required: false,
            hint: 'Just for your own reference when sorting this list!',
          },
          {
            label: 'Image',
            name: 'additionalImage',
            widget: 'extraImage',
            showDetails: true,
          },
        ],
      },
    ],
  },
  ...genericContentBlocks,
  {
    label: 'Materials Used',
    name: 'kitchenPageInstructionsMaterials',
    widget: 'instructions',
    instructions: 'This ties the kitchen to existing materials',
    flavour: 'divider',
    required: false,
  },
  {
    label: 'Materials',
    name: 'materials',
    widget: 'relationWrapped',
    collection: 'material',
    multiple: true,
    searchFields: ['title'],
    valueField: 'title',
    optionsLength: 50,
  },
  {
    label: 'Styles Used',
    name: 'kitchenPageInstructionsStyles',
    widget: 'instructions',
    instructions: 'This ties the kitchen to styles',
    flavour: 'divider',
    required: false,
  },
  {
    label: 'Styles',
    name: 'styles',
    widget: 'relationWrapped',
    collection: 'kitchenStyle',
    multiple: true,
    searchFields: ['title'],
    valueField: 'title',
    optionsLength: 50,
  },
  // include general page settings
  ...pageSettings,
];

export default kitchenConfig;
