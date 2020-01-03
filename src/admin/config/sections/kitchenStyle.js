/** Home page config
 *  ------------------------------------------------------------------------------------------------
**/
import pageSettings from './pageSettings';
import genericContentBlocks from './generic';

const kitchenConfig = [
  {
    label: 'Style',
    name: 'stylePageInstructions',
    widget: 'instructions',
    instructions: 'Style pages are a showcase for different types of kitchen styles, they feature materials and example kitchens as well as dedicated imagery and text.',
    flavour: 'header',
    required: false,
  },
  {
    label: 'Layout',
    name: 'layout',
    widget: 'hidden',
    default: 'layouts/style',
  },
  {
    label: 'Title',
    name: 'title',
    widget: 'string',
    default: 'Style Name',
  },
  {
    label: 'Primary Images and Pre-Header',
    name: 'hero',
    widget: 'object',
    fields: [
      {
        label: 'Primary/Hero Image',
        name: 'hero',
        widget: 'extraImage',
        showDetails: true,
        required: true,
        hint: 'This image is shown at the top of this Style page. Minimum width of 1,920px recommended. Anything above 3,000px will be cropped to 3,000px.',
      },
      {
        label: 'Homepage Carousel Image',
        name: 'carousel',
        widget: 'extraImage',
        showDetails: true,
        required: false,
        hint: 'Optionally specify a different image for the homepage carousel. If you leave this blank the hero image will be used. Minimum width of 1,920px recommended. Anything above 3,000px will be cropped to 3,000px.',
      },
      {
        label: 'Pre-Header',
        name: 'preHeader',
        widget: 'string',
        required: false,
        hint: 'The main header will automatically be the style title from above.',
      },
    ],
  },
  {
    label: 'The Big Picture',
    name: 'styleInstructionsBigPicture',
    widget: 'instructions',
    flavour: 'divider',
    instructions: 'Two columns/Two rows of information describing and showcasing this style.',
    required: false,
  },
  {
    label: 'The Big Picture',
    name: 'styleBigPicture',
    widget: 'object',
    fields: [
      {
        label: 'Pre-Header',
        name: 'preHeader',
        widget: 'string',
        required: false,
        default: 'The Big Picture',
        hint: 'smaller text that appears above the header',
      },
      {
        label: 'Header',
        name: 'header',
        widget: 'string',
        required: false,
      },
      {
        label: 'First Row Text Content',
        name: 'textOne',
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
        label: 'First Row Image',
        name: 'imageOne',
        widget: 'extraImage',
        showDetails: true,
        required: false,
        hint: 'Landscape formats work best for this first one.',
      },
      {
        label: 'Second Row Image',
        name: 'imageTwo',
        widget: 'extraImage',
        showDetails: true,
        required: false,
        hint: 'You can use square/portrait images here but probably nothing too tall.',
      },
      {
        label: 'Second Row Text Content',
        name: 'textTwo',
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
        label: 'Second Row CTAs',
        name: 'ctas',
        widget: 'object',
        fields: [
          {
            label: 'CTAs',
            name: 'styleInstructionsCTAs',
            widget: 'instructions',
            instructions: 'This section normally finishes with two CTAs, a link to the brochure popup and a link to the contact page. You can remove or customise them.\nto remove a CTA just leave the CTA Text field blank.',
            flavour: 'vanilla',
            required: false,
          },
          {
            label: 'First CTA Text',
            name: 'ctaOne',
            widget: 'string',
            required: false,
            default: 'Order a brochure',
            hint: 'If you include text here we will render a CTA button.',
          },
          {
            label: 'First CTA Link',
            name: 'ctaURLOne',
            widget: 'string',
            required: false,
            hint: 'If you leave this field blank but provide CTA text the button will open a popup to the CTA/Brochure popup configured in the Fixed Pages menu.',
          },
          {
            label: 'Second CTA Text',
            name: 'ctaTwo',
            widget: 'string',
            required: false,
            default: 'Book an appointment',
            hint: 'If you include text here we will render a CTA button.',
          },
          {
            label: 'Second CTA Link',
            name: 'ctaURTwoL',
            widget: 'string',
            default: '/contact',
            required: false,
            hint: 'If you leave this field blank but provide CTA text the button will open a popup to the CTA/Brochure popup configured in the Fixed Pages menu.',
          },
        ],
      },
    ],
  },
  {
    label: 'Quote block and generic content',
    name: 'styleInstructionsQuoteOne',
    widget: 'instructions',
    instructions: 'An area for a quote with an optional image background and additional space for you to add generic content if required',
    flavour: 'divider',
    required: false,
  },
  {
    label: 'Quote and Generic One',
    name: 'quoteGenericOne',
    widget: 'object',
    fields: [
      {
        label: 'Quote Background Image',
        name: 'hero',
        widget: 'extraImage',
        showDetails: true,
        required: false,
        hint: 'Minimum width of 1,920px recommended. Anything above 3,000px will be cropped to 3,000px.',
      },
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
      ...genericContentBlocks,
    ],
  },
  {
    label: 'All In The Details',
    name: 'styleInstructionsDetails',
    widget: 'instructions',
    flavour: 'divider',
    instructions: 'Two columns with multiple images and small pieces of text.\nLayout changes significantly on desktop/mobile so make sure you are happy with how everything looks on both!',
    required: false,
  },
  {
    label: 'All In The Details',
    name: 'styleDetails',
    widget: 'object',
    fields: [
      {
        label: 'Pre-Header',
        name: 'preHeader',
        widget: 'string',
        required: false,
        default: 'The beauty is',
        hint: 'smaller text that appears above the header',
      },
      {
        label: 'Header',
        name: 'header',
        widget: 'string',
        default: 'All in the details',
        required: false,
      },
      {
        label: 'Primary Text Content',
        name: 'textOne',
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
        label: 'Primary Image',
        name: 'imageOne',
        widget: 'extraImage',
        showDetails: true,
        required: false,
        hint: 'Square ratio or close to it works best.',
      },
      {
        label: 'Second Image',
        name: 'imageTwo',
        widget: 'extraImage',
        showDetails: true,
        required: false,
        hint: '7:9 or other portrait ratios. Image 2 and 3 look best with the same proportions.',
      },
      {
        label: 'Second Text Content',
        name: 'textTwo',
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
        label: 'Third Image',
        name: 'imageThree',
        widget: 'extraImage',
        showDetails: true,
        required: false,
        hint: '7:9 or other portrait ratios. Image 2 and 3 look best with the same proportions.',
      },
      {
        label: 'Third Text Content',
        name: 'textThree',
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
        label: 'Fourth Image',
        name: 'imageFour',
        widget: 'extraImage',
        showDetails: true,
        required: false,
        hint: 'Square or slightly portrait work well.',
      },
      {
        label: 'Fourth Text Content',
        name: 'textFour',
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
    ],
  },
  {
    label: 'Materials',
    name: 'styleInstructionsMaterials',
    widget: 'instructions',
    instructions: 'Section highlighting materials used in this style',
    flavour: 'divider',
    required: false,
  },
  {
    label: 'Materials',
    name: 'materials',
    widget: 'object',
    fields: [
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
        default: 'Materials',
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
        label: 'CTA Text',
        name: 'ctaOne',
        widget: 'string',
        required: false,
        default: 'Bespoke Kitchens',
        hint: 'If you include text here we will render a CTA button.',
      },
      {
        label: 'CTA Link',
        name: 'ctaURLOne',
        widget: 'string',
        required: false,
        default: '/bespoke',
        hint: 'If you leave this field blank but provide CTA text the button will open a popup to the CTA/Brochure popup configured in the Fixed Pages menu.',
      },
      {
        label: 'Materials Used',
        name: 'materials',
        widget: 'relationWrapped',
        collection: 'material',
        required: false,
        multiple: true,
        searchFields: ['title'],
        valueField: 'title',
        optionsLength: 50,
      },
    ],
  },
  {
    label: 'Quote block and generic content',
    name: 'styleInstructionsQuoteTwo',
    widget: 'instructions',
    instructions: 'An area for a quote with an optional image background and additional space for you to add generic content if required',
    flavour: 'divider',
    required: false,
  },
  {
    label: 'Quote and Generic Two',
    name: 'quoteGenericTwo',
    widget: 'object',
    fields: [
      {
        label: 'Quote Background Image',
        name: 'hero',
        widget: 'extraImage',
        showDetails: true,
        required: false,
        hint: 'Minimum width of 1,920px recommended. Anything above 3,000px will be cropped to 3,000px.',
      },
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
      ...genericContentBlocks,
    ],
  },
  {
    label: 'Example Kitchens',
    name: 'styleInstructionsExampleKitchens',
    widget: 'instructions',
    instructions: 'The example kitchens are populated automatically but you can customise the header image and text.',
    flavour: 'divider',
    required: false,
  },
  {
    label: 'Example Kitchens',
    name: 'exampleKitchens',
    widget: 'object',
    fields: [
      {
        label: 'Header Image',
        name: 'hero',
        widget: 'extraImage',
        showDetails: true,
        required: false,
        hint: 'Minimum width of 1,920px recommended. Anything above 3,000px will be cropped to 3,000px.',
      },
      {
        label: 'Header',
        name: 'header',
        widget: 'string',
        required: false,
        default: 'Example Kitchens',
      },
      {
        label: 'Sub-Header',
        name: 'subHeader',
        widget: 'string',
        required: false,
        default: 'in this style',
      },
    ],
  },
  // include general page settings
  ...pageSettings,
];

export default kitchenConfig;
