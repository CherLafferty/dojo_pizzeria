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

var crustType = [
    "deep dish",
    "hand tossed",
    "thin crust",
];
var sauceType = [
    "marinara",
    "alfredo",
    "traditional"
];
var cheeses = [
    "mozzerella",
    "parmesan",
    "asagio",
    "feta"
];
var toppings = [
    "pepperonie",
    "sausage",
    "veggies",
    "pineapple",
    "mushroom"
];

function randomRange(max, min) {
    return Math.floor(Math.random() * max - min) + min;
}
function randomPick(arr) {
    var i = Math.floor(arr.length * Math.random());
    return arr[i];
}
    function randomPizza(){
        var pizza = {};
        pizza.crustType = randomPick(crustType);
        pizza.sauceType = randomPick(sauceType);
        pizza.cheeses = [];
        pizza.toppings = [];
        
        for(var i=0; i<randomRange(4, 1); i++) {
            pizza.cheeses.push(randomPick(cheeses));
        }
        for(var i=0; i<randomRange(5, 0); i++) {
            pizza.toppings.push(randomPick(toppings));
        }
        return pizza;
}
console.log(randomPizza());

