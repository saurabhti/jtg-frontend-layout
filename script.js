function hamburger() {
  let nav = document.getElementById("mainNav");
  if (nav) {
    nav.classList.toggle("active");
  }
}

document.addEventListener("scroll", function () {
  if (scrollY >= 50) {
    document.querySelector(".header").style.backgroundColor = "#2090f8";
    document.querySelector(".header").style.boxShadow =
      "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px";
  } else if (scrollY < 50) {
    document.querySelector(".header").style.backgroundColor = "transparent";
    document.querySelector(".header").style.boxShadow = "none";
  }
});

const video = document.getElementById("video");
const controlBtn = document.getElementById("video-control");

controlBtn.addEventListener("click", () => {
  video.currentTime = 0;
  video.play();
  controlBtn.style.display = "none";
});

video.addEventListener("click", () => {
  if (!video.paused) {
    video.pause();
    controlBtn.style.display = "block";
  }
});

video.addEventListener("ended", () => {
  controlBtn.style.display = "block";
});

const swiper = new Swiper(".testimonial-slider", {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    bulletClass: "custom-bullet", // Custom class
    bulletActiveClass: "custom-bullet-active", // Active class
    renderBullet: function (index, className) {
      return `<span class="${className}"></span>`;
    },
  },
});

const form = document.getElementById("contactForm");
const modal = document.getElementById("successModal");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent actual form submission

  // Show modal
  modal.style.display = "flex";
  document.body.classList.add("no-scroll");

  // Reset form (optional)
  form.reset();
});

function closeModal() {
  modal.style.display = "none";
  document.body.classList.remove("no-scroll");
}
