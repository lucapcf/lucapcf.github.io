
/** funcao para adicionar a animação de "loading" */
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader--hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });
});



var message_array = ["Tire o seu sonho do papel."];
var text_position = 0;
var speed = 100;



/** funcao para o efeito do texto na pagina inicial */
typewriter = () => {
  document.querySelector("#titulo_pg_inicial").
  innerHTML = message_array[0].substring(0,
  text_position) + "<span>\u25ae</span>";

  if(text_position++ != message_array[0].length)
    setTimeout(typewriter, speed);
}

window.addEventListener("load", typewriter);




function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}