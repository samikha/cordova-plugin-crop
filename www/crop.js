/* global cordova */
var crop = module.exports = function cropImage (success, fail, image, options) {
  options = options || {}
  options.quality = options.quality || 100
  return cordova.exec(success, fail, 'CropPlugin', 'cropImage', [image, options])
}


var crop_fixed_ratio_800x600 = module.exports = function cropImageFixedRatio800x600 (success, fail, image, options) {
  options = options || {}
  options.quality = options.quality || 100
  return cordova.exec(success, fail, 'CropPlugin', 'cropImageFixedRatio800x600', [image, options])
}

module.exports.promise = function cropAsync (image, options) {
  return new Promise(function (resolve, reject) {
    crop(resolve, reject, image, options)
  })
}
