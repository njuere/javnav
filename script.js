let tribox = document.getElementById('tribox')
let products = document.getElementById('products')
let menu = document.getElementById('menu')
let responsive = document.getElementById('responsive')
let close = document.getElementById('close')

products.onclick = function() {
          if (tribox.style.display == 'none') {
               tribox.style.display = 'block'
          } else {
               tribox.style.display = 'none'
          }
     }

menu.addEventListener('click', function (){
     tribox.style.display = 'block';
     menu.style.display = 'none';
     responsive.style.display = 'block';
     close.style.display = 'block'
})

close.addEventListener('click', function(){
     tribox.style.display = 'none'
     menu.style.display = 'block'
     close.style.display = 'none'
})





menu.addEventListener('click', function() {
     links.style.display = 'block'; 
     menu.style.display= 'none' ;
     close.style.display = 'block';   
 })
 
 close.addEventListener('click', function(){
     links.style.display = 'none';
     menu.style.display= 'block' ;
     close.style.display = 'none';
 })
 