angular.module('video-player')

  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: function(youTube, $window) {
      
      this.selectVideo = (video) => {
        console.log(video);
        this.currentVideo = video;
      };
      
      this.searchResults = (q) => {
        var options = {
          part: 'snippet',
          order: 'relevance',
          maxResults: 5,
          q: q,
          key: 'AIzaSyCF7v8ZE-evOUu4u6wZJtq66waWEIzIkb0',      
          embeddable: true      
        };    
        return youTube.search(options, (data)=>{
          this.videos = data.data.items;
          this.currentVideo = this.videos[0];
          return data.data.items;
        });
      };
      
      this.result = (q) => {
        
        console.log(q);
      };
      
      this.videos = this.searchResults();
      this.currentVideo = exampleVideoData[0];
      
    }

  
  }
  );
