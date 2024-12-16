var button = document.getElementById('join-btn');
var divButtons = document.getElementById('hidden-btns');
var divButton = document.getElementById('hidden-btn');
var backgroundImg =document.getElementById('services-section');

function checkScreenSize() {
  
    if (window.matchMedia("(max-width: 992px)").matches) {

        button.innerText= "+ Join ";
        button.style.width ='100px';
        backgroundImg.style.backgroundImage ='none';
        divButtons.style.display="flex";
        divButton.style.display="flex";
    } 
};
window.addEventListener('resize', checkScreenSize);
window.addEventListener('load', checkScreenSize);

//---- Slider
const openSidebarBtn = document.getElementById('openSidebar');
const closeSidebarBtn = document.getElementById('closeSidebar');
const sidebar = document.getElementById('sidebar');


openSidebarBtn.addEventListener('click', () => {
  sidebar.style.left = '0';
});

closeSidebarBtn.addEventListener('click', () => {
  sidebar.style.left= '-100%';
});






