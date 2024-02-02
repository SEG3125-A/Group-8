
// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}


	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct1, slct2) {
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
		
	// obtain a reduced list of products based on restrictions, is a dictionary so it contains all the fields
    var optionArray = restrictListProducts(products, s1.value);

	// sort the list by lowest to highest price
	optionArray.sort(function(a, b) {
		return a.price - b.price;
	});
	
	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread ... $#.##/label><br>
		
	for (i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i].name;
		var productPrice = optionArray[i].price.toFixed(2);
		var productImage = optionArray[i].image;
		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = [productName, productPrice];
		s2.appendChild(checkbox);
		
		var image = document.createElement("img");
        image.src = productImage;
        image.alt = productName;
		image.className = "product-image"; // Assign a class to your image
        s2.appendChild(image);
		
		let numSpaces = 10;
		let spaces = " ".repeat(numSpaces);
		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productName ;
		label.className = "product"; // Assign a class to your label
		label.innerHTML = productName + " ... $" + productPrice;
		s2.appendChild(label);
		
		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));    
	}
}

	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			var element = ele[i].value.split(",")
			var productName = element[0]
			var productPrice = element[1]
			var productImage = element[2];
		
			// create an image element for the selected item
			var selectedImage = document.createElement("img");
			//selectedImage.src = productImage;
			//selectedImage.alt = productName;

			// create a wrapper div for the product name, price, and image
			var productWrapper = document.createElement("div");
			productWrapper.style.position = "relative";

			// append the product name and price to the wrapper
			productWrapper.appendChild(document.createTextNode(productName+" ... $"+productPrice));

			// append the wrapper to the para
			para.appendChild(productWrapper);

			chosenProducts.push(productName);
		}
	}

		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is $" + getTotalPrice(chosenProducts)));
		
}