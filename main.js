let carts = document.querySelectorAll('.btn1');

let products = [
    {
        name: 'Strawberry Tiny Dog GPS Tracker Collar',
        tag: 'strawberry tiny collar',
        price: 25,
        inCart:0,
    }
]

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers();
    })
}



function cartNumbers () {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers =parseInt(productNumbers);
    if(productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers +1);
        document.querySelector('.cartt span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cartt span').textContent = 1;

    }
}