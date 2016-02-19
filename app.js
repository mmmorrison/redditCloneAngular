(function(){
  var app = angular.module('clone', []);


  app.controller('CloneController', function(){
    this.entries = testData;
  });

  app.controller('PostController', function(){
      this.newPost = {};

      this.addPost = function(){
        this.newPost.createdOn = Date.now();
        testData.push(this.newPost);
        this.newPost = {};
      };
  });

  app.controller("UpDownVotes", function() {
    for (var i = 0; i < testData.length; i++) {
      for (var votes in testData){
        if (testData.hasOwnProperty(votes)) {
           console.log("Key is " + votes + ", value is" + testData[votes]);
         }
      }
    }
  });


    // this.votes = testData.votes
    // $scope.upVote = function() {
    //   $scope.upVotes++
    // };
    //
    // $scope.downVote = function() {
    //   $scope.downVotes--
    // };



  // app.controller("UpDownVotes", function($scope) {
  //   $scope.upVotes = 0;
  //   $scope.downVotes = 0;
  //
  //   $scope.upVote = function() {
  //     $scope.upVotes++
  //   }
  //
  //   $scope.downVote = function() {
  //     $scope.downVotes--
  //   }
  // });


  var testData = [
    {
    imgUrl: 'http://vignette3.wikia.nocookie.net/bleedmancomics/images/8/8c/Girtrans.png/revision/latest?cb=20121012154620',
    title: 'Test Title',
    votes: 10,
    author: 'Maria Morrison',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    createdOn: 1455908986000,
    commentsCount: 1,
    comments: [
      {
        commentAuthor: 'John Doe',
        body: 'Lorem ipsum dolor sit amet, consectetur'
      },
    ],

    },

    {
    imgUrl: 'http://vignette2.wikia.nocookie.net/zimwiki/images/7/7b/Art_Zimdisguisepointing.png/revision/latest?cb=20100920105522',
    title: 'Test Title Number Two',
    votes: 100,
    author: 'Bernie Sanders',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    createdOn: 1455908986000,
    commentsCount: 2,
    comments: [
      {
        commentAuthor: 'Abbie Hoffman',
        body: 'Lorem ipsum dolor sit amet, consectetur'
      },
      {
        commentAuthor: 'Buddy Rich',
        body: 'Lorem ipsum dolor sit amet, consectetur'
      },
    ],

    },
  ]
})();
