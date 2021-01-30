const steps = [
  {
    title: "Ei pow, lembra das amizades",
    description: "elas vão estar do teu lado e isso é importante...",
    buttonClass: "button-1",
    svgSrc: "assets/thisisfine.svg",
  },
  {
    title: "A gente não se conhece muito ainda mas tamo junto",
    description: "pode ser pra tour de choro ou tour engraçada ou...",
    buttonClass: "button-2",
    svgSrc: "assets/cat.svg",
  },
  {
    title: "Mesmo pra ver gif de gatinho 😉",
    buttonClass: "button-3",
  },
  {
    title: "Ou pra fazer umas coisas engraçadas como uma mensagem em um site",
    buttonClass: "button-4",
  },
  {
    title: "Ou um joguinho da vida",
    buttonClass: "button-5",
  },
  {
    title: "Ou gifs de gatinhos",
    buttonClass: "button-6",
  },
  {
    title: "Em fim, é isto",
    buttonClass: "button-7",
  },
  {
    title: "#Nyanpaz",
    buttonClass: "no-button",
  },
];

const step = 1;

function load() {
  document.getElementById("image").setAttribute("data", steps[step].svgSrc);
  document.getElementById("title").innerText = steps[step].title;
  document.getElementById("description").innerText = steps[step].description;
  document.getElementById("button").className = steps[step].buttonClass;
}

function nextStep() {
  step += 1;
  load();
}

window.onload = () => {
  load();
};
