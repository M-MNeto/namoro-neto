var caller = $("#emcee"),
    box = $("#box");

function foo()
{
    var randX = Math.floor(Math.random() * (window.innerWidth - 100));
    var randY = Math.floor(Math.random() * (window.innerHeight - 100));
    console.log([randX, randY]);
    caller.stop().animate({"left": randX + "px", "top": randY + "px"});

}

$(document).ready(function() {
    
    caller.on('mouseenter', foo);
    caller.on('click', function(){
        alert('clicked!');
    });
    
});

var btn = document.getElementById('yes');
var container = document.querySelector('#box');
btn.addEventListener('click', function() {
    
  if(container.style.display === 'none') {
      container.style.display = 'block';
  } else {
      container.style.display = 'none';
  }
});