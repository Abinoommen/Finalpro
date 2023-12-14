
const cart_icon = document.getElementById('cart-icon');

cart_icon.addEventListener('click', ()=>{
  const cartbox = document.querySelector('.cart-box')

  cartbox.classList.toggle('active')

})


let listCards  = [];


function addToCard(key){
    
console.log('hi')
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(Menulists[key]));
        listCards[key].quantity = 1;
    }
    else {
        listCards[key].quantity += 1; // Increment the quantity if the item exists
    }
    
    updateLocalStorage(); 
    reloadCard();
}
let total = document.getElementById('total');
let quantity = document.querySelector('.quantity');

function reloadCard(){
    let listCard = document.querySelector('.listCard');
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
   
  

    
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="assets/img/${value.image}"/></div>
                <div>${value.name}</div>
                <div>$${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">qty -${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
                
        }
    })
    total.innerText = `Total :$${totalPrice}`.toLocaleString();
    quantity.innerText = count;
    updateLocalStorage(); 
    
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * Menulists[key].price;
    }
    reloadCard();
    updateLocalStorage();
}

function saveCartToLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(listCards));
}
function loadCartFromLocalStorage() {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
        listCards = JSON.parse(storedCartItems);
        reloadCard();
    }
}

function updateLocalStorage() {
    saveCartToLocalStorage(); // Save cart to localStorage when updates occur
}


// Function to load cart items from localStorage and display in the table
function displayCartFromLocalStorage() {
    const cartTable = document.getElementById('cartTable');
    const totalElement = document.getElementById('total1');

    let total = 0;

    // Retrieve cart items from localStorage
    const storedCartItems = localStorage.getItem('cartItems');

    if (storedCartItems) {
        const cartItems = JSON.parse(storedCartItems);

        cartItems.forEach((item) => {
            // Create a new row for each item
            const newRow = document.createElement('tr');

            // Create columns for product name, quantity, and price
            const productNameColumn = document.createElement('td');
            const quantityColumn = document.createElement('td');
            const priceColumn = document.createElement('td');

            // Set content for each column
            productNameColumn.innerHTML = `
                <div class="cart-info">
                    <img src="./assets/img/${item.image}" alt="">
                    <div>
                        <p>${item.name}</p>
                        <small>Price: $${item.price}</small>
                        <br>
                        <a href="#">Remove</a>
                    </div>
                </div>
            `;

            quantityColumn.textContent = item.quantity;
            priceColumn.textContent = `$${(item.price * item.quantity).toFixed(2)}`;

            // Append columns to the row
            newRow.appendChild(productNameColumn);
            newRow.appendChild(quantityColumn);
            newRow.appendChild(priceColumn);

            // Append the row to the table
            cartTable.appendChild(newRow);

            // Calculate the total price
            total += item.price * item.quantity;
        });

        // Display the total price
        totalElement.textContent = `$${total.toFixed(2)}`;
    }
}



document.addEventListener('DOMContentLoaded', function () {
    displayCartFromLocalStorage();
});
// Call the function to load cart items from localStorage
loadCartFromLocalStorage();