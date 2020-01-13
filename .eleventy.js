
const htmlMinTransform = require('./src/transforms/html-min.js');
const htmlPrettyTransform = require('./src/transforms/html-pretty.js');
const markdownFilter = require('./src/filters/markdown.js');

module.exports = (eleventyConfig) => {
  // copy these things to dist even though they are not templates!
  eleventyConfig.addPassthroughCopy('src/images');
  eleventyConfig.addPassthroughCopy('src/fonts');

  // for use in our previews.
  // uses the same version as eleventy. Maybe a bit fragile...
  // method from: https://github.com/hankchizljaw/hylia
  eleventyConfig.addPassthroughCopy('node_modules/nunjucks/browser/nunjucks-slim.js');

  // transforms modify a template’s output
  // https://www.11ty.dev/docs/config/#transforms
  // choose whether to minify html output or make it pretty
  // Minify
//eleventyConfig.addTransform('htmlmin', htmlMinTransform);
  // or
  // Prettify
  eleventyConfig.addTransform('htmlpretty', htmlPrettyTransform);


  /** Filters
   *  ----------------------------------------------------------------------------------------------
   *  ref: https://www.11ty.dev/docs/filters/
  **/
  // adding a markdown filter to transform markdown in templates:
  eleventyConfig.addFilter('markdownify', markdownFilter);


  // enable deep merging of data
  // allows overriding individual properties of an object
  // for example overwrite meta.title but keep the default meta.image
  // opt out with override: i.e. override:meta{title:'example'} would not get default meta.image
  // ref: https://www.11ty.dev/docs/data-deep-merge/
  eleventyConfig.setDataDeepMerge(true);

  /** Keyed collections
   *  ----------------------------------------------------------------------------------------------
   *  outputting some 'keyed' collections to make using the relations widgets easier
   *  because netlify CMS doesn't store the slug as a value for the relationship widget we have
   *  to use the title for these collections...
   *  -
   *  We don't need a lot of what 11ty includes in collections so we just pass data and the url/slug
   *  -
   *  we can use these like {{ collections.keyedMaterials['Material Title'].data.title }}
  **/
  eleventyConfig.addCollection('keyedMaterials', function(collection) {
    // get all materials and output an object keyed by title
    return collection.getFilteredByTag('material').reduce(
      (accumulator, current) => {
        return {
          ...accumulator,
          [current.data.title]: {
            data: current.data,
            url: current.url,
            fileSlug: current.fileSlug,
          },
        };
      },
      {},
    );
  });

  eleventyConfig.addCollection('keyedStyles', function(collection) {
    return collection.getFilteredByTag('style').reduce(
      (accumulator, current) => {
        return {
          ...accumulator,
          [current.data.title]: {
            data: current.data,
            url: current.url,
            fileSlug: current.fileSlug,
          },
        };
      },
      {},
    );
  });

  eleventyConfig.addCollection('keyedKitchens', function(collection) {
    return collection.getFilteredByTag('kitchen').reduce(
      (accumulator, current) => {
        return {
          ...accumulator,
          [current.data.title]: {
            data: current.data,
            url: current.url,
            fileSlug: current.fileSlug,
          },
        };
      },
      {},
    );
  });


  /** Similar Kitchens
   *  ----------------------------------------------------------------------------------------------
   *  For every kitchen we find other kitchens that match materials and styles and put them in
   *  an array. The object we return is keyed to the kitchen's fileSlug so you can retrieve like:
   *  {{ collections.similarKitchens[page.fileSlug] }}
   *  -
   *  shape is:
   *  {
   *    joe-and-zelle: [
   *      {
   *        title: 'Mark and Norman',
   *        matches: 8,
   *        materialMatches: [ 'Titles of Matching Things', ... ],
   *        styleMatches: [ 'Titles of Matching Things', ... ],
   *      }...
   *    ]
   *  }
   *  -
   *  currently for every kitchen we loop every other kitchen and count matches for styles
   *  and materials. There's probably a more performant way to handle this?
  **/
  eleventyConfig.addCollection('similarKitchens', function(collection) {
    // get all kitchens and then find their friends and output an object keyed by fileSlug
    // we list the friends by title
    // so that we can retrieve their data from collections.keyedKitchens
    return collection.getFilteredByTag('kitchen').map(
      // for every kitchen we return an object with their slug and array of friends
      (kitchen) => {
        return {
          fileSlug: kitchen.fileSlug,
          // we don't need to compare against ourself!
          friends: collection.getFilteredByTag('kitchen').filter(
            (notThisOne) => notThisOne.fileSlug !== kitchen.fileSlug,
          // we calculate matches by mapping the kitchen array again and comparing
          ).map(
            (kitchenToCompare) => {
              // we filter materials and styles to matches
              const materialMatches = kitchen.data.materials.filter(
                (material) => kitchenToCompare.data.materials.includes(material),
              );
              const styleMatches = kitchen.data.styles.filter(
                (style) => kitchenToCompare.data.styles.includes(style),
              );
              // return the count of matches and the kitchen title so we can fetch it's data!
              return {
                matches: materialMatches.length + styleMatches.length,
                title: kitchenToCompare.data.title,
                materialMatches,
                styleMatches,
              };
            }
          // sort so that bigger number of matches is first!
          ).sort(
            (a, b) => (a.matches > b.matches) ? -1 : 1
          ),
        };
      }
    // finally we reduce to an object of arrays keyed by fileslug
    ).reduce(
      (accumulator, current) => {
        return {
          ...accumulator,
          [current.fileSlug]: current.friends,
        };
      },
      {},
    );
  });

  /** KitchensUsing...
   *  ----------------------------------------------------------------------------------------------
   *  collections keyed by fileSlug for each style and material
   *  to retrieve kitchens that mention them!
   *  -
   *  collections return an array of kitchen titles
  **/
  eleventyConfig.addCollection('kitchensUsingMaterial', function(collection) {
    return collection.getFilteredByTag('material').map(
      // for every material we return an object with their slug and array of kitchens that use it
      (material) => {
        return {
          fileSlug: material.fileSlug,
          kitchens: collection.getFilteredByTag('kitchen').filter(
            (kitchen) =>( kitchen.data.materials || []).includes(material.data.title),
          ).map(
            (kitchen) => ({ title: kitchen.data.title, })
          ),
        };
      }
    // finally we reduce to an object of arrays keyed by fileslug
    ).reduce(
      (accumulator, current) => {
        return {
          ...accumulator,
          [current.fileSlug]: current.kitchens,
        };
      },
      {},
    );
  });

  eleventyConfig.addCollection('kitchensUsingStyle', function(collection) {
    return collection.getFilteredByTag('style').map(
      // for every style we return an object with their slug and array of kitchens that use it
      (style) => {
        return {
          fileSlug: style.fileSlug,
          kitchens: collection.getFilteredByTag('kitchen').filter(
            (kitchen) => (kitchen.data.styles || []).includes(style.data.title),
          ).map(
            (kitchen) => ({ title: kitchen.data.title, })
          ),
        };
      }
    // finally we reduce to an object of arrays keyed by fileslug
    ).reduce(
      (accumulator, current) => {
        return {
          ...accumulator,
          [current.fileSlug]: current.kitchens,
        };
      },
      {},
    );
  });



  return {
    dir: {
      input: 'src',
      output: 'dist',
      data: '_data',
    },
    passthroughFileCopy: true,
    templateFormats: [
      '11ty.js',
      'njk',
      'md',
    ],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
  }
}
