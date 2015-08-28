var antonDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.name = "anton"
  this.$node.addClass(this.name);
  this.$node.prepend("<img src ='src/putin.gif'/>");

  this.lastTimeOut;
};

antonDancer.prototype = Object.create(makeDancer.prototype);
antonDancer.prototype.constructor = antonDancer;

antonDancer.prototype.step = function(){

  makeDancer.prototype.step.call(this);


  var randomGenerator = function () {
     return Math.random() * 400;
  };

  this.$node.animate({left: randomGenerator()}, 'slow');
}

antonDancer.prototype.lineUp = function(){

  makeDancer.prototype.lineUp.call(this);
  

  
}