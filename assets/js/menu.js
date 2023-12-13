let Menulists = [
    {
        id: 4,
        name: 'Risotto',
        image: 'spplate1.png',
        category: "non-veg",
        price: 12
    },
    {
        id: 5,
        name: 'Pizza Margherita',
        image: 'spplate2.png',
        category: "veg",
        price: 12
    },
    {
        id: 6,
        name: 'Gnocci',
        image: 'spplate3.png',
        category: "non-veg",
        price: 22
    }
    ,
    {
        id: 7,
        name: 'Lasagne',
        image: 'spplate3.png',
        category: "veg",
        price: 22
    }
    ,
    {
        id: 8,
        name: 'Gnocci',
        image: 'spplate3.png',
        category: "non-veg",
        price: 22
    }
    ,
    {
        id: 9,
        name: 'Gnocci',
        image: 'spplate3.png',
        category: "veg",
        price: 22
    }
   
];

function Menulist(menuItems){
    let menu_container = document.getElementById('menulist');
    menu_container.innerHTML = '';
    
    menuItems.forEach((value, key) =>{
        if(value != null){
        let newDiv = document.createElement('div');
        newDiv.classList.add('menu__content');
        
        newDiv.innerHTML =            
                   ` <img src="assets/img/${value.image}" alt="" class="menu__img">
                    <h3 class="menu__name">${value.name}</h3>
                    <span class="menu__detail">Delicious dish</span>
                    <span class="menu__preci">${value.price.toLocaleString()}</span>
                    <a href="#" onclick="addToCard(${key})" class="button menu__button"><i class='bx bx-cart-alt'></i></a>`
                    
                       menu_container.appendChild(newDiv) 
                   
        }
    })
}
document.addEventListener('DOMContentLoaded', function() {
    // Your code here
    Menulist(Menulists);
});

function filterMenuItems(category) {
    let filteredItems = [];
    if (category === 'All') {
        filteredItems = Menulists;
    } else {
        filteredItems = Menulists.filter(item => item.category.toLowerCase() === category.toLowerCase());
    }
    Menulist(filteredItems);
}

document.getElementById('allCategoryBtn').addEventListener('click', function() {
    filterMenuItems('All');
});

document.getElementById('vegCategoryBtn').addEventListener('click', function() {
    filterMenuItems('veg');
});

document.getElementById('nonVegCategoryBtn').addEventListener('click', function() {
    filterMenuItems('non-veg');
});