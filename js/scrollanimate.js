var counter = document.getElementById("counter");

window.onscroll = function()
{
  console.log(window.pageYOffset);

  var distance = window.pageYOffset;

  document.getElementById("counter").innerHTML = distance;

  counter.innerHTML = distance;
  counter.style.top = distance * 0.98 + 200 + "px";
  counter.style.left = distance * 0.2 + "px";
  counter.style.transform="rotate("+distance*.2+"deg)"

  if (distance > 1000){
    counter.style.backgroundColor = "#00FF00";
  }
  else{
    counter.style.backgroundColor = "red";
  }
  
  //https://jsbin.com/lohosih/edit?html,css,js,output
}
