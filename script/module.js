// AFRAME.registerComponent('artoolkit', {
//     init: function () {
//       var sceneEl = document.querySelector('a-scene').querySelector('a-assets')

//       // console.log("Scène :", sceneEl)

//       var video = sceneEl.querySelector('video')
//       var canvas = document.getElementsByClassName('a-canvas')

//       canvas[0].addEventListener('click', function () {
        
//         console.log(video)
//         console.log(video.id)
//         console.log("Click --- ")
//         if (video.paused == true) {
//           video.play();
//         } else {
//           video.pause()
//         }
//       }, false)
//     }
//   })

/*
function isPlayingVideo(video) {
  console.log("Click---------------")
  if (video.paused == true)
    video.play()
  else
    video.pause()
}
*/











function playVideo(video){
  if(video){
    if(video.paused){
      video.play()
    }
 }
}

function pauseVideo(video){
  if(video){
    if(!video.paused){
      video.pause()
    }
  }
}

AFRAME.registerComponent('artoolkit',{
init: function() {
  this.markers = document.querySelectorAll("a-marker.videoMarker")
  this.videos = document.querySelectorAll("video")
  console.log(this.markers)
  this.markersVisible = []
  this.markersVisible.fill(false, 0, this.markers.length)
  
  // this.tick = AFRAME.utilis.throttleTick(this.tick, 500, this)
  


},
tick: function() {
  
  if (!this.markers) return
  var i = 0
  this.markers.forEach(marker => {
    if (marker.object3D.visible) {
      if (!this.markersVisible[i]) {
          console.log("visible "+ i)
          this.markersVisible[i] = true
          playVideo(this.videos[i])
      }
    } else {
      if (this.markersVisible[i]) {
          // lost sight of the marker
          console.log("invisible "+ i)
          this.markersVisible[i] = false
          pauseVideo(this.videos[i])
      }
    }
    i++;
  });
}
})

// AFRAME.registerComponent('markerclick', {

//   init: function() {
//       const animatedMarker = document.querySelector("#animated-marker");
//       console.log("-------", animatedMarker)
//       animatedMarker.addEventListener('click', function(ev){
//           if (animatedMarker.object3D.visible == true && ev.detail.cursorEl) {
//               const entity = document.querySelector('#animated-model');
//               const scale = entity.getAttribute('scale');
//               Object.keys(scale).forEach((key) => scale[key] = scale[key] + 1);
              
//               // every click, we make our model grow in size
//               entity.setAttribute('scale', scale);
//           }
//       });
// }});
















