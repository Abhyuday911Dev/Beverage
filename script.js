var st = gsap.timeline({
    scrollTrigger: {
        trigger: "#release",
        // markers: true,
        start: "0% 55%",
        end: "100% 90%",
        scrub: 2,
    }
});

st
    .to('#bossbeer', {
        rotation: "-30"
    })

var st1 = gsap.timeline({
    scrollTrigger: {
        trigger: "#avail",
        // markers: true,
        start: "0% 90%",
        end: "100% 90%",
        scrub: 0.1,
    }
});

st1
    .to('#bossbeer', {
        scale: 0.7,
        x: "3.5vw",
        y: "17vh",
        opacity: 0
    })
    // .then(function(){
    //     document.querySelector("#bossbeer").style.display="none";
    // })
// var scrollTop = document.getElementById("slide").scrollTop;
// console.log(scrollTop);
window.addEventListener('scroll', (event)=>{
    scroll = this.scrollY;
    document.querySelector('#bossbeer').style.top= scroll + "px";
})

// gsap.to("#bottle img",{
//     y: -200,
//     scrollTrigger: {
//         trigger: "#avail",
//         markers: true,
//         start: "0% 10%",
//         end: "100% 90%",
//         scrub: 2,
//         stagger: 0.1
//     }
// })

var sti = gsap.timeline({
    scrollTrigger: {
        trigger: "#avail",
        // markers: true,
        start: "0% 50%",
        end: "100% 50%",
        scrub: 2,
    }
});

sti
    .to("#bottle p",{
        opacity: 0,
    })
    .to("#bottle",{
        y: "-200",
        stagger: 0.2,
    })