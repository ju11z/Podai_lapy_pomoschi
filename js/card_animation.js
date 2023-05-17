var expandsRight = document.getElementsByClassName("expand-right");
console.log(expandsRight);

Array.from(expandsRight).forEach(function(elem){
    expandRow=elem.closest('.expand-row');
    expandCenter=expandRow.querySelector('.expand-center');
    expandLeft=expandRow.querySelector('.expand-left');
    imgDescr=elem.querySelector('.img-descr');

    var tl = new TimelineMax({paused: true});

    tl.add('start')
        .to(expandLeft, {width: "-=50%",xPercent:100, transformOrigin:"100% 50%",duration:1},'start')
        .to(expandCenter, {width: "-=50%",xPercent:200,transformOrigin:"100% 50%", duration:1},'start')
        .to(imgDescr, {left:"90%", borderRadius:"0 30px 30px 0", width:"110%", duration:1},'start');

    elem.addEventListener("mouseover",
        ()=>{
            tl.timeScale(1).play();
        }
    )
    elem.addEventListener("mouseleave",
        ()=>{
            tl.timeScale(tl.duration()).reverse();
            }
        )
});

