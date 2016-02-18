(function(){
  var app = angular.module('clone', []);

  app.controller('CloneController',function() {
    this.entries = testData;
  });

  var testData = [
    {
      imgUrl: 'http://vignette3.wikia.nocookie.net/bleedmancomics/images/8/8c/Girtrans.png/revision/latest?cb=20121012154620',
      title: 'Test Title',
      votes: 10,
      author: 'Maria Morrison',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.',
      data: '2/8/2016',
      commentsCount: 2,
    }
  ];

})
