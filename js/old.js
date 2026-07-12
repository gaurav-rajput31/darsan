const header=document.querySelector(".header");

window.addEventListener("scroll",()=>{

header.classList.toggle("active",window.scrollY>50);

});

const menu=document.querySelector(".mobile-menu");

document.querySelector(".menu-toggle").onclick=()=>{

menu.classList.add("active");

}

document.querySelector(".close-menu").onclick=()=>{

menu.classList.remove("active");

}



// hero section

gsap.registerPlugin(ScrollTrigger);

/*=========================================
Hero Intro
=========================================*/

const heroTL = gsap.timeline({
    defaults:{
        ease:"power4.out"
    }
});

heroTL

.from(".hero-tag",{
    opacity:0,
    y:25,
    duration:.5
})

.from(".hero-title",{
    opacity:0,
    y:100,
    duration:1
},"-=.2")

.from(".hero-subtitle",{
    opacity:0,
    y:40,
    duration:.6
},"-=.6")

.from(".hero-text",{
    opacity:0,
    y:30,
    duration:.5
},"-=.4")

.from(".hero-btns a",{
    opacity:1,
    y:25,
    stagger:.15,
    duration:.45
},"-=.3");


/*=========================================
Image Hidden Initially
=========================================*/

gsap.set(".hero-img",{

    x:250,

    opacity:0,

    scale:.9

});


/*=========================================
Hero Pin
=========================================*/

ScrollTrigger.create({

    trigger:".hero",

    start:"top top",

    end:"+=1500",

    pin:true,

    scrub:1

});


/*=========================================
Image Reveal On Scroll
=========================================*/

gsap.to(".hero-img",{

    x:0,

    opacity:1,

    scale:1,

    ease:"none",

    scrollTrigger:{

        trigger:".hero",

        start:"top top",

        end:"45% top",

        scrub:1

    }

});


/*=========================================
Text Move Left
=========================================*/

gsap.to(".hero-content",{

    x:-80,

    opacity:.95,

    scrollTrigger:{

        trigger:".hero",

        start:"top top",

        end:"45% top",

        scrub:1

    }

});


/*=========================================
Image Float
=========================================*/

gsap.to(".hero-img",{

    y:-18,

    duration:3,

    repeat:-1,

    yoyo:true,

    ease:"sine.inOut"

});


/*=========================================
Video Zoom
=========================================*/

gsap.to(".hero-video",{

    scale:1.15,

    scrollTrigger:{

        trigger:".hero",

        start:"top top",

        end:"bottom top",

        scrub:true

    }

});


/*=========================================
Overlay Dark
=========================================*/

gsap.to(".hero-overlay",{

    opacity:.85,

    scrollTrigger:{

        trigger:".hero",

        start:"top top",

        end:"bottom top",

        scrub:true

    }

});


/*=========================================
Buttons Hover
=========================================*/

document.querySelectorAll(".hero-btns a").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        gsap.to(btn,{
            scale:1.08,
            y:-5,
            duration:.3
        });

    });

    btn.addEventListener("mouseleave",()=>{

        gsap.to(btn,{
            scale:1,
            y:0,
            duration:.3
        });

    });

});


/*=========================================
Scroll Indicator
=========================================*/

gsap.to(".scroll-indicator",{

    y:12,

    repeat:-1,

    yoyo:true,

    ease:"sine.inOut",

    duration:1

});



/*=========================================
TYPOGRAPHY TRANSITION
=========================================*/

window.addEventListener("load",()=>{

gsap.registerPlugin(ScrollTrigger);

/*-----------------------
Split Text
-----------------------*/

document.querySelectorAll(".transition-line").forEach(line=>{

    const text=line.textContent.trim();

    line.innerHTML="";

    [...text].forEach(letter=>{

        const span=document.createElement("span");

        span.className="char";

        span.innerHTML=letter===" "?"&nbsp;":letter;

        line.appendChild(span);

    });

});


/*-----------------------
Initial State
-----------------------*/

gsap.set(".transition-final",{

    autoAlpha:0,

    scale:.8

});

gsap.set(".transition-final h2",{

    y:120,

    opacity:0

});


/*-----------------------
Timeline
-----------------------*/

const transitionTL=gsap.timeline({

    scrollTrigger:{

        trigger:".transition-section",

        start:"top top",

        end:"+=1600",

        scrub:1,

        pin:true,

        anticipatePin:1

    }

});


/*-----------------------
Reveal Lines
-----------------------*/

transitionTL

.from(".line1 .char",{

    opacity:0,

    y:120,

    stagger:.03,

    duration:.5

})

.from(".line2 .char",{

    opacity:0,

    y:120,

    stagger:.03,

    duration:.5

},"+=.1")

.from(".line3 .char",{

    opacity:0,

    y:120,

    scale:1.5,

    stagger:.03,

    duration:.5

},"+=.1")

.from(".line4 .char",{

    opacity:0,

    y:120,

    stagger:.03,

    duration:.5

},"+=.1")


/*-----------------------
Fade Old Text
-----------------------*/

.to(".transition-wrapper",{

    opacity:0,

    y:-120,

    scale:1.15,

    filter:"blur(10px)",

    duration:1

})


/*-----------------------
Show Final
-----------------------*/

.set(".transition-final",{

    autoAlpha:1

})


.to(".transition-final h2",{

    opacity:1,

    y:0,

    duration:1

})


.to(".transition-final h2",{

    scale:1.12,

    duration:1.2

})


/*-----------------------
Hide Final
-----------------------*/

.to(".transition-final",{

    autoAlpha:0,

    y:-100,

    duration:1

});

});



















