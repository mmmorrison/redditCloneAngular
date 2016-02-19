(function() {
  var app = angular.module('clone', []);


  app.controller('CloneController', function($scope) {
    this.entries = testData;
    testData.title = $scope.title;
    testData.author = $scope.author;
    testData.imageURL = $scope.imageURL;
    testData.description = $scope.description;

    $scope.entries.push(testData);
    $scope.title = null;
    $scope.author = null;
    $scope.imageURL = null;
    $scope.description = null;
  });

  app.controller("UpDownVotes", function($scope) {
    $scope.upVotes = 0;
    $scope.downVotes = 0;

    $scope.upVote = function() {
      $scope.upVotes++
    }

    $scope.downVote = function() {
      $scope.downVotes--
    }
  });

var testData = [{
imgUrl: 'http://vignette3.wikia.nocookie.net/bleedmancomics/images/8/8c/Girtrans.png/revision/latest?cb=20121012154620',
title: 'Test Title',
votes: 10,
author: 'Maria Morrison',
description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
date: '2/8/2016',
commentsCount: 2,
}, {
imgUrl: 'http://vignette2.wikia.nocookie.net/zimwiki/images/7/7b/Art_Zimdisguisepointing.png/revision/latest?cb=20100920105522',
title: 'Test Title Number Two',
votes: 0,
author: 'Bernie Sanders',
description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
date: '1/1/2016',
commentsCount: 7,
}];

})();
