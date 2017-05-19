# front-matter-pug

> Parse Front Matter from a Pug comment

[![Travis](https://img.shields.io/travis/gakimball/front-matter-pug.svg?maxAge=2592000)](https://travis-ci.org/gakimball/front-matter-pug) [![npm](https://img.shields.io/npm/v/front-matter-pug.svg?maxAge=2592000)](https://www.npmjs.com/package/front-matter-pug)

## Installation

```bash
npm install front-matter-pug
```

## Usage

```js
const fm = require('front-matter-pug');

const pug = `//-
  kittens: true
  puppies: true
  lizards: false
  ---

!doctype
html
  body
`;

const content = fm(pug);
```

## API

### fm(pug)

Parse YAML Front Matter from a comment at the top of a Pug/Jade document.

- **pug** (String): input Pug code.

Returns an object with these properties:

- **attributes** (Object): extracted YAML.
- **body** (String): Pug code without Front Matter comment.
- **frontmatter** (String): original YAML string.

### fm.test(pug)

Test if a Pug/Jade document contains a Front Matter block within a block comment (`//-`).

Returns `true` or `false`.

## Local Development

```bash
git clone https://github.com/gakimball/front-matter-pug
cd front-matter-pug
npm install
npm test
```

## License

MIT &copy; [Geoff Kimball](http://geoffkimball.com)
