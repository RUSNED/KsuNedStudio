//Меню бургер

 const iconMenu = document.querySelector ('.menu__icon');
 if (iconMenu) {
  const menuBody = document.querySelector('.header__info');
  iconMenu.addEventListener("click",function(e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  }); }


