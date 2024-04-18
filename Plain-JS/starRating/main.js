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
  #tempRating = 0;

  constructor() {
    this.#clear();
    this.#createMarkup();
  }

  #createMarkup() {
    const markup = this.#generateMarkup();
    this.#rootElement.insertAdjacentHTML("beforeend", markup);
  }

  #clear() {
    this.#rootElement.innerHTML = "";
  }

  handleClick = (e) => {
    console.log(e);
    // this.#rootElement.removeEventListener(
    //   "mouseover",
    //   this.handleMouseOver
    // );

    if (e.target.closest("svg")) {
      const rating = JSON.parse(e.target.closest("span").dataset.rate);
      if (hasPointedHalf(e)) {
        this.#rating = Number(rating.half);
      } else {
        this.#rating = Number(rating.full);
      }

      this.#tempRating = 0;
      this.#clear();
      this.#createMarkup();
    }
  };

  addHandlerClick() {
    this.#rootElement.addEventListener("click", this.handleClick);
  }

  handleMouseOver = (e) => {
    if (e.target.closest("svg")) {
      console.log(e);
      const ratingObj = JSON.parse(e.target.closest("span").dataset.rate);
      console.log(ratingObj);

      if (hasPointedHalf(e)) this.#tempRating = Number(ratingObj.half);
      else this.#tempRating = Number(ratingObj.full);

      // this.#clear();
      // const markup = allRatingsData
      //   .map(this.#generateStarMarkup.bind(this))
      //   .join("");
      // document.querySelector(".stars").innerHTML = "";

      // this.#createMarkup();
      // this.#rootElement.addEventListener("click", this.handleClick);
    }
  };

  addHandlerMouseEnter() {
    this.#rootElement.addEventListener("mouseover", this.handleMouseOver);
  }

  addHandlerMouseLeave() {
    this.#rootElement.addEventListener("mouseout", (e) => {
      this.#tempRating = 0;
      console.log(111);

      this.#clear();
      this.#createMarkup();
    });
  }

  #generateMarkup() {
    return `
			<div class="starContainer">
				<div class="stars">${allRatingsData
          .map(this.#generateStarMarkup.bind(this))
          .join("")}</div>
				<p class="text">You rated this: ${this.#tempRating || this.#rating} stars!!!</p>
			</div>
		`;
  }

  #generateStarMarkup(rate) {
    // console.log(rate);
    return `
			<span role='button' data-rate=${JSON.stringify(rate)}>
       ${
         this.#tempRating
           ? this.#displayStars(this.#tempRating, rate)
           : this.#displayStars(this.#rating, rate)
       }
			</span>
		`;
  }

  #displayStars(rating, rate) {
    return `
      ${rating === rate.half ? starHalf : ""}
      ${rating >= rate.full ? starFull : ""}
      ${rating !== rate.half && rating < rate.full ? star : ""}
    `;
  }
}

const starRatingComponent = new StarRating();
starRatingComponent.addHandlerClick();
starRatingComponent.addHandlerMouseEnter();
starRatingComponent.addHandlerMouseLeave();
