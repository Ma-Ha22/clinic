// Toggle FAQ accordion
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const item = question.parentElement;
    item.classList.toggle('active');
  });
});
// end
// start nav bar
function toggleDropdown() {
  const menu = document.getElementById("dropdown-menu");
  menu.classList.toggle("show");
}

document.addEventListener("click", function (e) {
  const menu = document.getElementById("dropdown-menu");
  const hamburger = document.querySelector(".hamburger");
  if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
    menu.classList.remove("show");
  }
});
// end


// var swiper = new Swiper(".mySwiper", {
//     loop: true,
//     autoplay: {
//         delay: 3000,
//         disableOnInteraction: false,
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const faqHeaders = document.querySelectorAll(".faq_header");

//     faqHeaders.forEach((header) => {
//       header.addEventListener("click", function () {
//         const faqItem = this.parentElement;
//         const answer = this.nextElementSibling;
//         const icon = this.querySelector(".faq_icon");
//         answer.classList.toggle("show");
//         icon.classList.toggle("rotate");
//       });
//     });
//   });
