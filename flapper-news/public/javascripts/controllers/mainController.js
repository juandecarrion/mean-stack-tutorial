app.controller('MainCtrl', [
           '$scope', 'postService',
  function ($scope,   postService) {

    $scope.test = 'Hellow world!';

    $scope.posts = postService.posts;

    $scope.addPost = function () {
      if(!$scope.title) {
        return;
      }
      postService.create({
        title: $scope.title,
        link: $scope.link
      });
      $scope.title = '';
      $scope.link = '';
    };

    $scope.incrementUpvotes = function(post) {
      postService.upvote(post);
    };

  }
]);