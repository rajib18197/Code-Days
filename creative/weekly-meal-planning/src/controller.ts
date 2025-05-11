import * as model from "./model.ts";
import recipeListView from "./views/RecipeListView.ts";

const controlRecipeList = function () {
  recipeListView.render(model.state);
};

export const init = function () {
  recipeListView.addHandlerRenderRecipeList(controlRecipeList);
};
