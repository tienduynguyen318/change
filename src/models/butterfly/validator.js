'use strict';

const v = require('@mapbox/fusspot');

function validateArticleLink(value) {
  const url = new URL(value);
  const isValidURL = (url.protocol === 'http:' || url.protocol === 'https:');
  if (typeof value !== 'string' || !isValidURL) {
    return ({ path }) =>
      `The input value '${value}' at ${path.join('.')} is not a valid article link.`;
  }
}

const butterflyModelValidator = v.assert(
  v.strictShape({
    commonName: v.required(v.string),
    species: v.required(v.string),
    article: v.required(validateArticleLink)
  })
);

module.exports = butterflyModelValidator;
