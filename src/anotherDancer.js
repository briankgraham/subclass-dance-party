var ChristianBale = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.name = "christian";
  this.$node.addClass(this.name);
  this.$node.prepend("<img src ='src/bale.gif'/>");


  this.$node.on("mousedown", function(){
  
    var $ball = $("<div class = 'ball'></div>").css(this.$node.position());;
    $('body').append($ball);

    for (var i = 0; i < dancers.length; i++){

      if(dancers[i].name === "anton"){
        $ball.animate(dancers[i].$node.position(), 600);
      }
    }


    

  }.bind(this));
};

ChristianBale.prototype = Object.create(makeDancer.prototype);
ChristianBale.prototype.constructor = ChristianBale;



ChristianBale.prototype.step = function(){

  makeDancer.prototype.step.call(this);
  
}



ChristianBale.prototype.lineUp = function () {
  makeDancer.prototype.lineUp.call(this);

};