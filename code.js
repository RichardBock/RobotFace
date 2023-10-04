var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var x = randomNumber(100,250);
var y = randomNumber(100,250);
var z = randomNumber(70,135);
var w = randomNumber(85,300);
var v = randomNumber(85,160);
var a = randomNumber(85,300);
var b = randomNumber(85,160);
fill(rgb(randomNumber(0,255),randomNumber(0,255),randomNumber(0,255)));
rect(63, 63, 275, 275);
fill(rgb(randomNumber(0,255),randomNumber(0,255),randomNumber(0,255)));
rect(337.5, x, 25, 35);
regularPolygon(362.5, x+17.5, 8, 10);
rect(38, y, 25, 35);
regularPolygon(40, y+17.5, 8, 10);
fill(rgb(randomNumber(0,255),randomNumber(0,255),randomNumber(0,255)));
strokeWeight(1);
ellipse(a, b, 50, 50);
ellipse(w, v, 50, 50);
strokeWeight(10);
point(a, b);
point(w, v);
strokeWeight(1);
fill(rgb(randomNumber(0,255),randomNumber(0,255),randomNumber(0,255)));
rect(z, 255, 200, 50);
strokeWeight(0);
fill(rgb(randomNumber(0,255),randomNumber(0,255),randomNumber(0,255)));
rgb(255, 255, 255);
rect(z, 280, 200, 7.5);
regularPolygon(randomNumber(100,300), 45, 3, 40);
regularPolygon(randomNumber(100,300), 45, 3, 40);
regularPolygon(randomNumber(100,300), 45, 3, 40);
fill(rgb(randomNumber(0,255),randomNumber(0,255),randomNumber(0,255)));
regularPolygon(200, 215, 5, 30);
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
