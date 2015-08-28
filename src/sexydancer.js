var SexyDancer = function(top,left,timeBetweenSteps){
  makeDancer.call(this,top,left,timeBetweenSteps);

  this.name = "sensitive";

  this.$node.addClass(this.name);
  this.$node.prepend("<img src ='src/girl.gif'/>");

  this.$node.on("mouseover", function(event){
    this.$node.animate({
      left:"+=50"
    },500);

  }.bind(this));



}

SexyDancer.prototype = Object.create(makeDancer.prototype);
SexyDancer.prototype.constructor = SexyDancer;

SexyDancer.prototype.step = function(){

    // call the old version of step at the beginning of any call to this new version of step
//    this.oldStep();
    makeDancer.prototype.step.call(this);

    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    //  debugger;
    this.$node.animate({top: function(){
      return Math.random() * 400}
    });

};

SexyDancer.prototype.lineUp = function(){
  makeDancer.prototype.lineUp.call(this);

  
}