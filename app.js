(function(){
  var app = angular.module('clone', ["ngAnimate", "angularMoment"]);

  app.controller('CloneController', function($scope){
    $scope.selections=[{field: "votes", descend: true}, {field: "date", descend: true}, {field: "title", descend: false}];
    $scope.selected = $scope.selections[0]

    $scope.addPost = function(){
      newPost = {};
      newPost.title = $scope.title;
      newPost.author = $scope.author;
      newPost.imgUrl = $scope.imgUrl;
      newPost.comments = [];
      newPost.commentsCount = 0;
      newPost.description = $scope.description;
      newPost.createdOn = Date.now();
      $scope.AllPosts.push(newPost);
      $scope.title = null;
      $scope.author = null;
      $scope.imgUrl = null;
      $scope.description = null;
    };

    $scope.addComment = function(x){
      newComment = {};
      newComment.name = x.name;
      newComment.body = x.body;
      x.post.comments.push(newComment);
      x.post.commentsCount++;
      x.name = null;
      x.body = null;
    };




  $scope.AllPosts = [
    {
    imgUrl: 'http://vignette3.wikia.nocookie.net/bleedmancomics/images/8/8c/Girtrans.png/revision/latest?cb=20121012154620',
    title: 'Test Title',
    votes: 0,
    author: 'Maria Morrison',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    createdOn: 1455908986000,
    commentsCount: 1,
    comments: [
      {
        name: 'John Doe',
        body: 'Lorem ipsum dolor sit amet, consectetur'
      },
    ],

    },

    {
    imgUrl: 'http://vignette2.wikia.nocookie.net/zimwiki/images/7/7b/Art_Zimdisguisepointing.png/revision/latest?cb=20100920105522',
    title: ' A Test Title Number Two',
    votes: 1,
    author: 'Bernie Sanders',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    createdOn: 1455908986000,
    commentsCount: 2,
    comments: [
      {
        name: 'Abbie Hoffman',
        body: 'Lorem ipsum dolor sit amet, consectetur'
      },
      {
        name: 'Buddy Rich',
        body: 'Lorem ipsum dolor sit amet, consectetur'
      },
    ],

    },
    {
    imgUrl: 'http://images5.fanpop.com/image/photos/28300000/Gir-3-gir-28304244-294-399.png',
    title: 'Be Good',
    votes: 3,
    author: 'Cathy Collier',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    createdOn: 1455908986200,
    commentsCount: 3,
    comments: [
      {
        name: 'Debbie Downer',
        body: 'Lorem ipsum dolor sit amet, consectetur'
      },
      {
        name: 'Eric Everly',
        body: 'Lorem ipsum dolor sit amet, consectetur'
      },
      {
        name: 'Sterling Archer',
        body: 'Lorem ipsum dolor sit amet, consectetur'
      },
    ],

    },
  ]
    });
})();
