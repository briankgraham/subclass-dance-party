var antonDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('anton');
};

antonDancer.prototype = Object.create(makeDancer.prototype);
antonDancer.prototype.constructor = antonDancer;

antonDancer.prototype.step = function(){

  makeDancer.prototype.step.call(this);
  var randomGenerator = function () {
    return Math.random() * 1250;
  };

  this.$node.animate({left: randomGenerator()}, 'slow');
}