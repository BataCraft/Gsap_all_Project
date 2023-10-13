var a = gsap .timeline({
    scrollTrigger:{
        trigger:".two",
        start:"0% 95%",
        end:"50% 50%",
        scrub:"true",
        // markers:true
    }
})

a.to("#fanta",{
    top:"125%",
    left:"7%"
}, 'orange')

a.to("#orange1",{
    top:"155%",
    left:"25%"
}, 'orange')


a.to("#orangef",{
    top:"155%",
    right:"0%",
}, 'orange')


a.to("#leaf1",{
    top:"110%",
    left:"75%",
    width:"15%",
    rotate:"-30deg"
}, 'orange')


a.to("#leaf2",{
    top:"110%",
    left:"0%",
    width:"10%",
    rotate:"-30deg"
}, 'orange')


var b = gsap .timeline({
    scrollTrigger:{
        trigger:".third",
        start:"0% 95%",
        end:"40% 50%",
        scrub:"true",
        // markers:true
    }
})

b.from("#lm",{
    rotate:"-90deg",
    left: "-150%",
    top:"110%",
    duration:2
}, 'ca')

b.from("#ap",{
    rotate:"90deg",
    left: "50%",
    top:"110%",
    duration:2
}, 'ca')


b.from("#sp",{
    rotate:"-90deg",
    left: "12%",
    top:"110%",
    width:"130%"
},'pa')


b.from("#coke",{
    rotate:"90deg",
    left: "-12%",
    top:"110%"
},'pa')


b.to("#orange1",{
    left: "40%",
    top:"216%",
    duration:2,
    width:"20vw"
}, 'ca')


b.to("#fanta",{
    left: "36%",
    top:"220%",
    duration:0.5,
    width:"27%"
},'pa')