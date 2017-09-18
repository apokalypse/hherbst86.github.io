var cart = {
    productsInCart : {},

    discounts : [],

    subTotal : []
};

//hideCart();

var cartIcon = document.querySelector('.fa-shopping-cart');
cartIcon.addEventListener('click', showCart);

//var totalPrice = document.getElementByID("totalPrice");
//totalPrice.innerHTML = "<p>" + total + "</p>";

document.addEventListener('click', function(event) {
    var target = event.target;
    var elementName = target.tagName.toLowerCase();

    if ( elementName === 'button' ) {
        // the case where the button is clicked directly
        addToCart(target);
    } else if ( elementName === 'i' && target.parentNode.tagName.toLowerCase() === 'button' ) {
        // the case where the icon inside the button is clicked
        addToCart(target.parentNode);
    }
});

//if the item has been added to the cart object, it will be identified here
function checkIfCartItemExists(itemID){
    return cart.productsInCart[itemID];
}

function identify(name) {
    return name.replace(/\s/g, '-').toLowerCase(); // replace all spaces with dashes and make the id lowercase
}

function addToCart(button) {

    //console.log('event.target = ', event.target, ' was clicked.');
    var item = {};
    var itemID = button.dataset.itemid;
    var operation = 'add'; // default operation, used when the item is first added to the cart, and when the plus button on the cart is pressed

    if ( button.classList.contains('subtract') ) {
        // if the minus button in the cart is pressed, then the default operation is overriden
        operation = 'subtract';
        var price = (getItemPrice(itemID) * -1);
        var zero = (getItemQuantity(itemID) -1);
        console.log(zero);
        cart.subTotal.push(price);
    }

    //if the item quantity is 0, we remove it from the cart

    //if the item doesn't exist in the cart, we grab the HTML element values
    //that will be pushed in to the cart object and added to the cart in the newMiniCartItemRow() function
    if (!checkIfCartItemExists(itemID)) {

        var grandParent = button.parentNode.parentNode;
        //console.log(grandParent);
        var itemName = grandParent.children[0].textContent;
        var itemImage = grandParent.children[1];
        var itemImageURL = itemImage.src;
        var itemPrice = grandParent.children[2].querySelector('.item-price span').textContent;
        item.price = itemPrice;
        item.name = itemName;

        item.id = itemID;

        item.img = itemImage;
        item.qty = 1;

        cart.productsInCart[itemID] = item;
        newMiniCartItemRow(item);

        //if the item does exist, we update its quantity and price in the HTML table
    } else {
        // update cart for the item with the name 'item.name'
        updateCart(itemID, operation);
        if (checkIfCartItemExists(itemID)){
            //  get the cell with class 'qty' in the row with the id 'item.id'
            var cellSelector ='#' + itemID + ' td.qty';
            var cellSelector2 = '#' + itemID + ' td.price';
            //        console.log(cellSelector2);
            var cell1 = document.querySelector(cellSelector);
            var cell2 = document.querySelector(cellSelector2);
            // get the quantity for the item with name 'item.name', and update quantity cell with that value
            cell1.textContent = "Qty: " + getItemQuantity(itemID);
            cell2.textContent = "$" + getItemQuantity(itemID) * getItemPrice(itemID) + ".00";
            cart.subTotal.push(parseInt(getItemPrice(itemID)));
            //console.log(cart.subTotal);
        } else {
            var itemRow = document.querySelector('#' + itemID);
            itemRow.parentNode.removeChild(itemRow);
        }
    }
    showCart();
}

//depending on the addition or subtraction button selected, we change the item qty and price
function updateCart(itemID, operation) {
    // update the item based on itemID and the type of operation
    if ( operation === 'add' ) {
        cart.productsInCart[itemID].qty += 1;
    } else if ( operation === 'subtract' && cart.productsInCart[itemID].qty > 0 ) {
        cart.productsInCart[itemID].qty -= 1;
        if ( cart.productsInCart[itemID].qty === 0 ){
            delete cart.productsInCart[itemID];
        }
    }
    console.log(JSON.stringify(cart, null, 2));
}

function getItemQuantity(itemID) {
    return cart.productsInCart[itemID].qty;
}

function getItemPrice(itemID) {
    return cart.productsInCart[itemID].price;
}

//we grab the properties from the cart to create a new table row, if the cart item doesnt exist already
function newMiniCartItemRow(item){
    var miniCartTable = document.getElementById('cart-listing');
    var newRow = document.createElement("tr");
    var imageCell = newRow.insertCell(0);
    var nameCell = newRow.insertCell(1);
    var priceCell = newRow.insertCell(2);
    var qtyCell = newRow.insertCell(3);
    var addButtonCell = newRow.insertCell(4);
    var deleteButtonCell = newRow.insertCell(5);
    var cartItemImage = document.createElement("img");
    var cartPrice = document.createTextNode(item.price);
    var itemName = item.name;
    var itemPrice = item.price;
    var itemID = identify(itemName);
    imageCell.innerHTML = '<img src = "' + item.img.src + '" height="120px" width="120px"/>';
    nameCell.innerHTML = itemName;
    priceCell.innerHTML = "$" + itemPrice + ".00";
    priceCell.classList.add('price');
    qtyCell.textContent = "Qty: " + item.qty;
    qtyCell.classList.add('qty');
    addButtonCell.innerHTML = "&nbsp;&nbsp;" + '<button data-itemid="' + itemID + '" class="add" type="button"><i class="fa fa-plus" aria-hidden="true"></i></button>';
    deleteButtonCell.innerHTML = "&nbsp;&nbsp;" + '<button data-itemid="' + itemID + '" class="subtract" type="button"><i class="fa fa-minus" aria-hidden="true"></i></button>';
    miniCartTable.appendChild(newRow);
    newRow.appendChild(imageCell);
    newRow.appendChild(nameCell);
    newRow.appendChild(priceCell);
    newRow.appendChild(qtyCell);
    newRow.appendChild(addButtonCell);
    newRow.appendChild(deleteButtonCell);

    newRow.id = itemID;  // replace all spaces with dashes and make the id lowercase
    cart.subTotal.push(parseInt(itemPrice));
    //console.log(cart.subTotal);
    console.log(itemID.parentNode);
}

function showTotal(){
    var total = 0;
    for(var i in cart.subTotal){
        total += cart.subTotal[i];
    }
    var totalPrice = document.getElementById('totalPrice');
    totalPrice.textContent = "$" + total + ".00";
    if (cart.subTotal <= 0){
        total = 0;
    }
}

function hideCart(){
    var el = document.getElementsByClassName("exit");
    var miniCart = document.getElementById("cart-listing");
    miniCart.style.display="none";
}

function showCart(){
    var el = document.getElementsByClassName("fa-shopping-cart");
    var miniCart = document.getElementById("cart-listing");
    miniCart.style.display="block";
    preventDefault();
}
//function addToWishList(){};
