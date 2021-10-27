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
    if (colorSelected && sizeSelected){
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
    
}

var colorSelected = false;
var sizeSelected = false;

function changeStrawberry () {
    colorWord=document.getElementById("select1");
    console.log(colorWord.innerText);
    colorWord.innerText='Strawberry';
    colorSelected = true;
    clearColor ();
    document.getElementById("strawberry").style.boxShadow = "0 0 3px 3px #000000";

    
}

function changeBlackberry () {
    colorWord=document.getElementById("select1");
    console.log(colorWord.innerText);
    colorWord.innerText='Blackberry';
    colorSelected = true;
    clearColor ();
    document.getElementById("blackberry").style.boxShadow = "0 0 3px 3px #000000";
}

function changeFireOrange () {
    colorWord=document.getElementById("select1");
    console.log(colorWord.innerText);
    colorWord.innerText='Fire Orange';
    colorSelected = true;
    clearColor ();
    document.getElementById("fireorange").style.boxShadow = "0 0 3px 3px #000000";
}

function changeCrazyberry () {
    colorWord=document.getElementById("select1");
    console.log(colorWord.innerText);
    colorWord.innerText='Crazyberry';
    colorSelected = true;
    clearColor ();
    document.getElementById("crazyberry").style.boxShadow = "0 0 3px 3px #000000";
}


function clearColor () {
    var strawberry=document.getElementById("strawberry");
    var crazyberry=document.getElementById("crazyberry");
    var blackberry=document.getElementById("blackberry");
    var fireorange=document.getElementById("fireorange");
    strawberry.style.boxShadow = "0 0 0 0";
    crazyberry.style.boxShadow = "0 0 0 0";
    blackberry.style.boxShadow = "0 0 0 0";
    fireorange.style.boxShadow = "0 0 0 0";

}




function changeTiny () {
    sizeWord=document.getElementById("select2");
    console.log(sizeWord.innerText);
    sizeWord.innerText='Tiny';
    sizeSelected = true;
    clearSize ();
    document.getElementById("stiny").style.boxShadow = "0 0 3px 3px #000000";
}

function changeSmall () {
    sizeWord=document.getElementById("select2");
    console.log(sizeWord.innerText);
    sizeWord.innerText='Small';
    sizeSelected = true;
    clearSize ();
    document.getElementById("ssmall").style.boxShadow = "0 0 3px 3px #000000";
}

function changeMedium () {
    sizeWord=document.getElementById("select2");
    console.log(sizeWord.innerText);
    sizeWord.innerText='Medium';
    sizeSelected = true;
    clearSize ();
    document.getElementById("smedium").style.boxShadow = "0 0 3px 3px #000000";
}

function changeLarge () {
    sizeWord=document.getElementById("select2");
    console.log(sizeWord.innerText);
    sizeWord.innerText='Large';
    sizeSelected = true;
    clearSize ();
    document.getElementById("slarge").style.boxShadow = "0 0 3px 3px #000000";
}

function clearSize () {
    var strawberry=document.getElementById("stiny");
    var crazyberry=document.getElementById("ssmall");
    var blackberry=document.getElementById("smedium");
    var fireorange=document.getElementById("slarge");
    stiny.style.boxShadow = "0 0 0 0";
    ssmall.style.boxShadow = "0 0 0 0";
    smedium.style.boxShadow = "0 0 0 0";
    slarge.style.boxShadow = "0 0 0 0";

}


function decrementQuantity () {
    let quantity=parseInt(document.getElementById("num").innerText);
    quantity = quantity-1;
    quantity = Math.max(1,quantity);
    document.getElementById("num").innerText = quantity;
}

function incrementQuantity () {
    let quantity=parseInt(document.getElementById("num").innerText);
    quantity = quantity+1;
    document.getElementById("num").innerText = quantity;
}