

var myApp = angular.module('myApp', []);
//controller for creating gif post to bind to the view
myApp.controller('GifController', function() {
gc = this;
//empty array for pushing post into
gc.gallery = [];
//start of a new post
var post = {
    description: 'This my girlfriend Midge, showing off her favorite pair of sunglasses!',
    gifUrl: 'images/midge.gif',
    showGif: true
  }; // end of this post
//pushed a post to the gallery array
gc.gallery.push(post);

//toggle function changes visibility of a selected gif
gc.toggleGif = function(galleryIndex){
  gc.gallery[ galleryIndex ].showGif = !gc.gallery[ galleryIndex ].showGif;
}; //end of toggle function for gifs

});
