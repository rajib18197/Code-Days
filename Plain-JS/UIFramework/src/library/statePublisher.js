// Publisher - subscriber
export default class StatePublisher {
  constructor() {
    this.subscribers = [];
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }

  // Change a specific subscriber (State Updating)
  publish(subscriber) {
    const subscriberToUpdate = this.subscribers.find((sub) => {
      return subscriber === sub.UI;
    });

    subscriberToUpdate.changeState();
    subscriberToUpdate.notify();
  }
}
