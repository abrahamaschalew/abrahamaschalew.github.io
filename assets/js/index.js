const openSlideMenu = () => {
  document.getElementById("side-menu").style.width = "250px";
};

const closeSlideMenu = () => {
  document.getElementById("side-menu").style.width = "0";
};

let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething(scrollPos) {
  // Do something with the scroll position
  let doc = document.getElementById("nav-container-id");

  if (scrollPos > 300) {
    doc.classList.add("nav-white");
  } else {
    doc.classList.remove("nav-white");
  }
}

document.addEventListener("scroll", function (e) {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function () {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});

function scrollMy(pos) {
  setTimeout(() => {
    const element = document.getElementById(pos);
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 100);
}
