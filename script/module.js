
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
    if(!video.on){
      video.pause()
      
      video.muted = true
      //video.setAttribute('muted', false)
    }
  }
}


AFRAME.registerComponent('artoolkit',{
init: function() {
  this.markersVideo = document.querySelectorAll("a-marker.videoMarker")
  this.videos = document.querySelectorAll("video")

  this.markerSong = document.querySelectorAll("a-marker.songMarker")
  this.songs = document.querySelectorAll("audio")

  console.log(this.markersVideo)

  this.markersVideoVisible = []
  this.markersVideoVisible.fill(false, 0, this.markersVideo.length)

  this.markersSongVisible = []
  this.markersSongVisible.fill(false, 0, this.markerSong.length)
  
  this.tick = AFRAME.utils.throttleTick(this.tick, 250, this)

},

tick: function(t, dt) {
  
  if (!this.markersVideo) return
  var i = 0
  this.markersVideo.forEach(marker => {
    if (marker.object3D.visible) {
      if (!this.markersVideoVisible[i]) {
          console.log("visible "+ i)
          this.markersVideoVisible[i] = true
          playVideo(this.videos[i])
      }
    } else {
      if (this.markersVideoVisible[i]) {
          // lost sight of the marker
          console.log("invisible "+ i)
          this.markersVideoVisible[i] = false
          pauseVideo(this.videos[i])
      }
    }
    i++
  })
  /*

  if(!this.markerSong) return
  var j = 0
  this.markerSong.forEach(marker => {
    if(marker.object3D.visible) {
      if(!this.markersSongVisible[j]) {
        console.log("visible "+ j)
        this.markersSongVisible[j] = true
        this.songs[j].components.sound.playSound()
      }
    } else {
      if(this.markersSongVisible[j]) {
        console.log("invisible "+ j)
        this.markersSongVisible[j] = false
        this.songs[j].components.sound.pauseSound()
      }
    }
    j++
  })
  */
}
})

/*
var entity = document.querySelector('[sound]');
entity.components.sound.stopSound();
*/
