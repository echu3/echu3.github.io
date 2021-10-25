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


function changeStrawberry () {
    colorWord=document.getElementById("select1");
    console.log(colorWord.innerText);
    colorWord.innerText='Strawberry';
    document.getElementById("Strawberry").style["boxShadow"] = "2px #000000";
}

function changeBlackberry () {
    colorWord=document.getElementById("select1");
    console.log(colorWord.innerText);
    colorWord.innerText='Blackberry';
}

function changeFireOrange () {
    colorWord=document.getElementById("select1");
    console.log(colorWord.innerText);
    colorWord.innerText='Fire Orange';
}

function changeCrazyberry () {
    colorWord=document.getElementById("select1");
    console.log(colorWord.innerText);
    colorWord.innerText='Crazyberry';
}


function changeTiny () {
    sizeWord=document.getElementById("select2");
    console.log(sizeWord.innerText);
    sizeWord.innerText='Tiny';
}

function changeSmall () {
    sizeWord=document.getElementById("select2");
    console.log(sizeWord.innerText);
    sizeWord.innerText='Small';
}

function changeMedium () {
    sizeWord=document.getElementById("select2");
    console.log(sizeWord.innerText);
    sizeWord.innerText='Medium';
}

function changeLarge () {
    sizeWord=document.getElementById("select2");
    console.log(sizeWord.innerText);
    sizeWord.innerText='Large';
}