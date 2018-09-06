
function playVideo(video) {
  if(video){
    if(video.paused){
      video.play()
      //video.muted = false
    }
  }
}

function pauseVideo(video) {
  if(video){
    if(!video.paused){
      video.pause()
      video.muted = true
    }
  }
}

function playSong(song) {
  if(song) {
    song.components.sound.playSound()
  }
}

function pauseSong(song) {
  if(song) {
    song.components.sound.pauseSound()
  }
}


AFRAME.registerComponent('artoolkit',{
init: function() {
  this.markersVideo = document.querySelectorAll("a-marker.videoMarker")
  this.videos = document.querySelectorAll("video")

  // entity = document.querySelector("a-entity#song")
  // entity.components.sound.playSound()

  this.markersSong = document.querySelectorAll("a-marker.songMarker")
  this.songs = document.querySelectorAll("a-entity.song")

  this.markersVideoVisible = []
  this.markersVideoVisible.fill(false, 0, this.markersVideo.length)

  this.markersSongVisible = []
  this.markersSongVisible.fill(false, 0, this.markersSong.length)
  
  this.tick = AFRAME.utils.throttleTick(this.tick, 500, this)

},

tick: function(t, dt) {
  
  if (!this.markersVideo) return
  var i = 0
  this.markersVideo.forEach(marker => {
    if (marker.object3D.visible) {
      if (!this.markersVideoVisible[i]) {
          this.markersVideoVisible[i] = true
          playVideo(this.videos[i])
      }
    } else {
      if (this.markersVideoVisible[i]) {
          this.markersVideoVisible[i] = false
          pauseVideo(this.videos[i])
      }
    }
    i++
  })
  
  if(!this.markersSong) return
  var i = 0
  this.markersSong.forEach(marker => {
    if (marker.object3D.visible) {
      if (!this.markersSongVisible[i]) {
          this.markersSongVisible[i] = true
          playSong(this.songs[i])
      }
    } else {
      if (this.markersSongVisible[i]) {
          this.markersSongVisible[i] = false
          pauseSong(this.songs[i])
      }
    }
    i++
  })
  

}
})

/*
var entity = document.querySelector('[sound]');
entity.components.sound.stopSound();
*/
