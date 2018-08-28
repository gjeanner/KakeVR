AFRAME.registerComponent('artoolkit', {
    init: function () {
      var sceneEl = document.querySelector('a-scene').querySelector('a-assets')

      // console.log("Scène :", sceneEl)

      var video = sceneEl.querySelector('video')
      var canvas = document.getElementsByClassName('a-canvas')

      canvas[0].addEventListener('click', function () {
        
        console.log(video)
        console.log(video.id)
        console.log("Click --- ")
        if (video.paused == true) {
          video.play();
        } else {
          video.pause()
        }
      }, false)
    }
  })

/*
function isPlayingVideo(video) {
  console.log("Click---------------")
  if (video.paused == true)
    video.play()
  else
    video.pause()
}
*/
