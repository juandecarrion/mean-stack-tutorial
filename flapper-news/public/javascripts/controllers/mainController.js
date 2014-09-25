app.controller('MainCtrl', [
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
        upvotes: 0,
        comments: [
          {author: 'Joe', body: 'Cool post!', upvotes: 0},
          {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
        ]
      });
      $scope.title = '';
      $scope.link = '';
    };

    $scope.incrementUpvotes = function(post) {
      post.upvotes += 1;
    };

  }
]);