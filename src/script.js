const steps = [
  {
    title: "Ei pow, a vida é bem dahora",
    description: "rola umas paradas problemáticas as vezes (quase todo dia as vezes) mas...",
    buttonClass: "big-button",
    buttonContent: ">> clica aqui <<",
    svgSrc: "assets/thisisfine.svg",
    bgClass: "",
  },
  {
    title: "Lembra dazamizade",
    description: "elas estão sempre por aí mesmo que não seja presencialmente e algumas surgem de repente pra entrar na vida, além disso elas estão pra todos os momentos, os tristes, os felizes ou mesmo...",
    buttonClass: "big-button",
    buttonContent: ">> ... <<",
    svgSrc: "assets/friends.svg",
    // bgClass: "lightBackground",
    bgClass: "",
  },
  {
    title: "na hora de ver gifs de gatinhos 😺",
    description: "então confia que vai dar bom",
    buttonClass: "big-button",
    buttonContent: "ao inicio e além",
    svgSrc: "assets/cat.svg",
    bgClass: "lightBackground",
  }
];

let step = 0;

function load() {
  document.getElementById("image").setAttribute("data", steps[step].svgSrc);
  document.getElementById("title").innerText = steps[step].title;
  document.getElementById("description").innerText = steps[step].description;
  document.getElementById("button").className = steps[step].buttonClass;
  document.getElementById("button").innerText = steps[step].buttonContent;
  document.getElementsByTagName("html")[0].className = steps[step].bgClass;
  document.getElementsByClassName("content")[0].className = "content " + steps[step].bgClass;
}

function nextStep() {
  step += 1;
  step %= steps.length;
  load();
}

window.onload = () => {
  load();
};
