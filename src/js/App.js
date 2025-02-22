import Deact from "./core/Deact.js";
import CarName from "./components/input/CarName.js";
import AttemptCount from "./components/input/AttemptCount.js";
import DisplayContainer from "./components/display/DisplayContainer.js";
import ResultContainer from "./components/result/ResultContainer.js";
export default class App extends Deact {
  async setup() {
    this.state = {
      gameState: "waitName",
    };
  }
  setPropsFromState() {
    const { gameState } = this.state;
    this.props = { gameState };
  }
  getTemplate() {
    const { gameState } = this.props;
    return `
      <section id="input_container" class="d-flex justify-center mt-5">
      <form></form>
      </section>
      ${
        gameState !== "waitName"
          ? '<section id="display_container" class="d-flex justify-center mt-5"></section>'
          : ""
      }
      ${
        gameState === "done"
          ? '<section id="result_container" class="d-flex justify-center mt-5"></section>'
          : ""
      }
      `;
  }
  mountComponents() {
    const { gameState } = this.props;
    const { setGameState } = this;
    this.createComponent(
      CarName,
      "#input_container>form",
      () => {
        const { gameState } = this.state;
        return { gameState, setGameState: setGameState.bind(this) };
      },
      "fieldset"
    );

    this.createComponent(
      AttemptCount,
      "#input_container>form",
      () => {
        const { gameState } = this.state;
        return { gameState, setGameState: setGameState.bind(this) };
      },
      "fieldset"
    );

    gameState !== "wait" &&
      this.createComponent(DisplayContainer, "#display_container", () => {
        return {};
      });

    gameState === "done" &&
      this.createComponent(ResultContainer, "#result_container", () => {
        return {};
      });
  }
  setGameState(newState) {
    this.updateState({ gameState: newState });
    console.log(this.state);
  }
}
