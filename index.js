var format = require("new-format");
var select = require("select-dom");
var template = require("./template");

module.exports = bg;

function bg (parent, imageUrl, options) {
  if (typeof parent == 'string') parent = select(parent);

  parent.style.background = format(template, {
    color: options && options.color || '#111',
    url: imageUrl,
    repeat: options && options.repeat || 'no-repeat',
    position: options && options.position || 'center center'
  });

  parent.style.backgroundSize = options && options.size || 'cover';
}
