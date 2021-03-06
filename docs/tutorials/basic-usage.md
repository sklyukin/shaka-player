# Basic Usage

Basic usage of Shaka Player is very easy:

1. Start with {@tutorial welcome} and compile the library.
2. Create a simple HTML page with a video element.
3. In your application's JavaScript:
  1. Install polyfills.
  2. Check for browser support.
  3. Create a Player object to wrap the video element.
  4. Listen for errors.
  5. Load a manifest.

*NOTE: For simplicity, we will use `alert()` for errors in this tutorial.
In a real application, you would want a more appropriate mechanism to display
errors to your users.*


```html
<!DOCTYPE html>
<html>
  <head>
    <!-- Shaka Player compiled library: -->
    <script src="dist/shaka-player.compiled.js"></script>
    <!-- Your application source: -->
    <script src="myapp.js"></script>
  </head>
  <body>
    <video id="video"
           width="640"
           poster="//shaka-player-demo.appspot.com/assets/poster.jpg"
           controls autoplay></video>
  </body>
</html>
```

```js
// myapp.js

var manifestUri = '//storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd';

function initApp() {
  // Install built-in polyfills to patch browser incompatibilities.
  shaka.polyfill.installAll();

  // Check to see if the browser supports the basic APIs Shaka needs.
  shaka.Player.support().then(function(support) {
    if (support.supported) {
      // Everything looks good!
      initPlayer();
    } else {
      // This browser does not have the minimum set of APIs we need.
      alert('Browser not supported!');
    }
  });
}

function initPlayer() {
  // Create a Player instance.
  var video = document.getElementById('video');
  var player = new shaka.Player(video);

  // Attach player to the window to make it easy to access in the JS console.
  window.player = player;

  // Listen for error events.
  player.addEventListener('error', onErrorEvent);

  // Try to load a manifest.
  player.load(manifestUri).then(function() {
    // The video has now been loaded!
  }).catch(onError);
}

function onErrorEvent(event) {
  // Extract the shaka.util.Error object from the event.
  onError(event.detail);
}

function onError(error) {
  // Log the error.
  console.error(error);
  alert('Error code ' + error.code);
}

document.addEventListener('DOMContentLoaded', initApp);
```

That's it!


#### Continue the Tutorials

Next, check out {@tutorial debugging}.
