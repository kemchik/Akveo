'use strict'
const body = document.getElementsByTagName('body')[0];

body.addEventListener('click', open)

function open(e){
  let hed = document.getElementById('head');
  let elem = e.target
  if(elem.id == 'menu' ){
    hed.className = 'showmenu';
  } else {
    let hed = document.getElementById('head');
    hed.className = '';
  }
}
