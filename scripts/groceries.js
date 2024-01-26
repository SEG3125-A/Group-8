	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Broccoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.99,
		image: "scripts/Broccoli.jpg",
	},
	{
		name: "Bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.35,
		image: "scripts/Bread.jpg",
	},
	{
		name: "Quinoa",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 5.35,
		image: "scripts/Quinoa.jpg",
	},
	{
		name: "Lentil",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 3.35,
		image: "scripts/Lentil.jpg",

	},
	{
		name: "Tofu",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 8.00,
		image: "scripts/Tofu.jpg",

	},
	{
		name: "Salmon",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 10.00,
		image: "scripts/Salmon.jpg",

	},
	{
		name: "Almonds",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 6.78,
		image: "scripts/Almonds.jpg",

	},
	{
		name: "Walnuts",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 7.98,
		image: "scripts/Walnuts.jpg",

	},
	{
		name: "Chia Seeds",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 6.77,
		image: "scripts/Chia-Seeds.jpg",

	},
	{
		name: "Potato",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 4.56,
		image: "scripts/Potato.jpg",
	},
	{
		name: "Sweet Potato",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 5.76,
		image: "scripts/Sweet-Potato.jpg",

	},


];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i]);
		}
		else if (restriction == "None"){
			product_names.push(prods[i]);
		}		
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice.toFixed(2);
}
