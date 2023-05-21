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

var tlArr_2 = new Array();//TimelineMax({paused:true});

let buttons = gsap.utils.toArray(".shadow-btn-container");
buttons.forEach((button,index) => {
    let shadow=button.querySelector(".my-shadow-clr-1");
    if(!shadow){
        shadow=button.querySelector(".my-shadow-clr-2");
    }
    console.log(shadow);

    tlArr_2[index]=new TimelineMax({paused:true});

    tlArr_2[index].to(shadow,{top: "0px", left:"0px",duration: 1});
    button.addEventListener("mouseenter", () => tlArr_2[index].play());
    button.addEventListener("mouseleave",()=> tlArr_2[index].reverse());
});

