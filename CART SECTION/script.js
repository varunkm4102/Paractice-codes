const productName = document.getElementById("product-name");
const productPrice = parseFloat(document.getElementById("price").textContent);
const addCartButton = document.getElementById("cart-btn");

const ProductImg = document.querySelector(".img-in");
let priceIn = document.getElementById("price-in");
let priceNum = parseFloat(priceIn.textContent);

let cart = [];

const product = {
    name: productName,
    price: productPrice,
    quantity: 1 // Initialize the quantity to 1 when adding a new product
};

addCartButton.addEventListener("click", () => {   

    // Check if the product is already in the cart
    const existingProductIndex = cart.findIndex(item => item.name === product.name);

    if (existingProductIndex !== -1) {
        // If the product is already in the cart, increase its quantity
        cart[existingProductIndex].quantity += 1;
         clonedProductImage = productName.cloneNode(false);
        console.log("its already exist");
        
    } else {
        // If it's not in the cart, add it to the cart array
        cart.push(product);
        console.log("its not exist");
    }
    

    let clonedProductImage = productName.cloneNode(true);
    ProductImg.appendChild(clonedProductImage);
    priceIn.innerHTML = product.price;

    // You should update the cart UI to reflect the changes here
    // console.log(cart);
    // console.log(productPrice)
});


const increaseNum = document.getElementById("increase");
const quantityElement = document.getElementById("quantity");
const priceElement = document.getElementById("price-in"); // Assuming this is the price element
let quantityNum = parseFloat(quantityElement.textContent);
let productPri = parseFloat(priceElement.textContent);
let currentQuantity = document.getElementById("incr-num");
let currentElement = parseFloat(currentQuantity.textContent);



increaseNum.addEventListener("click", () => {
    // Increment the quantity
    quantityNum++;
    currentElement++
    currentQuantity.innerHTML = currentElement;

    let newPrice = productPrice * quantityNum;

    // Update the quantity and price displayed on the webpage
    quantityElement.textContent = quantityNum;
    priceElement.textContent = newPrice.toFixed(2); // Display the updated price with 2 decimal places
    // console.log(currentElement);
    // console.log(currentQuantity);
});


// decreasing element
const deacrese = document.getElementById("decrease");

deacrese.addEventListener("click", () =>{
    quantityNum--;
    quantityElement.innerHTML = quantityNum;
    currentElement--;
    currentQuantity.innerHTML = currentElement;
    let letestP = newPrice - productPrice;
    priceElement.innerHTML = letestP;
    console.log(letestP);
});