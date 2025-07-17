gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});








// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();




var content = document.querySelector('#page1-content')
var cursor = document.querySelector('#cursor')

content.addEventListener('mousemove', function (e) {
    gsap.to(cursor, {
        x: e.x,
        y: e.y
    })
})
content.addEventListener('mouseenter', function (e) {
    gsap.to(cursor, {
        scale: 1,
        opacity: 1
    })
})
content.addEventListener('mouseleave', function (e) {
    gsap.to(cursor, {
        scale: 0,
        opacity: 0
    })
})

window.addEventListener("DOMContentLoaded", () => {
    gsap.from("#page1 h1 span", {
        y: 100,               // Start 100px below
        opacity: 0,           // Start transparent
        duration: 1,          // Animation duration per element
        ease: "power4.out",   // Smooth easing
        stagger: 0.3          // Delay between each span
    });
});

gsap.registerPlugin(ScrollTrigger);
gsap.from(".elem h1", {
    y: 220,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "#main",
        start: "top 47%",
        end: "top 46%",
        scrub: 3
    }
})

gsap.registerPlugin(ScrollTrigger);
gsap.from(".elemn h2", {
    x: 300,
    stagger: 1,
    duration: 1,
    scrollTrigger: {
        trigger: ".page4",
        scroller: "#main",
        start: "top 47%",
        end: "top 46%",
        scrub: 4
    }
})


const swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    slidesPerView: "auto",
    spaceBetween: 20,
});

