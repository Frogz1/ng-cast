angular.module('video-player')

  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: function(youTube) {
      this.videos = exampleVideoData;
      this.selectVideo = (video) => {
        console.log(video);
        this.currentVideo = video;
      };
      this.searchResults = () => {
        youTube.search({}, ()=>{});
      };
      this.result = () => {
        console.log('hi');
        
      };
      


      youTube.search({}, function() {
        return 'hi';
      });
      this.currentVideo = exampleVideoData[0];
      
    }

  
  }
  );
