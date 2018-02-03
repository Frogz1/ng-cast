angular.module('video-player')
  .service('youTube', function($http) {
    this.search = function(options, callback) {
      console.log(options);

      return $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: options,
      }).then( (data) => {
        callback(data); 
      });      
    };
  // TODO
  });
//////////////////////////