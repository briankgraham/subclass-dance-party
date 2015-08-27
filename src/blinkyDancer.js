var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  

  makeDancer.call(this,top, left, timeBetweenSteps);
  this.$node.addClass('blinky');
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
//  var oldStep = this.step;



};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function(){

    // call the old version of step at the beginning of any call to this new version of step
//    this.oldStep();
    makeDancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    //  debugger;
    this.$node.toggle();
};

var antonDancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="antonDancer"></span>');

  makeDancer.call(this, top, left, timeBetweenSteps);
};

antonDancer.prototype = Object.create(makeDancer.prototype);
antonDancer.prototype.constructor = antonDancer;

antonDancer.prototype.step = function(){

  makeDancer.prototype.step.call(this);

  this.$node.toggle();
}