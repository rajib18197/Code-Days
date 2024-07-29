import StatePublisher from "../library/statePublisher.js";
import UISubscriber from "../library/UISubscriber.js";
import CounterView from "./views/counterView.js";
import InputView from "./views/inputView.js";

const statePublisher = new StatePublisher();

// Counter Components (#1)
const counterUI = new CounterView(statePublisher, 5);
const counterSubscriber = new UISubscriber(counterUI);
statePublisher.subscribe(counterSubscriber);

const counterUI2 = new CounterView(statePublisher, 10);
const counter2Subscriber = new UISubscriber(counterUI2);
statePublisher.subscribe(counter2Subscriber);

const counterUI3 = new CounterView(statePublisher, 20);
const counter3Subscriber = new UISubscriber(counterUI3);
statePublisher.subscribe(counter3Subscriber);

// Input Components (#2)
const inputUI = new InputView(statePublisher);
const inputSubscriber = new UISubscriber(inputUI);
statePublisher.subscribe(inputSubscriber);

const inputUI1 = new InputView(statePublisher);
const inputSubscriber1 = new UISubscriber(inputUI1);
statePublisher.subscribe(inputSubscriber1);
