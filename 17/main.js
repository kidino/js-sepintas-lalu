import { salam } from './module.js';

let btn1 = document.getElementById('btn-1')

btn1.addEventListener('click', function(){
    salam( this.textContent )
})