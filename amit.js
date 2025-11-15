
gsap.from(".logo img", {
    duration: 1.5,
    opacity: 0,
    y: -50,
    scale: 0.5,
    ease: "elastic.out(1, 0.5)"
});


gsap.from("#menu h4", {
    duration: 1,
    y: -30,
    opacity: 0,
    stagger: 0.2,
    delay: 0.5,
    ease: "power3.out"
});


gsap.from("#menu i", {
    duration: 1,
    x: 50,
    opacity: 0,
    stagger: 0.2,
    delay: 1,
    ease: "power3.out"
});


gsap.from(".video-text", {
    duration: 2,
    opacity: 0,
    y: 50,
    scale: 0.8,
    ease: "back.out(1.7)",
    delay: 1.2
});


gsap.from(".img-container", {
    duration: 1,
    opacity: 0,
    y: 50,
    stagger: 0.3,
    ease: "power2.out"
});


const overlayTexts = document.querySelectorAll(".overlay-text");
overlayTexts.forEach(text => {
    text.addEventListener("mouseenter", () => {
        gsap.to(text, {
            textShadow: "0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff",
            duration: 0.3,
            repeat: 1,
            yoyo: true
        });
    });
});


gsap.utils.toArray("#Pics, #ram, #poor, #main, #ufff, #wife").forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out"
    });
});

gsap.to(".video-text", {
    y: "-=10",        // move up 10px
    duration: 2,
    yoyo: true,
    repeat: -1,       // infinite
    ease: "sine.inOut"
});


gsap.utils.toArray(".img-container").forEach((img, index) => {
    const delay = index * 0.2; // stagger start
    gsap.to(img, {
        y: "-=10",       // subtle up
        x: "+=5",        // slight sideways drift
        rotation: "1deg", // tiny rotation for realism
        duration: 3 + Math.random() * 2, // random duration for natural movement
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        delay: delay
    });
});


window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    
    gsap.to(".video-text", {
        y: scrollY * 0.2,
        ease: "none",
        overwrite: "auto"
    });

    
    gsap.utils.toArray(".img-container").forEach((img, i) => {
        gsap.to(img, {
            y: scrollY * (0.05 + i * 0.02),
            ease: "none",
            overwrite: "auto"
        });
    });
});


gsap.utils.toArray(".overlay-text").forEach(text => {
    gsap.to(text, {
        textShadow: "0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 20px #00ffff",
        duration: 0.4,
        repeat: -1,
        yoyo: true,
        delay: Math.random() * 2
    });
});




gsap.from(".pop", {
    opacity: 0,
    y: 80,
    duration: 1.6,
    ease: "power3.out"
});


gsap.to(".pop img", {
    y: -15,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});


gsap.from(".pop h1", {
    opacity: 0,
    y: 40,
    duration: 1.2,
    delay: 0.5,
    ease: "power2.out"
});


gsap.from(".join-btn", {
    opacity: 0,
    scale: 0.6,
    duration: 0.8,
    delay: 0.9,
    ease: "back.out(1.7)"
});

gsap.from(".footer-box", {
    opacity: 0,
    y: 40,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out"
});

gsap.from(".footer-bottom", {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 1,
    ease: "power3.out"
});
