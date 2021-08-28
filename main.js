const navSlide = () => {
  const hamburger = document.getElementById("burger");
  const navUL = document.getElementById("nav-ul");
  const navLinks = document.querySelectorAll(".nav-ul li");

  hamburger.addEventListener("click", () => {
    // toggle
    navUL.classList.toggle("nav-active");

    // animate
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    // burger aniumation
    burger.classList.toggle("toggle");
  });
};

navSlide();

window.addEventListener("scroll", () => {
  const header = document.querySelector("nav");
  header.classList.toggle("sticky", window.scrollY > 50);
});

const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
  threshold: 0,
  rootMargin: "-150px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    } else {
      //entry.target.classList.remove("appear");
      return;
    }
  });
},
appearOptions);

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});

const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".images img");
const original = document.querySelector(".modal img");

previews.forEach((preview) => {
  preview.addEventListener("click", () => {
    modal.classList.add("open");
    original.classList.add("open");

    const originalSrc = preview.getAttribute("data-original");
    original.src = `./img/${originalSrc}`;
  });
});

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    modal.classList.remove("open");
    original.classList.remove("open");
  }
});

const drinks = document.querySelector(".drinks");
const drinkIMG = document.getElementById("drinks-img");
const imgDrinks = [
  "img/drink1.jpg",
  "img/drink2.jpg",
  "img/drink3.jpg",
  "img/drink4.jpg",
];
var i = 0;
var timer;

function changeDrink() {
  drinkIMG.src = imgDrinks[i];
  if (i == 3) {
    i = 0;
  } else {
    i++;
  }
}

function drinkStart(){
  timer = setInterval(changeDrink,200);
}

function drinkStop(){
  drinkIMG.src = imgDrinks[0];
  clearInterval(timer);
}

const food = document.querySelector(".food");
const foodIMG = document.getElementById("food-img");
const imgFood = [
  "img/food1.jpg",
  "img/food2.jpg",
  "img/food3.jpg",
  "img/food4.jpg",
];


function changeFood() {
  foodIMG.src = imgFood[i];
  if (i == 3) {
    i = 0;
  } else {
    i++;
  }
}

function foodStart(){
  timer = setInterval(changeFood,200);
}

function foodStop(){
  foodIMG.src = imgFood[0];
  clearInterval(timer);
}


const desert = document.querySelector(".desert");
const desertIMG = document.getElementById("desert-img");
const imgDesert = [
  "img/desert1.jpg",
  "img/desert2.jpg",
  "img/desert3.jpg",
  "img/desert4.jpg",
];

function changeDesert() {
  desertIMG.src = imgDesert[i];
  if (i == 3) {
    i = 0;
  } else {
    i++;
  }
}


function desertStart(){
  timer = setInterval(changeDesert,200);
}

function desertStop(){
  desertIMG.src = imgDesert[0];
  clearInterval(timer);
}


const reviews = [
  {
    id: 1,
    img: "/lifetea/img/profile-1.jpg",
    name: "Bryan Silva",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ante in nibh mauris cursus mattis molestie a iaculis."
  },
  {
    id: 2,
    img: "/lifetea/img/profile-2.jpg",
    name: "Leonard Wyatt",
    text: "I was with my friends in this restaurant, the restaurant is very good with great food.We tried the fish under the bakery. We recommend everyone and we come back next time!!"
  },
  {
    id: 3,
    img: "/lifetea/img/profile-3.jpg",
    name: "Rose Mccarthy",
    text: "That was amazing meal, the most beautiful place for dinning and enjoying, lovely and kind people... We tried fish from grill with homemade potatos and vegetables. We recommend this place to everyone."
  },


];

const personImg = document.querySelector('.person-img');
const name = document.querySelector('.name');
const review = document.querySelector('.review');

const btnOne = document.querySelector('.one');
const btnTwo = document.querySelector('.two');
const btnThree = document.querySelector('.three');

let currentItem = 0;

function swapReview(){
  if(currentItem == reviews.length - 1){
    currentItem = 0; 
  } else {
    currentItem++ 
  }
  const item = reviews[currentItem];
  personImg.src = item.img;
  name.textContent = item.name;
  review.textContent = item.text;
  
  dots();
};

setInterval(swapReview, 5000);


 function dots(){
  if(currentItem == 0){
    btnOne.classList.add('active');
    btnTwo.classList.remove('active');
    btnThree.classList.remove('active');
  } else if (currentItem == 1){
    btnOne.classList.remove('active');
    btnTwo.classList.add('active');
    btnThree.classList.remove('active');
  } else {
    btnOne.classList.remove('active');
    btnTwo.classList.remove('active');
    btnThree.classList.add('active');
  }
}; 