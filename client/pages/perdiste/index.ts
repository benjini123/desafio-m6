import { Router } from "@vaadin/router";
import { state } from "../../state";

const redStarURL = require("url:../../content/star-2.png");

customElements.define(
  "perdiste-page",
  class extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.render();
    }
    addListeners() {
      const buttonEl = this.querySelector(".button-element");
      buttonEl.addEventListener("click", (e) => {
        e.preventDefault;
        Router.go("/instructions");
      });
    }
    render() {
      this.innerHTML = `

        <div class="match-results__container">
          <img width="255px" src="${redStarURL}">
          <div class="match-results__image-text">Defeat</div>
        </div>
        <score-comp></score-comp>
        <button class="button-element">replay</button>
      `;
      this.className = "results__container red";
      this.addListeners();
    }
  }
);
