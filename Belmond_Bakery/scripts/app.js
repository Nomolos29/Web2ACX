// alert("working");


const container = document.querySelector(".products-container");




function createProductCard(image, title, price, stDescription, lgDescription) {
    const div = document.createElement("div");
    div.classList.add("product-card");
    // const contentDiv = document.createElement("div");
    // contentDiv.classList.add("product-content");
    productImage = document.createElement("img");
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    const button = document.createElement("button");

    productImage.classList.add("productImage");
    h2.classList.add("product-name");
    h3.classList.add("product-price");
    button.classList.add("product-btn");
    
    productImage.src = image;
    h2.innerText = title;
    h3.textContent = price;
    button.textContent = "Add To Cart";


    
    container.appendChild(div);
    div.appendChild(productImage);
    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(button);
z};


// Loop through each category of products
products.forEach(category => {
    // Loop through each type of cake in the category
    Object.keys(category).forEach(cakeType => {
        // Get the array of cakes of the current type
        const cakes = category[cakeType];
        Object.keys(cakes).forEach(cakeType =>
        // Loop through each cake
        cakes.forEach(cake => {
            // Access the cake object within the cakeType object
            const cakeDetails = cake[Object.keys(cake)[0]]; // Get the first (and only) object within the cake
            if (cakeDetails) {
                // Render the product details to your HTML file
                createProductCard(
                    cakeDetails.image, 
                    cakeDetails.productName, cakeDetails.price,
                    cakeDetails.shortDescription,
                    cakeDetails.longDescription
                    );
                console.log("Size:", cakeDetails.size);
                console.log("Flavour:", cakeDetails.flavour);
                // You can render these details to your HTML file as needed
            }
        });
    });
});

