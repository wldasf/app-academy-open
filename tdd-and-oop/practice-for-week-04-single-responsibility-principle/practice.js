/******************************** CONSTANTS *********************************/ 
const applePieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "apples", cost: 6.00, quantity: 7 },
  { name: "cinnamon", cost: 5.50, quantity: 1 },
  { name: "eggs", cost: 2.00, quantity: 1 },
];

const pumpkinPieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "pumpkin", cost: 3.75, quantity: 2 },
  { name: "cinnamon", cost: 5.50, quantity: 1 },
  { name: "eggs", cost: 2.00, quantity: 1 },
];

const cherryPieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "cherries", cost: 12.00, quantity: 10 },
  { name: "eggs", cost: 2.00, quantity: 1 },
];

const recipes = {
  applePie: applePieRecipe,
  pumpkinPie: pumpkinPieRecipe,
  cherryPie: cherryPieRecipe
};
/* DO NOT CHANGE THE CODE ABOVE */

/*************************** FUNCTION TO REFACTOR ****************************/
// Extracted a separate function to get the ingredients as a string
function getIngredientsString(recipe) {
  return recipe.map(ingredient => ingredient.name).join(', ');
}

// Extracted a separate function to compute the cost of a single pie
function computeCostOfPie(recipe) {
  return recipe.reduce((prev, current) => prev + current.cost, 0);
}


// Refactored the main function
function bakeAndSellPies(pieType, pieQuantity, profitMargin = 1.2) {
  const recipe = recipes[pieType];

  // Bake pies
  for (let i = 0; i < pieQuantity; i++) {
    const combiningMsg = `Combining ingredients for ${pieType}: ${getIngredientsString(recipe)}`;
    console.log(combiningMsg);
    console.log(`Baked pie ${i + 1}!`);
  }

  // Compute cost and revenue
  const costOfPie = computeCostOfPie(recipe);
  console.log(`Cost per pie: ${costOfPie}`);

  const totalCost = costOfPie * pieQuantity;
  const revenue = totalCost * profitMargin;

  console.log(`Sold ${pieQuantity} pies for $${revenue.toFixed(2)}!`);
}

/******************************* LOCAL TESTS *******************************/
// bakeAndSellPies("applePie", 5, 2.5);
// bakeAndSellPies("pumpkinPie", 2);
// bakeAndSellPies("cherryPie", 7, 1.7);

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  bakeAndSellPies
};