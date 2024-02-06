// alert("working");


const container = document.querySelector(".products-container");
const productSingle = document.querySelectorAll('.product-name');
const singleProductPage = "./single_product.html";


let notificationCount = 0;


function createProductCard(image, title, price, stDescription, lgDescription) {
    const div = document.createElement("div");
    div.classList.add("product-card");
    const cart = document.querySelector('.cart-notification');
    // const contentDiv = document.createElement("div");


    productImage = document.createElement("img");
    const productName = document.createElement("a");
    const p = document.createElement("p");
    const button = document.createElement("button");

    productImage.classList.add("productImage");
    productName.classList.add("product-name");
    p.classList.add("product-price");
    button.classList.add("product-btn");
    
    productImage.src = image;
    productName.innerText = title;
    productName.href = "./single_product.html";
    p.textContent = "₦" + price;
    button.textContent = "Add To Cart";

    

    button.onclick = () => {
        if(!button.classList.contains("clicked")){
            notificationCount++;
            button.textContent = "View Cart";
            document.querySelector('.product-btn').innerHTML = "View Cart";
            cart.innerText = notificationCount;
            button.classList.add("clicked");
        }else if(button.classList.contains("clicked")){
            window.location.href = "./cart.html";
        }
    };


    
    container.appendChild(div);
    div.appendChild(productImage);
    div.appendChild(productName);
    div.appendChild(p);
    div.appendChild(button);
};


// Loop through each category of products
products.forEach(category => {
    // Loop through each type of cake in the category
    Object.keys(category).forEach(subCategories => {
        // Get the array of cakes of the current type
        console.log(Object.keys(category));
        const productTypes = category[subCategories];
        Object.keys(productTypes).forEach(productType => {

            const productItems = productTypes[productType]; 
            Object.keys(productItems).forEach(productItem => {
                
                const items = productItems[productItem];
                items.forEach(item => {
                    // Access the cake object within the cakeType object
                     // Get the first (and only) object within the cake
                    if (item) {
                        
                        // Render the product details to your HTML file
                        createProductCard(
                            item.image, 
                            item.productName, 
                            item.price,
                            item.shortDescription,
                            item.longDescription
                        );
                        // console.log("Size:", cakeDetails.size);
                        // console.log("Flavour:", cakeDetails.flavour);
                        // You can render these details to your HTML file as needed
                    
                    };
                });
            });
        });

    });
});

productSingle.forEach(product => {
    product.onclick = () => {
    window.location.href = singleProductPage;
};
});
function addToCart(button){
    button.onclick = () => {
        if(!button.classList.contains("clicked")){
            notificationCount++;
            button.textContent = "View Cart";
            cart.innerText = notificationCount;
            productButton.classList.add("clicked");
        }else if(button.classList.contains("clicked")){
            window.location.href = "./cart.html";
        };
    };
};

// // THIS FETCHES HEADER WHEN IT IS IN A SEPARATE FILE.
// function includeHeader() {
//     fetch('shop.html')
//         .then(response => response.text())
//         .then(shopHtml => {
//             document.getElementById('header').innerHTML = shopHtml;
//         });
// }

// // Call the function to include header
// includeHeader();

// Function to include header
// function includeHeader() {
//     // Get the header content from the home page
//     var headerContent = document.querySelector('header').innerHTML;
    
//     // Insert the header content into the header container of each page
//     var headerContainers = document.querySelector('.global-header');
//     headerContainers.innerHTML = headerContent;  
//     //     container.innerHTML = headerContent;
//     // });
//     // alert('working');
// }

// // Call the function to include header
// includeHeader();