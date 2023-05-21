const hoverColor="rgba(234,139,27,0.4)";

let menuItems = gsap.utils.toArray(".menu-item");

var tlArr = new Array();//TimelineMax({paused:true});

menuItems.forEach((menuItem,index)=>{
    //let menuItemAnimation=gsap.to(menuItem,{backgroundColor: "green", duration: 1});
    tlArr[index]=new TimelineMax({paused:true});
    tlArr[index].to(menuItem,{backgroundColor: hoverColor, duration: 1});

    menuItem.addEventListener("mouseenter", () => tlArr[index].play());
    menuItem.addEventListener("mouseleave", () => tlArr[index].reverse());
})
/*
let buttons = gsap.utils.toArray(".shadow-btn-container");
buttons.forEach((button) => {
    let shadow=button.querySelector(".my-shadow");
    console.log(shadow);
    let shadowAnimation=gsap.to(shadow,{opacity: 1, duration: 1});
    button.addEventListener("mouseenter", () => shadowAnimation.play());
    button.addEventListener("mouseleave",()=>shadowAnimation.reverse());
});
*/