/*=========================================
JOURNEY SECTION
=========================================*/

gsap.registerPlugin(ScrollTrigger);

/* Initial State */

gsap.set(".journey-tag",{
    opacity:0,
    y:30
});

gsap.set(".journey-title",{
    opacity:0,
    y:100
});

gsap.set(".journey-line",{
    width:0
});

gsap.set(".journey-text",{
    opacity:0,
    y:40
});

gsap.set(".journey-quote",{
    opacity:0,
    x:40
});

gsap.set(".journey-btn",{
    opacity:0,
    y:30
});

gsap.set(".journey-img",{
    opacity:0,
    x:-120,
    scale:.92,
    filter:"grayscale(100%)"
});


/*=========================================
Timeline
=========================================*/

const journeyTL = gsap.timeline({

    scrollTrigger:{

        trigger:".journey-section",

        start:"top 65%",

        end:"top 10%",

        scrub:1

    }

});


journeyTL

.to(".journey-img",{

    opacity:1,

    x:0,

    scale:1,

    duration:1

},0)

.to(".journey-tag",{

    opacity:1,

    y:0,

    duration:.4

},.1)

.to(".journey-title",{

    opacity:1,

    y:0,

    duration:.8,

    ease:"expo.out"

},.2)

.to(".journey-line",{

    width:120,

    duration:.6

},.4)

.to(".journey-text",{

    opacity:1,

    y:0,

    duration:.8

},.55)

.to(".journey-quote",{

    opacity:1,

    x:0,

    duration:.7

},.8)

.to(".journey-btn",{

    opacity:1,

    y:0,

    duration:.5

},1);


/*=========================================
Image Color Reveal
=========================================*/

gsap.to(".journey-img",{

    filter:"grayscale(0%)",

    scrollTrigger:{

        trigger:".journey-section",

        start:"top center",

        end:"bottom center",

        scrub:true

    }

});


/*=========================================
Background Text Parallax
=========================================*/

gsap.to(".journey-bg-text",{

    y:-200,

    ease:"none",

    scrollTrigger:{

        trigger:".journey-section",

        start:"top bottom",

        end:"bottom top",

        scrub:true

    }

});


/*=========================================
Image Floating
=========================================*/

gsap.to(".journey-img",{

    y:-15,

    repeat:-1,

    yoyo:true,

    duration:3,

    ease:"sine.inOut"

});


/*=========================================
Mouse Parallax
=========================================*/

const journey=document.querySelector(".journey-section");

const journeyImg=document.querySelector(".journey-img");

journey.addEventListener("mousemove",(e)=>{

    const rect=journey.getBoundingClientRect();

    const x=((e.clientX-rect.left)/rect.width-.5)*20;

    const y=((e.clientY-rect.top)/rect.height-.5)*20;

    gsap.to(journeyImg,{

        x:x,

        y:y-15,

        duration:1,

        overwrite:"auto"

    });

});


/*=========================================
Button Hover
=========================================*/

document.querySelector(".journey-btn").addEventListener("mouseenter",()=>{

    gsap.to(".journey-btn",{

        scale:1.05,

        duration:.3

    });

});

document.querySelector(".journey-btn").addEventListener("mouseleave",()=>{

    gsap.to(".journey-btn",{

        scale:1,

        duration:.3

    });

});


gsap.from(".journey-card",{

opacity:0,

y:120,

rotate:20,

stagger:.2,

duration:1.3,

ease:"expo.out",

scrollTrigger:{

trigger:".journey-gallery",

start:"top 75%"

}

});


gsap.to(".card-2",{

y:-15,

repeat:-1,

yoyo:true,

duration:3,

ease:"sine.inOut"

});


gsap.to(".journey-glow",{

scale:1.15,

repeat:-1,

yoyo:true,

duration:4,

ease:"sine.inOut"

});
