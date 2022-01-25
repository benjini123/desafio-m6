import { Router } from "@vaadin/router";

customElements.define(
  "welcome-page",
  class extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.render();
      this.addListeners();
    }
    addListeners() {
      const buttonSalaEl = this.querySelector(".button-sala");
      buttonSalaEl.addEventListener("click", (e) => {
        e.preventDefault;
        Router.go("/nombre");
      });
      const buttonNuevoJuego = this.querySelector(".button-juego-nuevo");
      buttonNuevoJuego.addEventListener("click", (e) => {
        e.preventDefault;
        Router.go("/sala");
      });
    }
    render() {
      this.innerHTML = `

      <h1 class="welcome__main-title rampart-font">Rock paper scissors!</h1>
      <div class="welcome__button-container">
        <button-comp class="button-sala">Nuevo Juego</button-comp>
        <button-comp class="button-juego-nuevo">ingresar a una sala</button-comp>
      </div>
      <div class="hands">
        <play-comp jugada="rock"></play-comp>
        <play-comp jugada="paper"></play-comp>
        <play-comp jugada="scissors"></play-comp>
      </div>
      `;
      this.className = "div-root";
    }
  }
);
