const toggleMENUelement = document.getElementsByIdName('toggleMENU');
const menuPrincipaLelement = document.getElementsByIdName('menuPrincipal');

toggleMENUelement.addEventListener('click', () => {
  menuPrincipaLelement.classList.toggle('menuPrincipal--show');  
})