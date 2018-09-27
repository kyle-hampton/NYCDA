var today = new Date();
var h = today.getHours();
var m = today.getMinutes();


var container = document.createElement('div')
var displayClock = document.createElement('div');
var hr = document.createElement('hr')
var hr2 = document.createElement('hr')

function clock(){
  document.body.appendChild(container)
  container.appendChild(hr2)
  container.appendChild(displayClock)
  container.appendChild(hr)




  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);

  hr.style.color = 'black'
  displayClock.innerHTML =  h - 12 + ":" + m + ":" + s;
  hr.style.color = 'black'
  displayClock.style.color = "white"


  var t = setTimeout(clock, 500)

  var r = parseInt(s) * 1;
  var g = parseInt(m) * 2;
  var b = parseInt(h) * 6;
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
  var t = setTimeout(time, 500);

}

function checkTime(i){
  if(i < 10){
    i = "0" + i;
  }
  return i;
}

window.addEventListener('load', clock)
