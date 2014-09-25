app.service('postService', function ($http) {
  var _posts = [];
  this.posts = _posts;
  
  this.getAll = function() {
    return $http.get('/posts').success(function(data) {
      angular.copy(data, _posts);
    });
  };
  
  this.create = function(post) {
    return $http.post('/posts', post).success(function(data){
      _posts.push(data);
    });
  };
  
  this.upvote = function(post) {
    return $http.put('/posts/' + post._id + '/upvote')
      .success(function (data) {
        post.upvotes += 1;
    })
  }
});