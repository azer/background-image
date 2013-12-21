## background-image

Set background image for given element

## Install

```bash
$ npm install background-image
```

## Usage

Call it with a DOM element or a selector, and a image url:

```js
backgroundImage = require('background-image')

backgroundImage('.container', 'http://foo.com/foo.jpg')
```

It'll show the image as a cover background. You can pass following options as third parameter to customize:

```js
{
  repeat: 'no-repeat',
  position: 'center center',
  size: 'cover'
}
```
