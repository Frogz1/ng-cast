angular.module('video-player')
  .component('search', {
  // TODO
    bindings: {
      result: '<',
      dataService: '<'
    },
    templateUrl: 'src/templates/search.html'
  
  });
