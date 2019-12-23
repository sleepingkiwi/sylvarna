/** adding social accounts
 *  ------------------------------------------------------------------------------------------------
**/

const footerRecurringConfig = [
  {
    label: 'Recurring content in the site footer.',
    name: 'footerRecurringInstructions',
    widget: 'instructions',
    instructions: 'Every page has the option to display a CTA banner and/or partner logos above the footer. You can configure them here.',
    flavour: 'header',
    required: false,
  },
  {
    label: 'Partner Logos',
    name: 'partnerLogos',
    widget: 'list',
    required: false,
    fields: [
      {
        label: 'Partner Logo Images.',
        name: 'partnerLogoInstructions',
        widget: 'instructions',
        instructions: 'We do not enforce size or colour restrictions here - it is up to you to make sure logos are consistent. Try to upload them all with the same height and same colour. \nRecommended height would be 40-50px',
        flavour: 'vanilla',
        required: false,
      },
      {
        label: 'Logo Image',
        name: 'logo',
        widget: 'extraImage',
        showDetails: true,
      },
      {
        label: 'Title Text',
        name: 'title',
        widget: 'string',
        required: false,
        hint: 'Optionally show text on hover.',
      },
    ],
  },
  {
    label: 'Footer CTA',
    name: 'footerCTA',
    widget: 'list',
    required: false,
    fields: [
      {
        label: 'Footer call to action',
        name: 'footerCTAInstructions',
        widget: 'instructions',
        instructions: '...',
        flavour: 'vanilla',
        required: false,
      },
      {
        label: 'Background Image',
        name: 'logo',
        widget: 'extraImage',
        showDetails: true,
        hint: 'Minimum width of 1,920px recommended. Anything above 2,500px will be cropped to 2,500px',
      },
      {
        label: 'Title Text',
        name: 'title',
        widget: 'string',
        required: false,
        hint: 'Optionally show text on hover.',
      },
    ],
  },
];

export default footerRecurringConfig;
