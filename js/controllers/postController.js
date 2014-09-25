app.controller('PostCtrl', [
  '$scope',
  '$stateParams',
  'postService',
  function($scope, $stateParams, postService){
    $scope.post = postService.posts[$stateParams.id];
  }
]);