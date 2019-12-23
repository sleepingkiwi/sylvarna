// TODO: break this into modules...

import { metaConfigGlobal } from './sections/meta';
import pageSettings from './sections/pageSettings';
import homeConfig from './sections/home';
import bespokeConfig from './sections/bespoke';
import contactConfig from './sections/contact';
import siteDetailsConfig from './sections/siteDetails';
import socialAccountsConfig from './sections/socialAccounts';
import genericContentBlocks from './sections/generic';
import footerRecurringConfig from './sections/footerRecurring';

const config = {
  // ref https://www.netlifycms.org/docs/beta-features/#manual-initialization
  load_config_file: false,
  // refs: https://www.netlifycms.org/docs/configuration-options/
  // https://github.com/netlify/netlify-cms/blob/master/example/config.yml
  backend: {
    name: 'git-gateway',
    branch: 'master',
  },

  // logo_url: https://your-site.com/images/logo.svg,

  site_url: 'https://eloquent-shaw-bcc683.netlify.com/',
  display_url: 'https://eloquent-shaw-bcc683.netlify.com/',

  // Media files will be stored in the repo under this dir
  // however because we use cloudinary currently this is ignored
  media_folder: 'src/images',
  // the built site has an uploads directory at root
  public_folder: 'images',

  // comment this out to upload images directly to github
  media_library: {
    name: 'cloudinary',
    output_filename_only: false,
    config: {
      cloud_name: 'coolguy',
      api_key: '254768163573657',
    },
  },

  // optional, enables publishing workflow
  publish_mode: 'editorial_workflow',

  // All of our site content!
  collections: [
    /** Fixed Pages
     *  --------------------------------------------------------------------------------------------
     *  These are the pages required by the site that require config
     *  they cannot be deleted in the CMS
    **/
    {
      name: 'pages',
      label: 'Fixed Pages',
      description: 'These are the pages required by the site that you can configure',
      files: [
        // Home Page
        homeConfig,
        bespokeConfig,
        contactConfig,
      ], // files
    }, // END FIXED PAGES


    /** Custom Pages
     *  --------------------------------------------------------------------------------------------
     *  These are generic pages that can be added by CMS users
    **/
    {
      name: 'generic_pages',
      label: 'Custom Pages',
      folder: 'src/pages',
      slug: '{{slug}}',
      preview_path: 'pages/{{slug}}',
      create: true,
      description: 'Empty pages with no fixed content. You can add whatever you want by stacking content blocks.',
      fields: [
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
        ...genericContentBlocks,
        // include general page settings
        ...pageSettings,
      ], // fields
    }, // END CUSTOM PAGES


    /** Kitchen Styles
     *  --------------------------------------------------------------------------------------------
    **/
    {
      name: 'kitchen_styles',
      label: 'Kitchen Styles',
      folder: 'src/kitchenStyles',
      slug: '{{slug}}',
      preview_path: 'style/{{slug}}',
      create: true,
      description: 'Style pages. These will be automatically added to the home page carousel.',
      fields: [
        {
          label: 'Custom Page',
          name: 'genericPageInstructions',
          widget: 'instructions',
          instructions: 'This page can contain whatever you want!',
          flavour: 'header',
          required: false,
        },
        ...genericContentBlocks,
        // include general page settings
        ...pageSettings,
      ], // fields
    }, // END KITCHEN STYLES


    /** Materials
     *  --------------------------------------------------------------------------------------------
    **/
    {
      name: 'materials',
      label: 'Materials',
      folder: 'src/materials',
      slug: '{{slug}}',
      preview_path: 'material/{{slug}}',
      create: true,
      description: 'Materials, available to be used by styles and kitchens.',
      fields: [
        {
          label: 'Custom Page',
          name: 'genericPageInstructions',
          widget: 'instructions',
          instructions: 'This page can contain whatever you want!',
          flavour: 'header',
          required: false,
        },
        ...genericContentBlocks,
        // include general page settings
        ...pageSettings,
      ], // fields
    }, // END Materials


    /** Kitchens
     *  --------------------------------------------------------------------------------------------
    **/
    {
      name: 'kitchens',
      label: 'Kitchens',
      folder: 'src/kitchens',
      slug: '{{slug}}',
      preview_path: 'kitchen/{{slug}}',
      create: true,
      description: 'Individual kitchen pages.',
      fields: [
        {
          label: 'Custom Page',
          name: 'genericPageInstructions',
          widget: 'instructions',
          instructions: 'This page can contain whatever you want!',
          flavour: 'header',
          required: false,
        },
        ...genericContentBlocks,
        // include general page settings
        ...pageSettings,
      ], // fields
    }, // END KITCHENS


    /** Global Settings
     *  --------------------------------------------------------------------------------------------
     *  settings that apply globally or to large areas of the site.
     *  usually these are written as json to the _data dir
    **/
    {
      label: 'Global Settings',
      name: 'globals',
      description: 'Settings that apply globally or that do not belong to individual pages',
      editor: {
        preview: false,
      },
      files: [
        /** Site details
         *  ----------------------------------------------------------------------------------------
         *  Global info about the site, logo, copyright notice etc.
        **/
        {
          label: 'Site Details',
          name: 'site_details',
          delete: false,
          file: 'src/_data/site.json',
          fields: [
            ...siteDetailsConfig,
          ], // fields
        }, // END SOCIAL


        /** Meta Data, SEO, Social defaults
         *  ----------------------------------------------------------------------------------------
         *  some of these are required. All can be overwritten by individual templates
        **/
        {
          label: 'Site meta, SEO, Social sharing defaults',
          name: 'meta',
          delete: false,
          file: 'src/_data/meta.json',
          fields: [
            ...metaConfigGlobal,
          ],
        },


        /** Social Accounts
         *  ----------------------------------------------------------------------------------------
         *  For using wherever we end up using them
        **/
        {
          label: 'Social Media',
          name: 'social_media',
          delete: false,
          file: 'src/_data/social.json',
          fields: [
            ...socialAccountsConfig,
          ], // fields
        }, // END SOCIAL


        /** Recurring Footer Content
         *  ----------------------------------------------------------------------------------------
         *  For using wherever we end up using them
        **/
        {
          label: 'Footer partnerships and CTA banner',
          name: 'footerRecurring',
          delete: false,
          file: 'src/_data/footerRecurring.json',
          fields: [
            ...footerRecurringConfig,
          ], // fields
        }, // END  RECURRING FOOTER CONTENT


        /** Primary Nav
         *  ----------------------------------------------------------------------------------------
         *  add content links to the header and footer nav.
        **/
        {
          label: 'Primary Navigation',
          name: 'nav',
          delete: false,
          file: 'src/_data/navigation.json',
          fields: [
            {
              label: 'Links for the primary navigation',
              name: 'navInstructions',
              widget: 'instructions',
              instructions: 'Add links for site navigation.',
              flavour: 'header',
              required: false,
            },
            {
              label: 'Items',
              name: 'items',
              widget: 'list',
              fields: [
                {
                  label: 'Text',
                  name: 'text',
                  widget: 'string',
                },
                {
                  label: 'Url',
                  name: 'url',
                  widget: 'string',
                },
                {
                  label: 'Is url to external site?',
                  name: 'external',
                  widget: 'boolean',
                  required: false,
                },
              ], // fields
            },
            {
              label: 'CTA in the primary navigation',
              name: 'navCtaInstructions',
              widget: 'instructions',
              instructions: 'The primary nav in the site header can optionally include a CTA link.',
              flavour: 'vanilla',
              required: false,
            },
            {
              label: 'CTA Text',
              name: 'ctaText',
              widget: 'string',
              required: false,
            },
            {
              label: 'CTA Url',
              name: 'ctaUrl',
              widget: 'string',
              required: false,
            },
          ], // fields
        }, // END PRIMARY NAV


        /** Header Nav
         *  ----------------------------------------------------------------------------------------
         *  add content links to the header.
        **/
        {
          label: 'Footer Sub Navigation',
          name: 'footer_nav',
          delete: false,
          file: 'src/_data/subnavigation.json',
          fields: [
            {
              label: 'Links for the sub navigation',
              name: 'navInstructions',
              widget: 'instructions',
              instructions: 'This nav block appears right at the bottom of the site, under the copyright notice. It is intended for links to privacy policies, t&c\'s etc.',
              flavour: 'header',
              required: false,
            },
            {
              label: 'Items',
              name: 'items',
              widget: 'list',
              fields: [
                {
                  label: 'Text',
                  name: 'text',
                  widget: 'string',
                },
                {
                  label: 'Url',
                  name: 'url',
                  widget: 'string',
                },
                {
                  label: 'Is url to external site?',
                  name: 'external',
                  widget: 'boolean',
                  required: false,
                },
              ], // fields
            },
          ], // fields
        }, // END HEADER NAV
      ], // files
    }, // END GLOBAL SETTINGS
  ], // collections
};

export default config;
