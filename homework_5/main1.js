let shoppingCart = []; //assuming that the user visited the site for the first time

let localCart = localStorage.getItem("shoppingCart");
if(localCart == null){
    console.log("nothiogn was saved");
}
else{
    console.log("somnething was there");
    shoppingCart = JSON.parse(localCart); //convert to array
}

updateCartNum(shoppingCart.length);

function Product(name, color, size, number){
    this.name = name;
    this.color = color;
    this.size = size;
    this.number = number;
}

function updateCartNum(numOfItems){
    // get the tiem display form html
    let cartNumDisp =document.getElementById("carNumItems");
    // set the inner html
    cartNumDisp.innerText = numOfItems;
}

function addOnClick(){
    console.log("click funciton yay");
    // what selection
    let selName = "collar";
    let selColor = "blue";
    let selSize = "small";
    let selNumber = 4;
    // create the product and add to cart
    let newProd = new Product (selName, selColor, selSize, selNumber);
    shoppingCart.push(newProd);
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
    // update the numbers
    let numOfItems = 0;
    for(let i =0;i<shoppingCart.length; i++){
        let thisProd = shoppingCart[i];
        numOfItems = numOfItems + thisProd.number;
    }
    numOfItems = shoppingCart.length;
    updateCartNum(numOfItems);
}

let addBtn = document.getElementById("addButton");
addBtn.addEventListener("click", addOnClick);

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