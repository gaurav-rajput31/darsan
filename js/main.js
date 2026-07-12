/*==================================================
CONFIG
==================================================*/

gsap.registerPlugin(ScrollTrigger);

const header = document.querySelector(".header");
const menu = document.querySelector(".mobile-menu");
const menuBtn = document.querySelector(".menu-toggle");
const closeBtn = document.querySelector(".close-menu");

const hero = document.querySelector(".hero");
const heroVideo = document.querySelector(".hero-video");
const heroOverlay = document.querySelector(".hero-overlay");
const heroContent = document.querySelector(".hero-content");
const heroImage = document.querySelector(".hero-img");

/*==================================================
HEADER
==================================================*/

if (header) {

    window.addEventListener("scroll", () => {

        header.classList.toggle("active", window.scrollY > 40);

    });

}

/*==================================================
MOBILE MENU
==================================================*/

if (menuBtn && menu) {

    menuBtn.addEventListener("click", () => {

        menu.classList.add("active");
        document.body.style.overflow = "hidden";

    });

}

if (closeBtn && menu) {

    closeBtn.addEventListener("click", () => {

        menu.classList.remove("active");
        document.body.style.overflow = "";

    });

}

/*==================================================
HERO INITIAL STATE
==================================================*/

if (hero) {

    if (heroImage) {

        gsap.set(heroImage, {

            x: 180,
            opacity: 0,
            scale: .92,
            force3D: true

        });

    }

    gsap.set(".hero-tag", {

        opacity: 0,
        y: 30

    });

    gsap.set(".hero-title", {

        opacity: 0,
        y: 80

    });

    gsap.set(".hero-subtitle", {

        opacity: 0,
        y: 40

    });

    gsap.set(".hero-text", {

        opacity: 0,
        y: 30

    });

    gsap.set(".hero-btns a", {

        opacity: 0,
        y: 20

    });

}

/*==================================================
HERO INTRO
==================================================*/

if (hero) {

    const heroIntro = gsap.timeline({

        defaults: {

            ease: "power4.out"

        }

    });

    heroIntro

    .to(".hero-tag", {

        opacity: 1,
        y: 0,
        duration: .5

    })

    .to(".hero-title", {

        opacity: 1,
        y: 0,
        duration: .9

    }, "-=.2")

    .to(".hero-subtitle", {

        opacity: 1,
        y: 0,
        duration: .6

    }, "-=.6")

    .to(".hero-text", {

        opacity: 1,
        y: 0,
        duration: .5

    }, "-=.4")

    .to(".hero-btns a", {

        opacity: 1,
        y: 0,
        stagger: .15,
        duration: .45

    }, "-=.3");

    if (heroImage) {

        heroIntro.to(heroImage, {

            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1.2,
            ease: "expo.out"

        }, "-=.8");

    }

}

/*==================================================
HERO SCROLL
==================================================*/

if (hero) {

    const heroScroll = gsap.timeline({

        scrollTrigger: {

            trigger: hero,
            start: "top top",
            end: "+=1400",
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true

        }

    });

    /*==========================
    CONTENT
    ==========================*/

    if (heroContent) {

        heroScroll.to(heroContent, {

            x: -70,
            opacity: .95,
            ease: "none"

        }, 0);

    }

    /*==========================
    IMAGE
    ==========================*/

    if (heroImage) {

        heroScroll.to(heroImage, {

            x: 0,
            opacity: 1,
            scale: 1,
            ease: "none"

        }, 0);

    }

    /*==========================
    VIDEO
    ==========================*/

    if (heroVideo) {

        heroScroll.to(heroVideo, {

            scale: 1.12,
            ease: "none"

        }, 0);

    }

    /*==========================
    OVERLAY
    ==========================*/

    if (heroOverlay) {

        heroScroll.to(heroOverlay, {

            opacity: .82,
            ease: "none"

        }, 0);

    }

}

