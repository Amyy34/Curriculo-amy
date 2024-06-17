let links = document.querySelectorAll('.nav-link')
let sections = document.querySelectorAll('.resume-section')


window.addEventListener('scroll', () => {
sections.forEach(section => {

let top = window.scrollY;
let offset = section.offsetTop 
let heigthSection = section.offsetHeight;
let idSection = section.getAttribute('id')

if(top >= offset && top < offset + heigthSection) {
    links.forEach(link => {
        link.classList.remove('actived');

        document.querySelector(`.nav-link[href*='${idSection}']`).classList.add('actived');
    })
}
})

})


let linksMobile = document.querySelectorAll('.nav-link-mobile')


window.addEventListener('scroll', () => {
sections.forEach(section => {

let top = window.scrollY;
let offset = section.offsetTop;
let heigthSection = section.offsetHeight;
let idSection = section.getAttribute('id')

if(top >= offset && top < offset + heigthSection) {
    linksMobile.forEach(link => {
        link.classList.remove('actived');

        document.querySelector(`.nav-link-mobile[href*='${idSection}']`).classList.add('actived');
    })
}
})

})

function scrollSection(event) {
event.preventDefault();

const largura = window.screen.width;
const href = event.currentTarget.getAttribute('href');
const section = document.querySelector(href);
let topSection = section.offsetTop;

window.scrollTo({
    top: topSection,
    behavior: 'smooth'
})
     }

     function scrollSectionmobile(event) {
        event.preventDefault();
        
        const largura = window.screen.width;
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        let topSection = section.offsetTop - 75.6;
        
        window.scrollTo({
            top: topSection,
            behavior: 'smooth'
        })
             }

links.forEach(link => {
    link.addEventListener('click', scrollSection)
})
    linksMobile.forEach(link => {
        link.addEventListener('click', scrollSectionmobile)
})

function menuShow(){
    let mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu.classList.contains('open')){
        mobileMenu.classList.remove('open');
    } else{
        mobileMenu.classList.add('open');
    }
}