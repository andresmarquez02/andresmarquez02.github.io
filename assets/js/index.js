let top_nav = document.querySelector("#top_nav");
let logo = document.querySelector("#logo");
let bars = document.querySelector(".bars");
let backdrop = document.querySelector(".backdrop__bar");

document.addEventListener('Load', function(){
    document.getElementById('preload').style.display="flex";
    document.querySelector("body").style.overflowY="hidden";
});
document.querySelector("body").style.overflowY="auto";
document.getElementById('preload').style.display="none";

window.onscroll = function(){
    let y = window.scrollY;
    if(y > 50){
        top_nav.classList.add('l-header-scroll');
        top_nav.classList.remove('l-header-scroll-not');
    }
    else{
        top_nav.classList.remove('l-header-scroll');
        top_nav.classList.add('l-header-scroll-not');
    }
}

const showMenu = (ToggleId, navId) =>{
    const toggle = document.getElementById(ToggleId),
    nav = document.getElementById(navId);
    if(toggle && nav ){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show');
            bars.classList.toggle("show__bars");
            backdrop.classList.toggle("backdrop__bar_show");
        });
    }
}

showMenu('nav-toggle','nav-menu');
const navLink = document.querySelectorAll('#nav-link');

function linkAction(){
    let link = null;
    navLink.forEach(element =>{
        element.classList.remove('active');
        this.classList.add('active');
        link = this.href;
    });
    let navMenu = document.querySelector('.nav_menu');
    navMenu.classList.remove('show');
    bars.classList.remove("show__bars");
    backdrop.classList.remove("backdrop__bar_show");
}
navLink.forEach(element => element.addEventListener('click', linkAction));

let href= document.querySelector(`[href='${window.location.hash}']`);
if(href !== null){
    href.click();
}

const sr = ScrollReveal({
    origin: 'bottom',
    distance: '80px',
    duration: 2000,
    reset: false
});

sr.reveal('.button',{delay:200});
sr.reveal('.help_title',{});
sr.reveal('.ch1',{delay:200});
sr.reveal('.ch2',{delay:500});
sr.reveal('.ch3',{delay:700});
sr.reveal('footer .list_social li:nth-child(1)',{delay:200});
sr.reveal('footer .list_social li:nth-child(2)',{delay:300});
sr.reveal('footer .list_social li:nth-child(3)',{delay:400});
sr.reveal('footer .list_social li:nth-child(4)',{delay:500});
sr.reveal('footer .list_social li:nth-child(5)',{delay:600});
sr.reveal('footer .list_social li:nth-child(6)',{delay:700});
sr.reveal('footer .list_social li:nth-child(7)',{delay:800});
sr.reveal('.home_title',{});
sr.reveal('.social_media',{delay:400});
sr.reveal('.home_img',{delay:300});
sr.reveal('.abount_title',{});
sr.reveal('.abount_text p',{delay:300});
sr.reveal('.abount_text a',{delay:400});
sr.reveal('.abount_img',{delay:400});
sr.reveal('.skill_title',{});
sr.reveal('.skill_text',{delay:300});
sr.reveal('.html',{});
sr.reveal('.css',{delay:250});
sr.reveal('.sass',{delay:300});
sr.reveal('.bootstrap',{delay:350});
sr.reveal('.tailwind',{delay:370});
sr.reveal('.javascript',{delay:400});
sr.reveal('.vue',{delay:500});
sr.reveal('.react',{delay:550});
sr.reveal('.jquery',{delay:600});
// sr.reveal('.node',{delay:500});
sr.reveal('.php',{delay:650});
sr.reveal('.laravel',{delay:700});
sr.reveal('.mysql',{delay:750});
sr.reveal('.git',{delay:800});
sr.reveal('.works_title',{});

let variables = [
    "--second-color",
    "--three-color",
    "--for-color",
    "--five-color",
    "--name-opacity",
    "--shadow-tecnologi",
    "--first-color-img-work",
    "--second-color-img-work",
    "--text-color-img-work"
];
let mode = document.querySelector("#mode");

mode.addEventListener("click", () => {
    let mode_save = localStorage.getItem("mode");
    if(mode_save == "light"){
        console.log(mode_save);
        dark(mode.children[0]);
        localStorage.setItem("mode","dark");
        return 0;
    }
    light(mode.children[0]);
    localStorage.setItem("mode","light");
});

let dark = (i) => {
    let colors = [
        "#ffffff","#0a1017","#0c131b","#0c131b","#1d2732","#b9b9b914","#e7edf2","#a4afb7","#0a1117"
    ];
    change(colors);
    document.querySelector("body").setAttribute("style","background: url(assets/images/dark.svg) var(--three-color) no-repeat center");
}

let light = (i) => {
    let colors = [
        "#3b3f44","#fff","#fdfdfd","#0a1117","#e0e3ea","#1e3c4e14","#0a1117fb","#081117f8","#fff"
    ];
    change(colors);
    document.querySelector("body").setAttribute("style","background: url(assets/images/light.svg) var(--three-color) no-repeat center");
}
let change = (colors) => {
    for(let index = 0; index < variables.length; index++){
        document.documentElement.style.setProperty(variables[index],colors[index]);
    }
}
if(localStorage.getItem("mode") == null){
    localStorage.setItem("mode","light");
}
else{
    if(localStorage.getItem("mode") == "dark"){
        mode.checked = true;
        dark(mode.children[0]);
    }
}
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
      .then(reg => console.log('Registro de sw exitoso', reg))
      .catch(err => console.warn('Error al tratar de registrar el sw', err))
}