angular.module('video-player')

  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: function() {
      this.videos = exampleVideoData;
      this.selectVideo = (video) => {
        console.log(video);
        this.currentVideo = video;
      };
      this.searchResults = () => {
        
      };
      this.result = () => {
        
      };
      this.currentVideo = exampleVideoData[0];
      
    }
  
  }
  );
