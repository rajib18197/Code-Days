export default class UISubscriber {
  constructor(UI) {
    this.UI = UI;
    console.log(this.UI);
    this.render();

    const operations = this.UI.operations();
    this.operations = Object.keys(operations);
    this.operations.forEach((o) => operations[o].call(this.UI));
  }

  changeState() {
    console.log(this.UI);
    this.UI.state = this.UI.setState(this.UI.state);
  }

  render() {
    // this.UI.DOMElement.innerHTML = "";
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
