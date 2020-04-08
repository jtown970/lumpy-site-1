anime ({
    targets: "h2.right",
    translateX: [{value: -300, duration: 0},
         {value: 0, duration: 5000}],
});

anime ({
    targets: "div.model",
    translateY: [{value: 100, duration: 0},
         {value: 0, duration: 2500}],
});

anime({
    targets: 'button.btn',
    // left: '240px',
    // backgroundColor: '#FFF',
    borderRadius: ['0%', '50%'],
    easing: 'easeInOutQuad',
    duration: 2700
  });

anime({
    targets: 'button.dataset.modalTarget',
    // translateX: 50,
    scale: 1,
    rotate: '1turn'
  });