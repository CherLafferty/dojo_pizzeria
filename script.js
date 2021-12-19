console.log("page uploaded"); 

var pizza = {
    crustType: "deep dish",
    sauceType: "traditional",
    cheeses:   "mozzerella",
    toppings: ["pepperoni", "sausage"]
};  
console.log(pizza);

function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
    
var pizza1 = pizzaOven("deep dish", "traditional", "mozzerella", ["pepperoni", "sausage"]);
console.log(pizza1);

var pizza2 = pizzaOven("thin crust", "alfredo", "parmesan", ["chicken", "mushrooms"]);
console.log(pizza2);

var pizza3 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza3);

var pizza4 = pizzaOven("regular crust", "marinara", "mozzerella", ["pepperoni", "pineapple"]);
console.log(pizza4);


    var pizzaIngredients = {
    crustType: ["deep dish", "thin crust", "original crust", "hand tossed"],
    sauceType: ["marinara", "alfredo"],
    cheeses:   ["mozzerella", "parmesan", "asagio"],
    toppings: ["pepperoni", "sausage", "mushrooms", "onions", "green peppers"]
    }
    function randomPizza(crustType, sauceType, cheeses, toppings) {
        var pizzaIngredients = {}
        pizzaIngredients.crustType = crustType[Math.floor(Math.random() * crustType.length)];

        return pizzaIngredients;
    }
    console.log(pizzaIngredients);
