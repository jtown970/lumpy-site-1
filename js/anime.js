var btn = document.getElementById('cta');
var btn2 = document.getElementById('cta2');

btn.onclick = function() {
var morphing = anime({
    targets: '.polymorph',
    points: [
    { value: '215,110 0,110 0,0 47.7,0 67,76'},
    { value: '215,110 0,110 0,0 0,0 67,76'}
    ],
    easing: 'easeOutQuad',
    duration: 1200,
    loop: false 
});

anime({
    targets: '#blip',
    opacity: 1,
    duration: 2000,
    translateY: 150,
})

btn2.onclick = function() {
    var morphing = anime({
        targets: '.polymorph',
        points: [
        { value: '215,110 0,110 0,0 47.7,0 67,76'},
        { value: '215,110 0,110 0,0 47.7,0 215,0  '}
        ],
        easing: 'easeOutQuad',
        duration: 1000,
        loop: false 
    });
    anime({
        targets: '#blip',
        opacity: 0,
        duration: 500,
        translateY: -800,
    })
};
}

anime({
    targets: '.line-drawing-demo .lines path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
  });