const groups = gsap.utils.toArray(".accordion-group");
const menus = gsap.utils.toArray(".accordion-menu");
const animations = [];

groups.forEach(group => createAnimation(group));

menus.forEach(menu => {
    menu.addEventListener("click", () => toggleAnimation(menu));
});

function toggleAnimation(menu) {
    // Save the current state of the clicked animation
    const selectedReversedState = menu.animation.reversed();

    // Reverse all animations
    animations.forEach(animation => animation.reverse());

    // Set the reversed state of the clicked accordion element to the opposite of what it was before
    menu.animation.reversed(!selectedReversedState);
}

function createAnimation(element) {
    const menu = element.querySelector(".accordion-menu");
    const box  = element.querySelector(".accordion-content");
    const icon= menu.querySelector(".accordion-menu-icon");

    gsap.set(box, { height: "auto"});


    // Keep a reference to the animation on the menu item itself
    const tween = gsap.from(box, {
        height: 0,
        duration: 0.5,
        reversed: true
    });

    menu.animation = tween;
    animations.push(tween);
}