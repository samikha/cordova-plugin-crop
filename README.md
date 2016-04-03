# cordova-plugin-crop

> Crop an image in a Cordova app

-Made the color in Android programmable
-For iOS, added this:
https://github.com/kishikawakatsumi/PEPhotoCropEditor/pull/52
And:
https://github.com/kishikawakatsumi/PEPhotoCropEditor/issues/51#issuecomment-72164401


## Install

```
$ cordova plugin add --save cordova-plugin-crop
```


## Usage

```js
plugins.crop(function success () {

}, function fail () {

}, '/path/to/image', options)
```

or, if you are running on an environment that supports Promises
(Crosswalk, Android >= KitKat, iOS >= 8)

```js
plugins.crop.promise('/path/to/image', options)
.then(function success (newPath) {

})
.catch(function fail (err) {

})
```

## API

 * quality: Number

The resulting JPEG quality. default: 100

### Libraries used

 * iOS: [PEPhotoCropEditor](https://github.com/kishikawakatsumi/PEPhotoCropEditor)
 * Android: [android-crop](https://github.com/jdamcd/android-crop)

## License

MIT © [Jeduan Cornejo](https://github.com/jeduan)
