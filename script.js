"use strict";

const footerGrid = document.querySelector(".footer-grid");

const footer = document.querySelector("footer");

const main = document.querySelector("main");

const mailPopup = document.querySelector(".mail-popup");

const mail = document.querySelector(".fa-envelope");

const width = window.innerWidth;

// Menu toggle
document.querySelector("#bars-div").addEventListener("click", function () {
  document.querySelector("#menu").classList.toggle("hidden");
});

//// Footer appear/disappear ////

// When scroll on main, reduce size of footer

const hideFooter = function () {
  footerGrid.style.display = "none";
  footer.style.height = "5%";
  main.style.height = "70%";
};

main.addEventListener(
  "scroll",
  function () {
    if (width <= 1200) {
      hideFooter();
      // footerGrid.style.display = "none";
      // footer.style.height = "5%";
      // main.style.height = "70%";
    }
  },
  { passive: true }
);

// When clicking on arrow, return footer to original size

// Show footer

const showFooter = function () {
  if (width <= 1200) {
    footerGrid.style.display = "grid";
    footer.style.height = "15%";
    main.style.height = "60%";
  }
};

document.querySelector("#arrow").addEventListener("click", function () {
  showFooter();
});

// // Lazy load img
// const imgTargets = document.querySelectorAll("img[data-src]");

// const loadImg = function (entries, obs) {
//   const [entry] = entries;

//   if (!entry.isIntersecting) return;
//   entry.target.src = entry.target.dataset.src;

//   entry.target.addEventListener("load", function (e) {
//     e.target.classList.remove("lazy-load");
//   });
// };

// const imgObserver = new IntersectionObserver(loadImg, {
//   root: null,
//   treshold: 0,
// });

// imgTargets.forEach((img) => imgObserver.observe(img));

// Show the mail adress on click
mail.addEventListener("click", function () {
  mailPopup.classList.toggle("hidden");
});

// Hide the mail adress on X click
mailPopup.addEventListener("click", function (e) {
  const btn = e.target.closest(".fa-times");
  if (!btn) return;
  mailPopup.classList.add("hidden");
});

// Select the mail adress on click
mailPopup.addEventListener("click", function (e) {
  const text = e.target.closest("input");
  if (!text) return;
  const value = text.value;
  text.setSelectionRange(0, 99999);
  text.select();
});
