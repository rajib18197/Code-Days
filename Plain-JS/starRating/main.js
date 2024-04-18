"use strict";

import { hasPointedHalf, star, starHalf, starFull } from "./constant.js";

const allRatingsData = [
  { half: 0.5, full: 1 },
  { half: 1.5, full: 2 },
  { half: 2.5, full: 3 },
  { half: 3.5, full: 4 },
  { half: 4.5, full: 5 },
];

class StarRating {
  #rootElement = document.querySelector("#root");
  #rating = 0;

  constructor() {
    const markup = this.#generateMarkup();
    this.#rootElement.insertAdjacentHTML("beforeend", markup);
  }

  addHandlerClick() {
    this.#rootElement.addEventListener(
      "click",
      function (e) {
        console.log(e.target);

        if (e.target.closest("svg")) {
          const rating = JSON.parse(e.target.closest("span").dataset.rate);
          // console.log(e.target.closest("span"));
          console.log(rating);
          if (hasPointedHalf(e)) {
            this.#rating = Number(rating.half);
          } else {
            console.log(e.target.closest("span"));
            this.#rating = Number(rating.full);
          }
          console.log(this.#rating);
          this.#rootElement.innerHTML = "";
          const markup = this.#generateMarkup();
          this.#rootElement.insertAdjacentHTML("beforeend", markup);
        }
      }.bind(this)
    );
  }

  #generateMarkup() {
    return `
			<div class="starContainer">
				<div class="stars">${allRatingsData
          .map(this.#generateStarMarkup.bind(this))
          .join("")}</div>
				<p class="text">You rated this: ${this.#rating} stars!!!</p>
			</div>
		`;
  }

  #generateStarMarkup(rate) {
    console.log(rate);
    return `
			<span role='button' data-rate=${JSON.stringify(rate)}>
        ${this.#rating === rate.half ? starHalf : ""}
        ${this.#rating >= rate.full ? starFull : ""}
        ${this.#rating !== rate.half && this.#rating < rate.full ? star : ""}
			</span>
		`;
  }
}

const starRatingComponent = new StarRating();
starRatingComponent.addHandlerClick();
