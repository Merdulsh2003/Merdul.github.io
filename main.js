var typed = new Typed(".text",{
    strings: ["Frontend Developer", "Coding Enthusiast"],
    typeSpeed: 150,
    backSpeed: 150,
    backDelay: 1500,
    loop: true
});
document.addEventListener('DOMContentLoaded', () => {
    const navContainer = document.querySelector('.nav-container');

    navContainer.addEventListener('mouseenter', () => {
        navContainer.style.height = '100px';
    });

    navContainer.addEventListener('mouseleave', () => {
        navContainer.style.height = '50px';
    });
});

