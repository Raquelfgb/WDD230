const images = document.querySelectorAll("[data]");

function loadImage(img) {
    const src = img.getAttribute("data");
    if (!src) {
        return;
    }
    img.src = src;
    img.removeAttribute("data");
}

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px -500px 0px"
};

const imgObserve = new interObserver((entries, imgObserve) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            loadImage(entry.target);
            imgObserve.unobserve(entry.target);
        }
    })
}, imgOptions);

images.forEach(image => {
    imgObserve.observe(image);
});