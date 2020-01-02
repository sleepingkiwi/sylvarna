import pageSettings from './pageSettings';


/** generic repeatable content using blocks
 *  ------------------------------------------------------------------------------------------------
**/

const contentBlockOptions = [
  {
    label: 'Alternative Background Colour?',
    name: 'backgroundColour',
    widget: 'boolean',
    default: false,
    hint: 'Uses the secondary background colour for this block. It can be nice to alternate for contrast.',
  },
  {
    label: 'Background Image',
    name: 'backgroundImage',
    widget: 'extraImage',
    showDetails: true,
    required: false,
    hint: 'centrally cropped full bleed image. Optional.',
  },
];

const contentBlockContentTypes = {
  label: 'Content Types',
  name: 'content',
  widget: 'list',
  types: [
    {
      label: 'Header',
      name: 'header',
      widget: 'object',
      fields: [
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
          label: 'Text alignment',
          name: 'textAlign',
          widget: 'select',
          options: ['left', 'center', 'right'],
          default: 'left',
        },
      ],
    },
    {
      label: 'Text',
      name: 'text',
      widget: 'object',
      fields: [
        {
          label: 'Text Content',
          name: 'text',
          widget: 'markdown',
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
          label: 'Text alignment',
          name: 'textAlign',
          widget: 'select',
          options: ['left', 'center', 'right'],
          default: 'left',
        },
      ],
    },
    {
      label: 'Quote',
      name: 'quote',
      widget: 'object',
      fields: [
        {
          label: 'Quote Text',
          name: 'quoteText',
          widget: 'string',
          required: false,
          hint: 'You do not need to add “” quotation marks yourself.',
        },
        {
          label: 'Quote Attribution',
          name: 'quoteAttribution',
          widget: 'string',
          required: false,
        },
      ],
    },
    {
      label: 'Image',
      name: 'image',
      widget: 'object',
      fields: [
        {
          label: 'Image',
          name: 'image',
          widget: 'extraImage',
          showDetails: true,
        },
      ],
    },
    {
      label: 'CTA',
      name: 'cta',
      widget: 'object',
      fields: [
        {
          label: 'CTA Text',
          name: 'cta',
          widget: 'string',
          required: false,
          hint: 'If you include text here we will render a CTA button.',
        },
        {
          label: 'CTA Link',
          name: 'ctaURL',
          widget: 'string',
          required: false,
          hint: 'If you leave this field blank but provide CTA text the button will open a popup to the CTA/Brochure popup configured in the Fixed Pages menu.',
        },
        {
          label: 'Text alignment',
          name: 'textAlign',
          widget: 'select',
          options: ['left', 'center', 'right'],
          default: 'left',
          hint: 'controls button alignment, text inside the button is always centered',
        },
      ],
    },
  ],
};

const genericContentBlocks = [
  {
    label: 'Repeatable content blocks',
    name: 'genericInstructions',
    widget: 'instructions',
    flavour: 'divider',
    instructions: 'Add content in configurable blocks, either one or two columns wide. You can add as many blocks as you\'d like in this section.',
    required: false,
  },
  {
    label: 'Content Blocks',
    name: 'genericContentBlocks',
    widget: 'list',
    types: [
      {
        label: 'One Column',
        name: 'oneColumn',
        widget: 'object',
        fields: [
          ...contentBlockOptions,
          contentBlockContentTypes,
        ],
      },
      {
        label: 'Two Columns',
        name: 'twoColumns',
        widget: 'object',
        fields: [
          ...contentBlockOptions,
          {
            ...contentBlockContentTypes,
            label: 'Left Column Content',
            name: 'leftColumnContent',
          },
          {
            ...contentBlockContentTypes,
            label: 'Right Column Content',
            name: 'rightColumnContent',
          },
        ],
      },
    ],
  },
];

export default genericContentBlocks;


/** We also export the fields for the generic page config
 *  ------------------------------------------------------------------------------------------------
**/
export const genericPageConfig = [
  {
    label: 'Custom Page',
    name: 'genericPageInstructions',
    widget: 'instructions',
    instructions: 'This page can contain whatever you want!',
    flavour: 'header',
    required: false,
  },
  {
    label: 'Layout',
    name: 'layout',
    widget: 'hidden',
    default: 'layouts/base.njk',
  },
  {
    label: 'Title',
    name: 'title',
    widget: 'string',
  },
  {
    label: 'Permalink Override (Pattern: /your-slug/index.html)',
    name: 'permalink',
    widget: 'string',
    required: false,
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
  // include general page settings
  ...pageSettings,
];
