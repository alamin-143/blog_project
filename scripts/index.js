const menuIcon = document.getElementById('menu-icon')
const menu = document.getElementById('menu')

abcd.addEventListener("click", () =>{
   if(menu.className === 'hidden'){
      menu.classList.remove('hidden')
   }
   else{
      menu.classList.add('hidden')
   }
})
