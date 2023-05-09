let buttons = gsap.utils.toArray(".shadow-btn-container");
buttons.forEach((button) => {
    let shadow=button.querySelector(".my-shadow");
    console.log(shadow);
    let shadowAnimation=gsap.to(shadow,{opacity: 1, duration: 1});
    button.addEventListener("mouseenter", () => shadowAnimation.play());
    button.addEventListener("mouseleave",()=>shadowAnimation.reverse());
});