/*======================= Toggle icon navbar ============================= */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* ====================== Scroll sections active link =====================*/

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            })
        };
    });

    /* ====================== Scroll sections active link =====================*/

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* ====================== remove toggle icon and navbar when click navbar link (scroll) =====================*/

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('.active');
};


/* ====================== Scroll Reveal =====================*/


ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });

ScrollReveal().reveal('.home-img, .services-container, .mtn-box, .contact form', { origin: 'bottom' });


ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

ScrollReveal().reveal('.navbar a', { interval: 200 });


/* ====================== Typed js =====================*/


const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'Frontend Developer', 'Backend Developer'],
    typeSpeed: 100,
    backDelay: 1000,
    loop: true
});

/* ====================== popup js =====================*/

let popup = document.getElementById("popup");
let blur = document.getElementById("home");

function openPopup() {
    popup.classList.add("open-popup");
    blur.classList.toggle("active");
}

function closePopup() {
    popup.classList.remove("open-popup");
    blur.classList.remove("active");
}


/* ====================== spinner loader js =====================*/

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    loader.classList.add("loader-hidden");

    loader.addEventListener("transitionend", () => {
        document.classList.remove("loader");
    })
})
