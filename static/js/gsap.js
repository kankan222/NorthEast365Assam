let play = document.querySelector(`#play`);
let video = document.querySelector(`#video-container`);

let hamburger = document.querySelector(`#hamburger`);
let navLinks = document.querySelector(`#nav-links`);

let tl=gsap.timeline();

function videoConAnimation (){
video.addEventListener("mouseenter", ()=>{
    gsap.to(play, {
        opacity: 1,
        scale: 1
    })
})
video.addEventListener("mouseleave", ()=>{
    gsap.to(play, {
        opacity: 0,
        scale: 0
    })
})
video.addEventListener("mousemove", (dets)=>{
    gsap.to(play, {
        left: dets.x-50,
        top: dets.y-80
    })
})
}
videoConAnimation();

function loadingHeading(){
    tl.from("#page1 h1, #page2 h1, #page2 h2, #page2 p", {
        y: 100,
        opacity: 0,
        // delay: 0.5,
        duration: 0.9,
        stagger: 0.5
    })
    tl.from("#page1 #video-container", {
        scale: 0.9,
        opacity: 0,
        // delay: 1.3,
        duration: 0.3
    })
    tl.from("#page a, #page .right", {
        scale: 0.9,
        opacity: 0,
        duration: 0.3,
        stagger: 0.5
    })
}

loadingHeading();

document.addEventListener("mousemove", (dets)=>{
    gsap.to("#cursor", {
        left: dets.x,
        top: dets.y,
        transform: 'translate(-50%, -50%) scale(1)'
    })
})

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
})