'use strict';

const fm = require('front-matter');
const strip = require('strip-indent');

/**
 * Strip the Pug comments from a Front Matter block, so the front-matter library can properly parse it.
 * @param {String} pug - Input Pug.
 * @returns {String} Modified Pug.
 */
const parse = pug => {
  // RegExp to find Pug comment at the start of a string
  const rx = /^\/\/-\n([\s\S]+:[\s\S]+-{3})/;
  const match = rx.exec(pug);

  if (match) {
    // Remove the Pug comment delimiters, so front-matter can parse it
    return pug.replace(match[0], `---\n${strip(match[1])}`);
  }

  return pug;
};

/**
 * Parse YAML Front Matter from a comment at the top of a Pug document.
 * @param {String} pug - Input Pug.
 * @returns {Object} Output from front-matter library.
 */
module.exports = pug => fm(parse(pug));

/**
 * Test if a Pug document contains a Front Matter block within `//-`.
 * @param {String} pug - Input Pug.
 * @returns {Boolean}
 */
module.exports.test = pug => fm.test(parse(pug));
