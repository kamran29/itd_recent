[ 'play', 'pause', 'unpause' ].forEach( function( action ) {
  var methodName = action + 'Player';
  Flickity.prototype[ methodName ] = function() {
    this.player[ action ]();
    this.dispatchEvent( methodName );
  };
});

Flickity.prototype.stopPlayer = function() {
  this.player.stop();
  // always resume play after 3 seconds
  setTimeout( () => {
    this.player.play();
  }, 15000 )
};