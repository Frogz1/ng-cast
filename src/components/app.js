angular.module('video-player')

  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: function($window) {
      this.videos = $window.exampleVideoData;
      
    }
  
  }
  );
