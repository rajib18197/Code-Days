import type { AssignedDate, Recipe, stateProps } from "../types/recipe";

class RecipeListView {
  private parentElement = document.querySelector(".recipe-list");
  private data!: stateProps;

  addHandlerRenderRecipeList(handler: () => void) {
    window.addEventListener("load", handler);
  }

  render(data: stateProps) {
    if (!this.parentElement) return;

    this.data = data;
    const markup = this.generateMarkup();
    this.clear();
    this.parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  private clear() {
    if (!this.parentElement) return;
    this.parentElement.innerHTML = "";
  }

  private generateMarkup() {
    return this.data.allRecipes
      .map(this.generateMarkupRecipe.bind(this))
      .join("");
  }

  private generateMarkupRecipe(recipe: Recipe) {
    return `
        <div class="recipe-item">
            <h3>${recipe.name}</h3>
            <div class="recipe-details">
                <p><strong>Ingredients:</strong> ${recipe.ingredients.join(
                  ", "
                )}</p>
                <p><strong>Instructions:</strong> ${recipe.instructions}</p>
            </div>
            <div class="day-dropdown-container">
                ${this.generateMarkupOptions(recipe)}
            </div>
        </div>
    
    `;
  }

  private getNext7Days() {
    const days: AssignedDate[] = [];
    const today = new Date();

    for (let i = 0; i < 7; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      const dayName = d.toLocaleDateString(undefined, { weekday: "short" });
      const date = d.getDate();
      days.push({ date: d, label: `${dayName} ${date}` });
    }

    return days;
  }

  private generateMarkupOptions(recipe: Recipe) {
    const days = this.getNext7Days();

    return `
      <p>Assign to: </p>
      <div>
        ${days.map(
          (day) => `
            <input type="checkbox" id="${recipe.name}-${day.label}" />
            <label for="${recipe.name}-${day.label}">${day.label}</label>
        `
        )}
      </div>
    `;
  }
}

export default new RecipeListView();
