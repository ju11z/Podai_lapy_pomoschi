gsap.from('.border-img-container.offset-bottom', {opacity:0,y:200, duration:2});
gsap.from('.border-img-container.offset-top', {opacity:0,y:-200, duration:2});

let cards=gsap.utils.toArray(".about-card");
cards.forEach((card) => {
    let cardAnimation=gsap.to(card,{y:30, ease:"bounce.out", duration: 1});
    card.addEventListener("mouseenter", () => cardAnimation.play());
    card.addEventListener("mouseleave",()=>cardAnimation.reverse());
});


gsap.utils.toArray(".roll-right").forEach(function(rr) {
    gsap.timeline({
        scrollTrigger: {
            trigger: rr,
            start: 'top bottom'
        }
    })
        .from(rr, { duration: 1, x:-200, opacity:0})

});