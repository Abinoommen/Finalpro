let Menulists = [
    {
        id: 1,
        name: 'Risotto',
        image: 'spplate1.png',
        price: 12
    },
    {
        id: 2,
        name: 'Pizza Margherita',
        image: 'spplate2.png',
        price: 12
    },
    {
        id: 3,
        name: 'Gnocci',
        image: 'spplate3.png',
        price: 22
    }
];

function Special(){
    Menulists.forEach((value, key) =>{
        if(value != null){
        let newDiv = document.createElement('div');
        newDiv.classList.add('menu__content');
        let menu_container = document.getElementById('dd');
        newDiv.innerHTML =            
                   ` <img src="assets/img/${value.image}" alt="" class="menu__img">
                    <h3 class="menu__name">${value.name}</h3>
                    <span class="menu__detail">Delicious dish</span>
                    <span class="menu__preci">${value.price.toLocaleString()}</span>
                    <a onclick="addToCard(${key})" class="button menu__button"><i class='bx bx-cart-alt'></i></a>`
                    
                       menu_container.appendChild(newDiv) 
                   
        }
    })
}
document.addEventListener('DOMContentLoaded', function() {
    // Your code here
    Special();
});

