var expandsRight = document.getElementsByClassName("expand-right");
console.log(expandsRight);
Array.from(expandsRight).forEach(function(elem){
    elem.addEventListener("mouseover",
        ()=>{
            console.log(elem);
            expandRow=elem.closest('.expand-row');
            expandCenter=expandRow.querySelector('.expand-center');
            expandLeft=expandRow.querySelector('.expand-left');
            imgDescr=elem.querySelector('.imgDescr');
            console.log(expandLeft);

            gsap.to(expandLeft, {scaleX:0.5, transformOrigin:"0% 50%",duration:1});
            gsap.to(expandCenter, {scaleX:0.5,xPercent:25,transformOrigin:"50% 50%", duration:1});
            gsap.to(imgDescr, {left:"100%"});
        }
    )
});


/*
function onHoverOver(e){
    TweenMax.fromTo( learnMore, 0.6, { boxShadow:"0px 0px 0px 0px green"}, {boxShadow:"0px 0px 20px 2px #91f600", repeat:-1, yoyo:true});
}

function onHoverOut(e){
    TweenMax.to( learnMore, 0.2, {boxShadow:"0px 0px 0px 0px yellow"});
}

const left = document.querySelector(".anim-c-left");
const center = document.querySelector(".anim-c-center");
const right = document.querySelector(".anim-c-right");


left.addEventListener('mouseenter', () => {
    gsap.to('.anim-c-left', {scaleX:2,transformOrigin:"0% 50%",borderRadius:"999", duration:1});
    gsap.to('.anim-c-center', {scaleX:0.5,xPercent:+75,borderRadius:"999px",transformOrigin:"50% 50%", duration:1});
    gsap.to('.anim-c-right', {scaleX:0.5,  transformOrigin:"100% 50%",duration:1});
})

center.addEventListener('mouseenter', () => {
    gsap.to('.anim-c-left', {scaleX:0.5,transformOrigin:"0% 50%", duration:1});
    gsap.to('.anim-c-center', {scaleX:2,transformOrigin:"50% 50%", duration:1});
    gsap.to('.anim-c-right', {scaleX:0.5,  transformOrigin:"100% 50%",duration:1});
})

right.addEventListener("mouseenter", () => {
    //gsap.to('.wrap', {xPercent:-60, duration:1, overwrite:true})
    gsap.to('.anim-c-left', {scaleX:0.5, transformOrigin:"0% 50%",duration:1});
    gsap.to('.anim-c-center', {scaleX:0.5,xPercent:-75,transformOrigin:"50% 50%", duration:1});
    gsap.to('.anim-c-right', {scaleX:2, transformOrigin:"100% 50%",duration:1});
});

left.addEventListener('mouseleave', () => {
    gsap.to('.anim-c-left', {scaleX:1,transformOrigin:"0% 50%", duration:1});
    gsap.to('.anim-c-center', {scaleX:1,xPercent:0,transformOrigin:"50% 50%", duration:1});
    gsap.to('.anim-c-right', {scaleX:1,  transformOrigin:"100% 50%",duration:1});
})
center.addEventListener('mouseleave', () => {
    gsap.to('.anim-c-left', {scaleX:1,transformOrigin:"0% 50%", duration:1});
    gsap.to('.anim-c-center', {scaleX:1,transformOrigin:"50% 50%", duration:1});
    gsap.to('.anim-c-right', {scaleX:1,  transformOrigin:"100% 50%",duration:1});
})
right.addEventListener('mouseleave', () => {
    gsap.to('.anim-c-left', {scaleX:1,transformOrigin:"0% 50%", duration:1});
    gsap.to('.anim-c-center', {scaleX:1,xPercent:0,transformOrigin:"50% 50%", duration:1});
    gsap.to('.anim-c-right', {scaleX:1,  transformOrigin:"100% 50%",duration:1});
})

 */