angular.module('video-player')

  .component('videoPlayer', {
  // TODO
    bindings: {
      videos: '<'
    },
    templateUrl: 'src/templates/videoPlayer.html',
    // controller: function(youTube) {
    //   this.videos = window.exampleVideoData;
    //   console.log(this.videos);
    // }
  
  });
