// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this._timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top, left);
  this.step();
}

// Dancer.prototype.makeNode = function() {
//   return 
// };

Dancer.prototype.step = function() {
  var that = this;
  setTimeout(function() {
    that.step();
  }, that._timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };

  this.$node.css(styleSettings);
};