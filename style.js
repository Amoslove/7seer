

const colEl  = document.querySelector(".row");
const observer = new IntersectionObserver(function (entries) {
  const ent = entries[0];


  if (ent.isIntersecting === false) {
    console.log(ent);
    document.querySelector('header').classList.add("top-nav");
  }
  if (ent.isIntersecting === true) {
    console.log(ent);
    document.querySelector('header').classList.remove("top-nav");
  }
}, {
  // In the viewport
   root: null,
  threshold: 0,
    rootMargin:"-40px",
});
observer.observe(colEl);






