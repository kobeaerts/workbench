# workbench
A basic frontend boilerplate with some opinionated gulp magic

## whats in the css
* [Sanitize.css](https://10up.github.io/sanitize.css/) as a css reset
* Responsive typography with rem units
* Some colors en margin mixins
* Basic styles for buttons, forms, lists, paragraphs and tags

## whats in the javascript
* [Element Queries](https://github.com/marcj/css-element-queries) for responsive elements
* [Flickity](http://flickity.metafizzy.co/) for image carousels
* [Packery](http://packery.metafizzy.co/) for image grids
* A select replacement with [Tether.js](http://tether.io/)
* A simple page loading animation

## what does the magic gulpfile do
* Compile your sass to a minified css file with sourcemaps
* Extends your css with [Rucksack](http://simplaio.github.io/rucksack/) superpowers
* Autoprefix it (it's 2015 cmon..)
* Base64 small images inline in your css (max 8kb)
* Optimize other images
* Concat and minify javascript files
* Livereload on filechanges

## getting started
Just copy the **assets** and **dist** folders and the **gulpfile.js** and **package.json** files to your project run npm install to install all the dependencies and done.

Compile your sass with the `gulp watch` command.
Run `gulp compile-js`to minify the javascript and `gulp optimize-images` to compress your images


