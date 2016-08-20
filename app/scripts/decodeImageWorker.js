importScripts("jsqrcode/grid.js",
              "jsqrcode/version.js",
              "jsqrcode/detector.js",
              "jsqrcode/formatinf.js",
              "jsqrcode/errorlevel.js",
              "jsqrcode/bitmat.js",
              "jsqrcode/datablock.js",
              "jsqrcode/bmparser.js",
              "jsqrcode/datamask.js",
              "jsqrcode/rsdecoder.js",
              "jsqrcode/gf256poly.js",
              "jsqrcode/gf256.js",
              "jsqrcode/decoder.js",
              "jsqrcode/qrcode.js",
              "jsqrcode/findpat.js",
              "jsqrcode/alignpat.js",
              "jsqrcode/databr.js");


this.onmessage = function(e) {
  var imageData = e.data;
  var result;

  try {
    result = qrcode.decode(imageData.width, imageData.height, imageData);
    postMessage(result);
  } catch(e) {
    console.log(e);
    postMessage();
  };
};
