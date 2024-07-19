export default class CounterView {
  state;
  DOMElement;
  id;

  constructor(statePublisher, count = 0) {
    this.id = crypto.randomUUID();
    this.statePublisher = statePublisher;
    this.state = { count };
    this.setState = (prevState) => ({ ...prevState });
    this.DOMElement = document.getElementById("root");
  }

  operations() {
    return {
      onClick() {
        const btnIncrement = document.querySelector(
          `.counter--${this.id} .btn__increment`
        );
        const btnDecrement = document.querySelector(
          `.counter--${this.id} .btn__decrement`
        );

        btnIncrement.addEventListener("click", () => {
          this.setState = (prevState) => ({
            ...prevState,
            count: prevState.count + 1,
          });
          this.statePublisher.change();

          this.setState = (prevState) => ({ ...prevState });
        });

        btnDecrement.addEventListener("click", () => {
          this.setState = (prevState) => ({
            ...prevState,
            count: prevState.count - 1,
          });
          this.statePublisher.change();

          this.setState = (prevState) => ({ ...prevState });
        });
      },
    };
  }

  updateUI() {
    this.updateIncrement();
  }

  updateIncrement() {
    const counterTextElement = document.querySelector(
      `.counter--${this.id} .counter__text`
    );
    counterTextElement.textContent = `Count - ${this.state.count}`;
  }

  updateDecrement() {
    const counterTextElement = document.querySelector(
      `.counter--${this.id} .counter__text`
    );
    counterTextElement.textContent = `Count - ${this.state.count}`;
  }

  generateMarkup() {
    return `
          <div class='counter--${this.id}'>
              <p class='counter__text'>Count - ${this.state.count}</p>
              <button class='btn btn__increment'>Increment</button>
              <button class='btn btn__decrement'>Decrement</button>
          </div>
      `;
  }
}
