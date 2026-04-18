function page1animation() {
    let tl = gsap.timeline();

    tl.from("nav h1, .part-2 h4, .part-2 button", {
        y: -30,
        opacity: 0,
        delay: 0.4,
        duration: 0.5,
        stagger: 0.15
    });
    tl.from('.center-part1 h1', {
        x: -50,
        duration: 0.5,
        opacity: 0
    });
    tl.from('.center-part1 p', {
        x: -20,
        duration: 0.4,
        opacity: 0
    });
    tl.from('.center-part1 button', {
        opacity: 0
    });
    tl.from('.center-part2 img', {
        x: 100,
        duration: 0.5,
        opacity: 0
    }, "-=1"); // yaha timline mein delay shi se kaam nhi karta isliye isliye -= se utne seconds animation pehle run hoga
    tl.from('.section1bottom img', {
        y: 30,
        opacity: 0,
        duration: 0.4,
        stagger: 0.15
    });
}
// page1animation();

