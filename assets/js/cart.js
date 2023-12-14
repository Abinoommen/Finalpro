
const cart_icon = document.getElementById('cart-icon');

cart_icon.addEventListener('click', ()=>{
  const cartbox = document.querySelector('.cart-box')

  cartbox.classList.toggle('active')

})


let listCards  = [];
function updateLocalStorage() {
    saveCartToLocalStorage(); // Save cart to localStorage when updates occur
}

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

let total = document.querySelector('.total');
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
    updateLocalStorage();
    reloadCard();
   
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

// Call the function to load cart items from localStorage
loadCartFromLocalStorage();