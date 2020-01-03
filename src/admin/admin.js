/** We have to set this global flag to allow manual init
 *  ------------------------------------------------------------------------------------------------
**/
import './manualCommitGlobal';


/** netlify cms itself.
 *  ------------------------------------------------------------------------------------------------
 *  We are using manual init: https://www.netlifycms.org/docs/beta-features/#manual-initialization
 *  this means we can pass our config as a js object which is nice because we can break it down.
**/
import CMS, { init } from 'netlify-cms';


/** our custom widgets
 *  ------------------------------------------------------------------------------------------------
 *  we should move these into their own repo.
**/
import ExtraImageControl from './widgets/ExtraImageControl';
import ColourControl from './widgets/ColourControl';
import ExtraImagePreview from './widgets/ExtraImagePreview';
import InstructionsControl from './widgets/InstructionsControl';
import RelationWrappedControl from './widgets/RelationWrappedControl';

// and custom previews
import PagePreview from './previews/PagePreview';
import BespokePreview from './previews/BespokePreview';
import BrochurePreview from './previews/BrochurePreview';
import ContactPreview from './previews/ContactPreview';
import HomePreview from './previews/HomePreview';
import KitchenPreview from './previews/KitchenPreview';
import MaterialPreview from './previews/MaterialPreview';
import StylePreview from './previews/StylePreview';
import StyleLandingPreview from './previews/StyleLandingPreview';


/** our cms configuration as a JS object
 *  ------------------------------------------------------------------------------------------------
**/
import config from './config/config';


/** register our custom widget
 *  ------------------------------------------------------------------------------------------------
**/
CMS.registerWidget('extraImage', ExtraImageControl, ExtraImagePreview);
CMS.registerWidget('relationWrapped', RelationWrappedControl);
CMS.registerWidget('colour', ColourControl);
CMS.registerWidget('instructions', InstructionsControl);


/** register preview bits
 *  ------------------------------------------------------------------------------------------------
**/
CMS.registerPreviewTemplate('generic_page', PagePreview);
CMS.registerPreviewTemplate('bespoke', BespokePreview);
CMS.registerPreviewTemplate('brochure', BrochurePreview);
CMS.registerPreviewTemplate('contact', ContactPreview);
CMS.registerPreviewTemplate('index', HomePreview);
CMS.registerPreviewTemplate('kitchen', KitchenPreview);
CMS.registerPreviewTemplate('material', MaterialPreview);
CMS.registerPreviewTemplate('kitchenStyle', StylePreview);
CMS.registerPreviewTemplate('styleLanding', StyleLandingPreview);

// console.log(CMS);

/** start the cms
 *  ------------------------------------------------------------------------------------------------
**/
init({ config });
