// BlinkyDancer.prototype = 

var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.step();
};

BlinkyDancer.prototype = new Dancer;


BlinkyDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};