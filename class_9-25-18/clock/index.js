var modal = document.getElementById('modal')

function createModal(){
  var box = document.createElement('div')
  box.style.width = '600px';
  box.style.heigth = '500px';
  box.style.backgroundColor = 'grey';
  box.style.margin = '20px';
  document.header.appendChild('box')

}

function start() {
  setTimeout(createModal, 100)

}
window.addEventListener('load', start)
