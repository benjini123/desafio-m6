export function initInstructionsPage(params: any) {
  const div = document.createElement("div");
  div.className = "div-root";
  div.innerHTML = `
        
  <h2 class="rampart-font welcome__main-title ">Press play and choose between the three options before the timer runs out..</h2>
  <button-comp class="button" href="/game">start</button-comp>
  <div class="hands">
    <play-comp jugada="rock"></play-comp>
    <play-comp jugada="paper"></play-comp>
    <play-comp jugada="scissors"></play-comp>
  </div>
  `;

  const buttonEl = div.querySelector(".button");
  buttonEl.addEventListener("click", (e) => {
    e.preventDefault;
    const direction = buttonEl.getAttribute("href");
    params.goTo(direction);
  });

  return div;
}
