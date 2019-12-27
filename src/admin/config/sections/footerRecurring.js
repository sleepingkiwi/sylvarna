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
    label: 'Partner Logo Images.',
    name: 'partnerLogoInstructions',
    widget: 'instructions',
    instructions: 'We do not enforce size or colour restrictions here - it is up to you to make sure logos are consistent. Try to upload them all with the same height and same colour. \nRecommended height would be 40-50px',
    flavour: 'divider',
    required: false,
  },
  {
    label: 'Partner Logos',
    name: 'partnerLogos',
    widget: 'list',
    required: false,
    fields: [
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
    label: 'Footer call to action',
    name: 'footerCTAInstructions',
    widget: 'instructions',
    instructions: 'Call to action which is shown by default above the site footer on every page. It is styled as a full width banner with an image background and large central text ',
    flavour: 'divider',
    required: false,
  },
  {
    label: 'Footer CTA Background image',
    name: 'ctaBackground',
    widget: 'extraImage',
    showDetails: true,
    hint: 'Minimum width of 1,920px recommended. Anything above 2,500px will be cropped to 2,500px',
  },
  {
    label: 'Footer CTA link',
    name: 'ctaUrl',
    widget: 'string',
    hint: 'Where should the CTA link to?',
  },
  {
    label: 'Footer CTA Pre-header text',
    name: 'ctaPreHeader',
    widget: 'string',
    required: false,
    hint: 'Smaller text shown above the main header text.',
  },
  {
    label: 'Footer CTA Header text',
    name: 'ctaHeader',
    widget: 'string',
    required: false,
    hint: 'Large text at the center of the CTA.',
  },
  {
    label: 'Footer CTA Secondary header text',
    name: 'ctaSecondaryHeader',
    widget: 'string',
    required: false,
    hint: 'Secondary header text shown slightly smaller.',
  },
];

export default footerRecurringConfig;
