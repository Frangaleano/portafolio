$("h2").lettering();
      
// hack to get animations to run again
$("h2").click(function() { 
  var el = $(this),  
     newone = el.clone();
  el.before(newone);
  el.remove();
}); 
  
  
var text = $("#jquerybuddy"),
numLetters = text.find("span").length;

function randomBlurize() {
text.find("span:nth-child(" + (Math.floor(Math.random()*numLetters)+1) + ")")
  .animate({
    'textShadowBlur': Math.floor(Math.random()*25)+4,
    'textShadowColor': 'rgba(0,100,0,' + (Math.floor(Math.random()*200)+55) + ')'
  });
// Call itself recurssively
setTimeout(randomBlurize, 100);
} // Call once
randomBlurize();
