const splide = new Splide('.splide', {
    type: 'loop',
    padding: '5rem',
    width: '95%',
    focus: 'center',
    autoWidth: true,
    autoHeight: true,
    pagination: false,
    speed: 200,
    updateOnMove: true
});

splide.mount();