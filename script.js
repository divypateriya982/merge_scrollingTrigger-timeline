function page1animation() {
    let tl = gsap.timeline();

    tl.from("nav h1, .part-2 h4, .part-2 button", {
        y: -30,
        opacity: 0,
        delay: 0.2,
        duration: 0.4,
        stagger: 0.15
    });
    tl.from('.center-part1 h1', {
        x: -50,
        duration: 0.4,
        opacity: 0
    });
    tl.from('.center-part1 p', {
        x: -20,
        duration: 0.3,
        opacity: 0
    });
    tl.from('.center-part1 button', {
        opacity: 0
    });
    tl.from('.center-part2 img', {
        x: 100,
        duration: 0.4,
        opacity: 0
    }, "-=1"); // yaha timline mein delay shi se kaam nhi karta isliye isliye -= se utne seconds animation pehle run hoga
    tl.from('.section1bottom img', {
        y: 30,
        opacity: 0,
        duration: 0.2,
        stagger: 0.15
    });
}
page1animation();

function page2animation() {
    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: '.section-2',
            scroller: 'body',
            markers: false,
            start: 'top 50%',
            end: 'top 0',
            scrub: 2
        }
    });
    tl2.from('.services', {
        y: 40,
        opacity: 0
    })
    tl2.from('.line1.left', {
        x: -300,
        opacity: 0,
    }, 'line1'); // agar koi bhi elements ke animation ek saath run karne hai toh bracket ke baad kuch bhi same de doh
    tl2.from('.line1.right', {
        x: 300,
        opacity: 0,
    }, 'line1');
    tl2.from('.line2.left', {
        x: -300,
        opacity: 0,
    }, 'line2');
    tl2.from('.line2.right', {
        x: 300,
        opacity: 0,
    }, 'line2');

}
page2animation();

function page3animation() {
    let tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: '.section-3',
            scroller: 'body',
            markers: false,
            start: 'top 50%',
            end: 'top 30%',
            scrub: 2
        }
    });
    tl3.from('.section3-top-left h2', {
        x: -30,
        opacity: 0
    });
    tl3.from('.section3-top-left p', {
        x: -20,
        opacity: 0
    });
    tl3.from('.section3-top-left button', {
        opacity: 0
    });
    tl3.from('.section3-top-right img', {
        x: 50,
        opacity: 0
    }, '-=1.3');
    tl3.from('.case-study', {
        y: 40,
        opacity: 0
    });
    tl3.from('.footer-part', {
        y: 100,
        opacity: 0
    });
}
page3animation();