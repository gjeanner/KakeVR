AFRAME.registerComponent('artoolkit', {
    init: function () {
      var sceneEl = document.querySelector('a-scene').querySelector('a-assets');
      var video = sceneEl.querySelector('video');
      var canvas = document.getElementsByClassName('a-canvas');
      canvas[0].addEventListener('click', function () {
        console.log("Click---------------")
        if (video.paused == true) {
          video.play();
        } else {
          video.pause();
        }
      }, false);
    }
  });