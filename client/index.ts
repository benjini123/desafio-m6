import { initPlayComp } from "./components/jugada";
import { initTimerComp } from "./components/timer";
import { initScoreComp } from "./components/score-board";

import { state } from "./state";
import "./router";
import "./pages/welcome";
import "./pages/instructions";
import "./pages/game";
import "./pages/reveal";
import "./pages/ganaste";
import "./pages/perdiste";
import "./pages/empate";
import "./pages/sala";
import "./pages/nombre";
import "./pages/espera";

(function () {
  initPlayComp();
  initTimerComp();
  initScoreComp();
  state.init();
})();
