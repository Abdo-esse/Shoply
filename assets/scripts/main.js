// hero section change :
let randomNumber;
const heroSection = document.getElementById("hero-section");
const imagesHero = [
  '../assets/images/banner/banner1.png',
  '../assets/images/banner/banner2.jpg',
  '../assets/images/banner/banner3.jpg',
]
function changeBackground() {
  randomNumber = Math.floor(Math.random() * 3) + 0;
  heroSection.style.backgroundImage = `url('${imagesHero[randomNumber]}')`;
  setTimeout(changeBackground, 5000);
}

changeBackground();
