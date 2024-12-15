var button = document.getElementById('join-btn');
var backgroundImg =document.getElementById('services-section');

function checkScreenSize() {
  
    if (window.matchMedia("(max-width: 992px)").matches) {

        button.innerText= " Join ";
        button.style.width ='80px';
        backgroundImg.style.backgroundImage ='none';

    } 
}

window.addEventListener('resize', checkScreenSize);
window.addEventListener('load', checkScreenSize);





