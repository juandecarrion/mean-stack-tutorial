app.controller('PostCtrl', [
           '$scope', 'postService',
  function ($scope,   postService) {

    $scope.test = 'Hellow world!';

    $scope.posts = postService.posts;

    $scope.addPost = function () {
      if(!$scope.title) {
        return;
      }
      $scope.posts.push({
        title: $scope.title,
        link: $scope.link,
        upvotes: 0
      });
      $scope.title = '';
      $scope.link = '';
    };

    $scope.incrementUpvotes = function(post) {
      post.upvotes += 1;
    };

  }
]);