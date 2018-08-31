
function playVideo(video){
  if(video){
    if(video.paused){
      video.play()
      video.muted = false
      //video.setAttribute('muted', true)
    }
  }
}

function pauseVideo(video){
  if(video){
    if(!video.paused){
      video.pause()
      
      video.muted = true
      //video.setAttribute('muted', false)
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
  
  this.tick = AFRAME.utils.throttleTick(this.tick, 250, this)

},

tick: function(t, dt) {
  
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
