import './style.css';
const API_KEY=import.meta.env.VITE_NASA_API_KEY;
let nasaDailyImage = "";
let backgroundMode = "nasa";
fetch( `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
  if (data.media_type === "image") {
    nasaDailyImage= data.url
      const img = new Image();

      img.onload =() => {
        if (backgroundMode === "nasa") {
document.querySelector("#spaceBackground").style.backgroundImage = `url("${data.url}")`;
      }
document.querySelector("#loadingScreen").style.display = "none";
  };

      img.src = data.url;
    } else {
      document.querySelector("#loadingScreen").style.display = "none";
    }
})
.catch(err => {
  document.querySelector("#loadingScreen").style.display = "none";
});
const quotes = [
  {
    text: "The important thing is to never stop questioning.",
    author: "Albert Einstein"
  },
  {
    text: "Somewhere, something incredible is waiting to be known.",
    author: "Carl Sagan"
  },
  {
    text: "The universe is full of magical things patiently waiting for our wits to grow sharper.",
    author: "Eden Phillpotts"
  },
  {
    text: "Look up at the stars and not down at your feet.",
    author: "Stephen Hawking"
  },
  {
    text: "We are all in the gutter, but some of us are looking at the stars.",
    author: "Oscar Wilde"
  }
];
const randomQuote = quotes[ Math.floor(Math.random()* quotes.length)];
document.querySelector("#quoteText").textContent=`"${randomQuote.text}"`;
document.querySelector("#quoteAuthor").textContent=`-${randomQuote.author}`;
const searchInput = document.querySelector("#searchInput");
searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const query = searchInput.value;
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  }
});
let autoClockColor = false;
function updateClock() {
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  document.querySelector("#clock").textContent =
    `${hours}:${minutes}:${seconds}`;
    const clock = document.querySelector("#clock");
const currentHour = now.getHours();
if (autoClockColor) {
clock.classList.remove("night");
if (currentHour >= 5 && currentHour < 12) {
  clock.style.color = "#7ddcff"; // 🌅 Morning
} else if (currentHour >= 12 && currentHour < 17) {
  clock.style.color = "#ffe066"; // ☀️ Day
} else if (currentHour >= 17 && currentHour < 20) {
  clock.style.color = "#ff9f43"; // 🌇 Evening
} else {
  clock.style.color="#1A1A1A"; // 🌙 Night 
}
}
}
updateClock();
setInterval(updateClock, 1000);
const menuButton=document.querySelector("#menuButton");
const sidebar=document.querySelector("#sidebar");
menuButton.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});
const quoteButton= document.querySelector("#quoteButton");
const quote= document.querySelector("#quote");
quoteButton.addEventListener("click", () =>{
  if (quote.style.display === "none"){
    quote.style.display = "block";
  } else {
    quote.style.display = "none";
  }
});
const todoButton = document.querySelector("#todoButton");
const todoPanel = document.querySelector("#todoPanel");
todoButton.addEventListener("click",()=>{
  todoPanel.style.display=
  todoPanel.style.display=== "block" ? "none" : "block";
  document.querySelector("#backgroundPanel").style.display = "none";
});
let todoDragging= false;
let todoOffsetX= 0;
let todoOffsetY= 0;
todoPanel.addEventListener("mousedown", (e) => {
  if(e.target.classList.contains("todoInput")) return;
  todoDragging= true;
  const rect  =todoPanel.getBoundingClientRect();
  todoOffsetX = e.clientX - rect.left;
  todoOffsetY = e.clientY - rect.top;

  todoPanel.style.right = "auto";
  todoPanel.style.transform = "none";
  todoPanel.style.left = `${rect.left}px`;
  todoPanel.style.top = `${rect.top}px`;
});
document.addEventListener("mousemove", (e) => {
  if (!todoDragging) return;

  todoPanel.style.left = `${e.clientX - todoOffsetX}px`;
  todoPanel.style.top = `${e.clientY - todoOffsetY}px`;
});

document.addEventListener("mouseup", () => {
  todoDragging = false;
});
const backgroundButton=document.querySelector("#backgroundButton");
const backgroundPanel=document.querySelector("#backgroundPanel");
backgroundButton.addEventListener("click", () => {
backgroundPanel.style.display=
backgroundPanel.style.display=== "block"? "none" :"block";
todoPanel.style.display = "none";
});
const nasaButton = document.querySelector("#NASA");

nasaButton.addEventListener("click", () => {
  if (nasaDailyImage) {
    document.querySelector("#spaceBackground").style.backgroundImage =
      `url("${nasaDailyImage}")`;

    document.querySelector("#spaceBackground").style.backgroundColor = "";
  }
});
const colorButtons=document.querySelectorAll(".bgColor");
const spaceBackground=document.querySelector("#spaceBackground");
colorButtons.forEach(button => {
  button.addEventListener("click", () => {
    const selectedColor = button.dataset.color;
backgroundMode = "color";
    spaceBackground.style.backgroundImage = "none";
    spaceBackground.style.backgroundColor = selectedColor;
  });
});
const nasaWallpapers = document.querySelectorAll(".nasaWallpaper");
nasaWallpapers.forEach(button => {
  const imageURL=button.dataset.bg;
  button.style.backgroundImage=`url("${imageURL}")`;
  button.addEventListener("click",() => {
    backgroundMode="gallery";
    spaceBackground.style.backgroundImage=
    `url("${imageURL}")`;
    spaceBackground.style.backgroundColor ="";
  });
});
const clockFontName = document.querySelector("#clockFontName");
const prevClockFont = document.querySelector("#prevClockFont");
const nextClockFont = document.querySelector("#nextClockFont");

const clockFonts = [
  { name: "Digital Ops", font: "Black Ops One" },
  { name: "Audiowide", font: "Audiowide" },
  { name: "Michroma", font: "Michroma" },
  { name: "Bruno Ace", font: "Bruno Ace" },
  { name: "Oxanium", font: "Oxanium" }
];

let currentFont = 0;

function changeClockFont() {
  const selected = clockFonts[currentFont];

  clockFontName.textContent = selected.name;
  clockFontName.style.fontFamily = `"${selected.font}", sans-serif`;
  clock.style.fontFamily = `"${selected.font}", sans-serif`;
}

nextClockFont.addEventListener("click", () => {
  currentFont++;

  if (currentFont >= clockFonts.length) {
    currentFont = 0;
  }

  changeClockFont();
});

prevClockFont.addEventListener("click", () => {
  currentFont--;

  if (currentFont < 0) {
    currentFont = clockFonts.length - 1;
  }

  changeClockFont();
});
const clockStyleButton = document.querySelector("#clockstyleButton");
const clockStyleSelector = document.querySelector("#clockStyleSelector");

clockStyleButton.addEventListener("click", () => {
  clockStyleSelector.style.display =
    clockStyleSelector.style.display === "flex" ? "none" : "flex";
});
const clockColorButton = document.querySelector("#clockcolorButton");
const clockColorSelector = document.querySelector("#clockColorSelector");

clockColorButton.addEventListener("click", () => {
  clockColorSelector.style.display =
    clockColorSelector.style.display === "flex" ? "none" : "flex";
});
const clockColors =[
   { name: "White", color: "#f5f7ff" },
  { name: "Cyan", color: "#7df9ff" },
  { name: "Blue", color: "#4da6ff" },
  { name: "Violet", color: "#b56cff" },
  { name: "Solar", color: "#ff9f43" },
  { name: "Black", color: "#1a1a1a" }
];
const clockColorName = document.querySelector("#clockColorName");
const prevClockColor = document.querySelector("#prevClockColor");
const nextClockColor = document.querySelector("#nextClockColor");
let currentColor=0;
function  changeClockColor(){
  const selected=clockColors[currentColor];
  clockColorName.textContent=selected.name;
  clock.style.color=selected.color;
}
nextClockColor.addEventListener("click", () => {
  currentColor++;

  if (currentColor >= clockColors.length) {
    currentColor = 0;
  }

  changeClockColor();
});

prevClockColor.addEventListener("click", () => {
  currentColor--;

  if (currentColor < 0) {
    currentColor = clockColors.length - 1;
  }

  changeClockColor();
});
const autoColorButton = document.querySelector("#autoColorButton");

autoColorButton.addEventListener("click", () => {
  autoClockColor = !autoClockColor;

  if (autoClockColor) {
    autoColorButton.classList.add("active");
    updateClock();
  } else {
    autoColorButton.classList.remove("active");
    changeClockColor();
  }
});

