var bg = require("./");

beforeEach(function(){
  document.body.innerHTML = '<div class="container" style="width: 200px; height: 200px; background: green;"><input /> hello world</div>';
});


it('sets cover background picture for given element', function(){
  bg('.container', 'http://distilleryimage5.ak.instagram.com/45108d766a7011e382cb125b750d1ba9_8.jpg');
  var el = document.querySelector('.container');
  expect(el.style.background).to.be.equal('url(http://distilleryimage5.ak.instagram.com/45108d766a7011e382cb125b750d1ba9_8.jpg) 50% 50% no-repeat rgb(17, 17, 17)');
  expect(el.style.backgroundSize).to.be.equal('cover');
});
