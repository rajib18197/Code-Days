export default class InputView {
  constructor(statePublisher) {
    this.id = crypto.randomUUID();
    this.statePublisher = statePublisher;
    this.state = { value: "" };
    this.setState = (prevState) => ({ ...prevState });
    this.DOMElement = document.getElementById("root");
  }

  operations() {
    return {
      input() {
        this.changeInputHandler();
      },
    };
  }

  updateUI() {
    const inputTextElement = document.querySelector(
      `.input--${this.id} .input__text`
    );
    inputTextElement.textContent = `Here is your input - ${this.state.value}`;
  }

  changeInputHandler() {
    const inputElement = document.querySelector(`.input--${this.id} .input`);

    this.nextState(inputElement, (prevState) => ({
      ...prevState,
      value: inputElement.value,
    }));
  }

  nextState(element, stateUpdater) {
    element.addEventListener("input", () => {
      this.setState = stateUpdater;
      this.statePublisher.publish(this);
    });
  }

  generateMarkup() {
    return `
        <div class='input--${this.id}'>
            <p class='input__text'>Here is your input - ${this.state.value}</p>
            <input type='text' class='input'/>
        </div>
        `;
  }
}
