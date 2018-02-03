angular.module('video-player')
  .service('youTube', function($http) {
    this.search = function(options, callback) {

      console.log('button in: search')
      return $http({
        method: 'GET',
        url: 'src/data/exampleVideoData.js'
      });
      
    };
  // TODO
  });
//////////////////////////