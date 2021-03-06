import { Router } from "@vaadin/router";
import { state } from "../../state";

customElements.define(
  "nombre-page",
  class extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.render();
    }
    addListeners() {
      const formEl = this.querySelector<HTMLElement>(
        ".welcome__form-container"
      );
      const loaderEl = this.querySelector<HTMLElement>(".loader");

      formEl.addEventListener("submit", (e: any) => {
        e.preventDefault();

        formEl.style.display = "none";
        loaderEl.style.display = "initial";

        const name = e.target.input.value;
        state.setPlayerOneName(name).then((userId) => {
          state.setRoomLongId(userId, name).then((roomLongId) => {
            state.listenDatabase();
            setTimeout(() => {
              state.setRoomShortId(roomLongId).then((roomShortId) => {
                console.log(roomShortId);
                Router.go("/espera");
              });
            }, 1000);
          });
        });
      });
    }
    render() {
      this.innerHTML = `
      <h1 class="rampart-font welcome__main-title ">Rock paper scissors</h1>
      <loader-comp name="loader" class="loader"></loader-comp>
      <form class="welcome__form-container" >
        <div class="welcome__label-input-box">
          <label for="input" style="font-size:48px" class="odibee-font">
            <h3>tu nombre</h3>
          </label>
          <input id="input" name="input" class="input-element" placeholder="nombre"></input>
        </div>
        <button type="submit" class="button-element" >start</button>
      </form>
      <div class="hands">
        <play-comp jugada="rock"></play-comp>
        <play-comp jugada="paper"></play-comp>
        <play-comp jugada="scissors"></play-comp>
      </div>
      `;
      this.className = "div-root";
      this.addListeners();
    }
  }
);
