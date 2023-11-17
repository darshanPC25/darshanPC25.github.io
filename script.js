
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

gsap.from(".nlink",{
    stagger: .1,
    y:10,
    duration:2,
    ease:Power2,
    opacity:0

})

Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    scale:2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 0.5,
  });

  Shery.textAnimate("#headings h1" , {
    style: 2,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

  gsap.from(".anim2",{
    y:30,
    stagger:.3,
    opacity:0,
   ease:Expo,
   duration:1.2
  })

  Shery.imageEffect("#imagentext img",{
    style:5,
    config:{"uFrequencyX":{"value":18.18,"range":[0,100]},"uFrequencyY":{"value":18.18,"range":[0,100]},"uFrequencyZ":{"value":30.58,"range":[0,100]},"geoVertex":{"range":[1,64],"value":24.95},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.75},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.56,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
  })

  Shery.imageEffect("#susimagewrapper img",{
    style:5,
    config:{"a":{"value":1.74,"range":[0,30]},"b":{"value":0.36,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6666666666666666},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.46,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
  })
  Shery.imageEffect(".anim3 img",{
    style:5,
    config:{"a":{"value":1.74,"range":[0,30]},"b":{"value":0.36,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6666666666666666},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.46,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
  })

  Shery.imageEffect("#bimg",{
    style:4,
    config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.16,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.205738582173467},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":1.81,"range":[1,15]},"durationOut":{"value":0.75,"range":[0.1,5]},"durationIn":{"value":0.87,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.83,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":32}},"discard_threshold":{"value":0.68,"range":[0,1]},"antialias_threshold":{"value":0.02,"range":[0,0.1]},"noise_height":{"value":0.21,"range":[0,2]},"noise_scale":{"value":7.44,"range":[0,100]}},
    gooey:true
  })

  document.querySelector("#ftext button")
  .addEventListener("mouseover",function(){
    gsap.to("#future video",{
        opacity:1,
        duration:1,
        ease:Power4
    })
  })

  document.querySelector("#ftext button")
  .addEventListener("mouseleave",function(){
    gsap.to("#future video",{
        opacity:0,
        duration:1,
        ease:Power4
    })

  })


