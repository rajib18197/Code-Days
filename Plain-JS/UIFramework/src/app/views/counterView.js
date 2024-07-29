export default class CounterView {
  constructor(statePublisher, count = 0) {
    this.id = crypto.randomUUID();
    this.statePublisher = statePublisher;
    this.state = { count };
    this.initialState = { count };
    this.setState = (prevState) => ({ ...prevState });
    this.DOMElement = document.getElementById("root");
  }

  operations() {
    return {
      onClick() {
        this.incrementHandler();
        this.decrementHandler();
        this.resetHandler();
      },
    };
  }

  updateUI() {
    const counterTextElement = document.querySelector(
      `.counter--${this.id} .counter__text`
    );
    counterTextElement.textContent = `Count - ${this.state.count}`;
  }

  incrementHandler() {
    const btnIncrement = document.querySelector(
      `.counter--${this.id} .btn__increment`
    );

    this.nextState(btnIncrement, (prevState) => ({
      ...prevState,
      count: prevState.count + 1,
    }));
  }

  decrementHandler() {
    const btnDecrement = document.querySelector(
      `.counter--${this.id} .btn__decrement`
    );

    this.nextState(btnDecrement, (prevState) => ({
      ...prevState,
      count: prevState.count - 1,
    }));
  }

  resetHandler() {
    const btnReset = document.querySelector(`.counter--${this.id} .btn__reset`);

    this.nextState(btnReset, (prevState) => ({
      ...prevState,
      count: this.initialState.count,
    }));
  }

  nextState(element, stateUpdater) {
    element.addEventListener("click", () => {
      this.setState = stateUpdater;
      this.statePublisher.publish(this);
    });
  }

  generateMarkup() {
    return `
        <div class='counter--${this.id}'>
            <p class='counter__text'>Count - ${this.state.count}</p>
            <button class='btn btn__increment'>Increment</button>
            <button class='btn btn__decrement'>Decrement</button>
            <button class='btn btn__reset'>Reset</button>
        </div>
      `;
  }
}
