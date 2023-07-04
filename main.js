const header = document.querySelector(".header");
const bars = document.querySelector(".fa-bars");
const slider = document.querySelectorAll(".slider");

let count = 0;
slider.forEach((element, index) => {
  element.style.left = `${index * 100}%`;
});

const slideImage = () => {
  slider.forEach((element, index) => {
    element.style.transform = `translateX(-${count * 100}%)`;
  });
};

setInterval(() => {
  count++;
  if (count >= slider.length) {
    count = 0;
  }
  slideImage();
},5000);

let xshow = false;

const toggle = () => {
  header.classList.toggle("active");
  if (xshow === false) {
    bars.classList = "fa-solid fa-xmark";
    xshow = true;
  } else {
    bars.classList = "fa-sharp fa-solid fa-bars";
    xshow = false;
  }
};

bars.addEventListener("click", toggle);


const curYear = new Date().getFullYear();
document.getElementById("year").innerText = curYear;
document.getElementById("year").style.color = "#ec6090";