/*==================================================
IMAGE FLOAT
==================================================*/

if (heroImage) {

    gsap.to(heroImage, {

        y: -15,
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: "sine.inOut"

    });

}

/*==================================================
BUTTON HOVER
==================================================*/

document.querySelectorAll(".hero-btns a").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        gsap.to(btn, {

            scale: 1.05,
            y: -4,
            duration: .25,
            overwrite: true

        });

    });

    btn.addEventListener("mouseleave", () => {

        gsap.to(btn, {

            scale: 1,
            y: 0,
            duration: .25,
            overwrite: true

        });

    });

});

/*==================================================
SCROLL INDICATOR
==================================================*/

const indicator = document.querySelector(".scroll-indicator");

if (indicator) {

    gsap.to(indicator, {

        y: 12,
        repeat: -1,
        yoyo: true,
        duration: 1,
        ease: "sine.inOut"

    });

}

/*==================================================
HERO EXIT
==================================================*/

if (hero) {

    if (heroContent) {

        gsap.to(heroContent, {

            opacity: .2,
            y: -120,

            scrollTrigger: {

                trigger: hero,
                start: "60% top",
                end: "bottom top",
                scrub: true

            }

        });

    }

    if (heroImage) {

        gsap.to(heroImage, {

            scale: 1.15,
            opacity: .25,

            scrollTrigger: {

                trigger: hero,
                start: "60% top",
                end: "bottom top",
                scrub: true

            }

        });

    }

    if (heroOverlay) {

        gsap.to(heroOverlay, {

            opacity: .95,

            scrollTrigger: {

                trigger: hero,
                start: "60% top",
                end: "bottom top",
                scrub: true

            }

        });

    }

}

/*==================================================
IMAGE LOAD
==================================================*/

window.addEventListener("load", () => {

    ScrollTrigger.refresh();

});

window.addEventListener("resize", () => {

    ScrollTrigger.refresh();

});



/*==================================================
TYPOGRAPHY TRANSITION
==================================================*/

const transitionSection = document.querySelector(".transition-section");

if (transitionSection) {

    const tl = gsap.timeline({

        scrollTrigger: {

            trigger: transitionSection,
            start: "top top",
            end: "+=1800",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true

        }

    });

    tl

    .from(".line1", {

        opacity: 0,
        y: 120,
        duration: .5

    })

    .from(".line2", {

        opacity: 0,
        y: 120,
        duration: .5

    }, "-=.25")

    .from(".line3", {

        opacity: 0,
        scale: 1.25,
        duration: .5

    }, "-=.2")

    .from(".line4", {

        opacity: 0,
        y: 120,
        duration: .5

    }, "-=.25")

    .to(".transition-wrapper", {

        opacity: 0,
        y: -180,
        scale: 1.08,
        filter: "blur(10px)"

    })

    .set(".transition-final", {

        autoAlpha: 1

    })

    .from(".transition-final h2", {

        opacity: 0,
        y: 100,
        scale: .8,
        duration: .7

    })

    .from(".transition-final span", {

        opacity: 0,
        y: 40,
        duration: .5

    }, "-=.35")

    .to(".transition-final h2", {

        scale: 1.08

    })

    .to(".transition-final", {

        opacity: 0,
        y: -120

    });

}

/*==================================================
GLOBAL OPTIMIZATION
==================================================*/

window.addEventListener("load", () => {

    ScrollTrigger.refresh();

});

/*==================================================
AUTO REFRESH ON IMAGE LOAD
==================================================*/

document.querySelectorAll("img").forEach(img => {

    if (!img.complete) {

        img.addEventListener("load", () => {

            ScrollTrigger.refresh();

        });

    }

});

/*==================================================
SAFE GPU
==================================================*/

gsap.set(

[
    ".hero-img",
    ".hero-video",
    ".transition-wrapper",
    ".transition-final"
],

{

    force3D: true

}

);

/*==================================================
END
==================================================*/