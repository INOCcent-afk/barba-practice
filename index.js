function pageTransition() {
  const tl = gsap.timeline();

  tl.to(".transition", {
    duration: 0.5,
    transformOrigin: "right",
    scaleX: 1,
  });
  tl.to(".transition", {
    duration: 1,
    transformOrigin: "right",
    scaleX: 0,
  });
}

function contentAnimation() {
  const tl = gsap.timeline();
}

function delay(n) {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

barba.init({
  sync: true,

  transitions: [
    {
      async leave(data) {
        const done = this.async();

        pageTransition();
        await delay(500);
        done();
      },
    },
  ],
});
