export default class UISubscriber {
  constructor(UI) {
    this.UI = UI;
    this.initialRender();

    const operations = this.UI.operations();
    this.operations = Object.keys(operations);
    this.operations.forEach((o) => operations[o].call(this.UI));
  }

  changeState() {
    this.UI.state = this.UI.setState(this.UI.state);
  }

  initialRender() {
    this.UI.DOMElement.insertAdjacentHTML(
      "beforeEnd",
      this.UI.generateMarkup()
    );
  }

  notify() {
    console.log(`State has changed recently.`);
    this.UI.updateUI();
  }
}
