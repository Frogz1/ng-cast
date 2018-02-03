angular.module('video-player')
  .component('search', {
  // TODO
    bindings: {
      searchResults: '<',
      dataService: '<'
    },
    templateUrl: 'src/templates/search.html'
  
  });
