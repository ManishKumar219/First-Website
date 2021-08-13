// Navigation for Mobile Devices
var navImg = document.getElementById("nav-expand");
var nav = document.getElementById("side-nav-block");
var navCloseImg = document.getElementById("nav-close-img")


// console.log(navClose);

function navClick(){
    nav.style.display = 'block';
    // navImg.style.display = 'none';
}

function navClose(){
    nav.style.display = 'none';
    // navImg.style.display = 'block';
}

navImg.addEventListener("click", navClick);
navCloseImg.addEventListener("click", navClose);


// Navigation Fixing at Top
var navBlock = document.getElementsByClassName("nav-sub-block1");
var head = document.getElementsByClassName("head-format");
function contractNav(){
    if(window.screen.width>800 && location.pathname == '/home.html'){
        if(window.pageYOffset>60){
            navBlock[0].style.alignItems = 'flex-end';
            head[0].id = 'headLock';
            head[1].id = 'removePara';
        }
        else{
            
            head[0].id = '';
            head[1].id = '';
        }
    }
}
console.log(location.pathname);

// console.log(navBlock[0].scrollHeight);
window.addEventListener('scroll', contractNav);


