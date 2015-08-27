var anotherDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('another');
};

anotherDancer.prototype = Object.create(makeDancer.prototype);
anotherDancer.prototype.constructor = anotherDancer;

anotherDancer.prototype.step = function(){

  makeDancer.prototype.step.call(this);
  var randomGenerator = function () {
    return Math.random() * 700;
  };

  this.$node.animate({top: randomGenerator()}, 'fast');
}