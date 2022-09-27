const abcd = document.getElementById('menu-icon')
const efjh = document.getElementById('menu')

abcd.addEventListener("click", () =>{
   if(efjh.className === 'hidden'){
      efjh.classList.remove('hidden')
   }
   else{
      efjh.classList.add('hidden')
   }
})
