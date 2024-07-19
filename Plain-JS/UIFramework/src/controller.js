import StatePublisher from "./library/statePublisher.js";
import UISubscriber from "./library/UISubscriber.js";
import CounterView from "./views/counterView.js";

const statePublisher = new StatePublisher();

const counterUI = new CounterView(statePublisher, 5);
const counterUI2 = new CounterView(statePublisher, 10);

const counterSubscriber = new UISubscriber(counterUI);
const counter2Subscriber = new UISubscriber(counterUI2);

// console.log(counterSubscriber);

statePublisher.subscribe(counterSubscriber);
statePublisher.subscribe(counter2Subscriber);
