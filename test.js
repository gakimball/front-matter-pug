/* eslint-env mocha */

'use strict';

const expect = require('chai').expect;
const fm = require('.');

const input = `//-
  kittens: true
  puppies: true
  lizards: false
  ---

!doctype
html
  body
`;

const input2 = `---
kittens: true
---

!doctype
html
  body
`;

describe('fm()', () => {
  let output;

  before(() => {
    output = fm(input);
  });

  it('parses Front Matter', () => {
    expect(output).to.have.property('attributes').that.eql({
      kittens: true,
      puppies: true,
      lizards: false
    });
  });

  it('removes Front Matter from Pug', () => {
    expect(output).to.have.property('body').that.not.contain('<!--');
  });

  it('works if Front Matter is not in a comment', () => {
    expect(fm(input2)).to.have.property('attributes').that.eql({
      kittens: true
    });
  });
});

describe('test()', () => {
  it('returns true if string contains Front Matter', () => {
    expect(fm.test(input)).to.equal(true);
  });

  it('returns false if string does not contain Front Matter', () => {
    expect(fm.test('nope!')).to.equal(false);
  });
});
