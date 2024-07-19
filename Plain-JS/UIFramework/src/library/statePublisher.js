export default class StatePublisher {
  constructor() {
    this.data = [];
  }

  subscribe(cb) {
    this.data.push(cb);
  }

  change() {
    this.data.forEach((cb) => {
      //   const curState = cb.state;
      cb.changeState();
      //   const nextState = cb.state;

      cb.notify();
    });
  }
}
