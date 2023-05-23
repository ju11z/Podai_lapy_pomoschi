//пункты меню
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


//кнопки
var tlArr_2 = new Array();//TimelineMax({paused:true});

let buttons = gsap.utils.toArray(".shadow-btn-container");
buttons.forEach((button,index) => {
    let shadow=button.querySelector(".my-shadow-clr-1");
    if(!shadow){
        shadow=button.querySelector(".my-shadow-clr-2");
    }

    tlArr_2[index]=new TimelineMax({paused:true});

    tlArr_2[index].to(shadow,{top: "0px", left:"0px",duration: 1});
    button.addEventListener("mouseenter", () => tlArr_2[index].play());
    button.addEventListener("mouseleave",()=> tlArr_2[index].reverse());
});

//карточки

var tlArr_3 = new Array();

let bounces = gsap.utils.toArray(".hover-bounce");
bounces.forEach((bounce,index) => {

    tlArr_3[index]=new TimelineMax({paused:true});

    tlArr_3[index].to(bounce,{y:20, ease:"bounce.out", duration: 1});
    bounce.addEventListener("mouseenter", () => tlArr_3[index].play());
    bounce.addEventListener("mouseleave",()=> tlArr_3[index].reverse());
});

//подменю

let submenuItems = gsap.utils.toArray(".submenu-item");
console.log(submenuItems.length);

var tlArr_4 = new Array();//TimelineMax({paused:true});

submenuItems.forEach((submenuItem,index)=>{
    //let menuItemAnimation=gsap.to(menuItem,{backgroundColor: "green", duration: 1});
    console.log(submenuItem);
    icon=submenuItem.querySelector(".icon");
    console.log(icon);
    img=icon.querySelector("img");
    console.log(img);
    tlArr_4[index]=new TimelineMax({paused:true});
    tlArr_4[index].to(img,{fill: "red", duration: 1});

    img.addEventListener("mouseenter", () => tlArr_4[index].play());
    img.addEventListener("mouseleave", () => tlArr_4[index].reverse());
})

//пункты мобильного меню

let mobileMenuItems = gsap.utils.toArray(".mobile-menu-item");

var tlArr_5 = new Array();//TimelineMax({paused:true});

mobileMenuItems.forEach((mobileMenuItem,index)=>{
    //let menuItemAnimation=gsap.to(menuItem,{backgroundColor: "green", duration: 1});
    tlArr_5[index]=new TimelineMax({paused:true});
    tlArr_5[index].to(mobileMenuItem,{backgroundColor: hoverColor, duration: 1});

    mobileMenuItem.addEventListener("mouseenter", () => tlArr_5[index].play());
    mobileMenuItem.addEventListener("mouseleave", () => tlArr_5[index].reverse());
})


