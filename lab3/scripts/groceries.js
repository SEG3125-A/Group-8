	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Apples",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		Fruits:true,
		Dairy:false,
		Meats:false,
		price: 7.99,
		image: "scripts/Apples.jpg",
	},
	{
		name: "Pears",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		Fruits:true,
		Dairy:false,
		Meats:false,
		price: 9.99,
		image: "scripts/Pears.jpg",
	},
	{
		name: "Bananas",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		Fruits:true,
		Dairy:false,
		Meats:false,
		price: 9.99,
		image: "scripts/Bananas.jpg",
	},
	{
		name: "Avocados",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		Fruits:true,
		Dairy:false,
		Meats:false,
		price: 13.99,
		image: "scripts/Avocados.jpg",
	},
	{
		name: "Mangoes",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		Fruits:true,
		Dairy:false,
		Meats:false,
		price: 10.89,
		image: "scripts/Mangoes.jpg",
	},
	{
		name: "Raspberries",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		Fruits:true,
		Dairy:false,
		Meats:false,
		price: 13.89,
		image: "scripts/Raspberries.jpg",
	},
	{
		name: "Pomegranates",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		Fruits:true,
		Dairy:false,
		Meats:false,
		price: 14.89,
		image: "scripts/Pomegranates.jpg",
	},
	{
		name: "Pineapples",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		Fruits:true,
		Dairy:false,
		Meats:false,
		price: 9.78,
		image: "scripts/Pineapples.jpg",
	},
	{
		name: "Chicken(Breast)",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		Fruits:false,
		Dairy:false,
		Meats:true,
		price: 18.78,
		image: "scripts/Chicken(Breast).jpg",
	},
	{
		name: "Chicken(Thigh)",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		Fruits:false,
		Dairy:false,
		Meats:true,
		price: 18.78,
		image: "scripts/Chicken(Thigh).jpg",
	},
	{
		name: "Beef",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		Fruits:false,
		Dairy:false,
		Meats:true,
		price: 20.08,
		image: "scripts/Beef.jpg",
	},
	{
		name: "Lamb",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		Fruits:false,
		Dairy:false,
		Meats:true,
		price: 19.08,
		image: "scripts/Lamb.jpg",
	},
	{
		name: "Pork(Belly)",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		Fruits:false,
		Dairy:false,
		Meats:true,
		price: 22.08,
		image: "scripts/Pork(Belly).jpg",
	},
	{
		name: "Broccoli",
		vegetarian: true,
		glutenFree: true,
		Fruits:false,
		organic: true,
		Dairy:false,
		Meats:false,
		price: 1.99,
		image: "scripts/Broccoli.jpg",
	},
	{
		name: "Bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		Fruits:false,
		Dairy:false,
		Meats:false,
		price: 2.35,
		image: "scripts/Bread.jpg",
	},
	{
		name: "Quinoa",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		Fruits:false,
		Dairy:false,
		Meats:false,
		price: 5.35,
		image: "scripts/Quinoa.jpg",
	},
	{
		name: "Lentil",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		Fruits:false,
		Dairy:false,
		Meats:false,
		price: 3.35,
		image: "scripts/Lentil.jpg",

	},
	{
		name: "Tofu",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		Fruits:false,
		Dairy:false,
		Meats:false,
		price: 8.00,
		image: "scripts/Tofu.jpg",

	},
	{
		name: "Salmon",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		Fruits:false,
		Dairy:false,
		Meats:true,
		price: 10.00,
		image: "scripts/Salmon.jpg",

	},
	{
		name: "Almonds",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		Fruits:false,
		Dairy:false,
		Meats:false,
		price: 6.78,
		image: "scripts/Almonds.jpg",

	},
	{
		name: "Walnuts",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		Fruits:false,
		Dairy:false,
		Meats:false,
		price: 7.98,
		image: "scripts/Walnuts.jpg",

	},
	{
		name: "Chia Seeds",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		Fruits:false,
		Dairy:false,
		Meats:false,
		price: 6.77,
		image: "scripts/Chia-Seeds.jpg",

	},
	{
		name: "Potato",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		Fruits:false,
		Dairy:false,
		Meats:false,
		price: 4.56,
		image: "scripts/Potato.jpg",
	},
	{
		name: "Sweet Potato",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		Fruits:false,
		Dairy:false,
		Meats:false,
		price: 5.76,
		image: "scripts/Sweet-Potato.jpg",

	},
	{
		name: "Milk",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		Fruits:false,
		Dairy:true,
		Meats:false,
		price: 4.76,
		image: "scripts/Milk.jpg",

	},
	{
		name: "Cheese",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		Fruits:false,
		Dairy:true,
		Meats:false,
		price: 3.77,
		image: "scripts/Cheese.jpg",

	},
	{
		name: "Yogurt",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		Fruits:false,
		Dairy:true,
		Meats:false,
		price: 4.66,
		image: "scripts/Yogurt.jpg",

	},
	{
		name: "Butter",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		Fruits:false,
		Dairy:true,
		Meats:false,
		price: 4.66,
		image: "scripts/Butter.jpg",

	},
	{
		name: "Ice cream",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		Fruits:false,
		Dairy:true,
		Meats:false,
		price: 4.66,
		image: "scripts/Ice cream.jpg",

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
		else if ((restriction == "Fruits") && (prods[i].Fruits == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "Dairy") && (prods[i].Dairy == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "Meats") && (prods[i].Meats == true)){
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
