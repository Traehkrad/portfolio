document.addEventListener('wheel', function(e)
{
  if(e.type != 'wheel')
  {
    return;
  }
  let delta = ((e.deltaY || -e.wheelDelta || e.detail) >> 10) || 1;
  delta = delta * (-300);
  document.documentElement.scrollLeft -= delta;
  // safari needs also this
  document.body.scrollLeft -= delta;
  e.preventDefault();
});



window.onscroll = function(){

var x = window.pageXOffset;


//console.log("scale = " +y/1000 + 1);
console.log(x);



if(x > 1000){
  document.getElementById("container").style.background="red";
}else{
  document.getElementById("container").style.background=
    "linear-gradient(117deg, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 100%)";
}



}
