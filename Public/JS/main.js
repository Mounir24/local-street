


// APPEAR PRODUCTS IMAGES 
function swipImg(pic) {
    document.querySelector('.img__prev').src = pic;
}



// SCROLL REVEAL ANIMATION
// BANNER 
ScrollReveal().reveal(".banner__content", {
    reset: true,
    distance: "120px",
    duration: 1000,
    origin: "top",
    interval: 200,
});

// BANNER PRODUCT 1
ScrollReveal().reveal(".mode1", {
    reset: true,
    distance: "120px",
    duration: 1000,
    origin: "right",
    interval: 300,
});

// BANNER PRODUCT 2
ScrollReveal().reveal(".mode2", {
    reset: true,
    distance: "120px",
    duration: 1000,
    origin: "top",
    interval: 450,
});

// BANNER PRODUCT 3
ScrollReveal().reveal(".mode3", {
    reset: true,
    distance: "120px",
    duration: 1000,
    origin: "left",
    interval: 400,
});

// PRODUCTS BOX 1
ScrollReveal().reveal(".box1", {
    reset: true,
    distance: "120px",
    duration: 1000,
    origin: "left",
    interval: 400,
});
// PRODUCTS BOX 2
ScrollReveal().reveal(".box2", {
    reset: true,
    distance: "120px",
    duration: 1000,
    origin: "top",
    interval: 460,
});
// PRODUCTS BOX 1
ScrollReveal().reveal(".box3", {
    reset: true,
    distance: "120px",
    duration: 1000,
    origin: "right",
    interval: 540,
});

// ORDER SECTION ANIMATION

ScrollReveal().reveal(".form__wrapper", {
    reset: true,
    distance: "120px",
    duration: 1000,
    origin: "right",
    interval: 320,
});
ScrollReveal().reveal(".product_preview", {
    reset: true,
    distance: "120px",
    duration: 1000,
    origin: "left",
    interval: 330,
});