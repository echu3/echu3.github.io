let carts = document.querySelectorAll('.btn1');
console.log(carts);
let products = [
    {
        name: 'Strawberry Tiny Dog GPS Tracker Collar',
        tag: 'strawberry tiny collar',
        price: 25,
        inCart:0,
    }
]

//for (let i = 0; i < carts.length; i++) {
    //carts[i].addEventListener('click', () => {
       // if (colorSelected && sizeSelected){
        //addItemToCart();
       // cartNumbers();
       // }
       // else{}
   // })
//}

const button = document.getElementById('btn1');
button.addEventListener('click',function(){
    //select what the user is selecting
    addItemToCart();

}

let shopingCart = [];

//impletement shipping cart
    //add things to the cart
        //need to create somehting to represnet cart->array
            // check if a shoppping cart exists and is empty
                // not exist -> create an empty array
                //exists and is empty -> read it from storage
                // exitis and is not empty, read from local storage
        //need to create somehting to represnet item
            //implement a "cart item template"
            // with the temaplate, gonna create an instance of an item that matches the users selection
                // identify what hte user is selecting
                    // product name
                    // color
                    // size
                    //number
                // create a new item using the "new Product" expression
        //save the cart somewhere
            // add the newly created item to the shopping cart
                // add obejct to an array
            // save it to local storage
                // localstorage.setitem()
    //how to display them

    // delete items

function addItemToCart(productColor, productSize, productQuantity){
    const item = newProduct (productColor, productSize, productQuantity);
    // initialize and empty cart array
    let cartItems = [];
    // create an item object
    let item ={...};
    // add the object to the cart
    cartItems.push(item);
    //save the cart
    localStorage.setItem('savedCart', JSON.stringify(cartItems));
}

// ...representing products as custom Objects
//...representing your cart as an Array of objects
//...using separate JS files for page-specific functionality
//...using the <template> tag for repeated HTML elements
//...adding event listeners in JS, instead of inline HTML


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

function onload () {
    let productNumbers=localStorage.getItem('cartNumbers');
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
