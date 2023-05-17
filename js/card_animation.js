var expandsRight = document.getElementsByClassName("expand-right");
console.log(expandsRight);

Array.from(expandsRight).forEach(function(elem){
    expandRow=elem.closest('.expand-row');
    expandCenter=expandRow.querySelector('.expand-center');
    expandLeft=expandRow.querySelector('.expand-left');
    imgDescr=elem.querySelector('.img-descr');

    var tl_r = new TimelineMax({paused: true});

    tl_r.add('start')
        .to(expandLeft, {width: "-=50%",xPercent:100, transformOrigin:"100% 50%",duration:1},'start')
        .to(expandCenter, {width: "-=50%",xPercent:200,transformOrigin:"100% 50%", duration:1},'start')
        .to(imgDescr, {left:"90%", borderRadius:"0 50px 50px 0", width:"110%", duration:1},'start');

    elem.addEventListener("mouseover",
        ()=>{
            tl_r.timeScale(1).play();
        }
    )
    elem.addEventListener("mouseleave",
        ()=>{
            tl_r.timeScale(tl_r.duration()).reverse();
            }
        )
});

var expandsLeft = document.getElementsByClassName("expand-left");
console.log(expandsLeft);

Array.from(expandsLeft).forEach(function(elem){
    expandRow=elem.closest('.expand-row');
    expandCenter=expandRow.querySelector('.expand-center');
    expandRight=expandRow.querySelector('.expand-right');
    imgDescr=elem.querySelector('.img-descr');

    var tl_l = new TimelineMax({paused: true});

    tl_l.add('start')
        .to(expandRight, {width: "-=50%", transformOrigin:"100% 50%",duration:1},'start')
        .to(expandCenter, {width: "-=50%",xPercent:-100,transformOrigin:"100% 50%", duration:1},'start')
        .to(imgDescr, {left:"-=100%", borderRadius:"50px 0 0 50px", width:"110%", duration:1},'start');

    elem.addEventListener("mouseover",
        ()=>{
            tl_l.timeScale(1).play();
        }
    )
    elem.addEventListener("mouseleave",
        ()=>{
            tl_l.timeScale(tl_l.duration()).reverse();
        }
    )
});

var expandsCenter = document.getElementsByClassName("expand-center");
console.log(expandsCenter);

Array.from(expandsCenter).forEach(function(elem){
    expandRow=elem.closest('.expand-row');
    expandLeft=expandRow.querySelector('.expand-left');
    expandRight=expandRow.querySelector('.expand-right');
    imgDescr=elem.querySelector('.img-descr');
    img=elem.querySelector('.bordered-img');

    var tl_c = new TimelineMax({paused: true});

    tl_c.add('start')
        .to(expandRight, {width: "-=50%", transformOrigin:"100% 50%",duration:1},'start')
        .to(expandLeft, {width: "-=50%",xPercent:100,transformOrigin:"100% 50%", duration:1},'start')
        .to(imgDescr, {left:"+=40%",width:"110%", borderRadius:"0 50px 50px 0", duration:1},'start')
        .to(img,{left:"-=50%", duration:1},'start');

    elem.addEventListener("mouseover",
        ()=>{
            tl_c.timeScale(1).play();
        }
    )
    elem.addEventListener("mouseleave",
        ()=>{
            tl_c.timeScale(tl_c.duration()).reverse();
        }
    )
});

