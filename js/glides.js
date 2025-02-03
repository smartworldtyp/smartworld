
var glide = new Glide("#intro", {
    type: "carousel",
    perView: 1,
    gap: 100,
    autoplay: 2000,
    hoverpause: false, 
    animationDuration: 1000, // Set the transition duration to 1000ms (1 second)
    animationTimingFunc: 'ease-in-out',
    pagination: {
        el: ".glide__bullet",
    },
    arrows: {
        prev: ".slider-prev",
        next: ".slider-next",
    },
});
glide.mount();
