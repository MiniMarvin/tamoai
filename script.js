const steps = [
  {
    title: "Se precisar a gente ta aí",
    description: "pode clicar no botão vermelho pra rer o resto da mensagem",
    buttonClass: "button-1",
  },
  {
    title: "A gente não se conhece muito mas tu parece super legal",
    buttonClass: "button-2",
  },
  {
    title: "Por isso, pode contar comigo pra te ajudar",
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

const step = 0;

function load() {
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
}
