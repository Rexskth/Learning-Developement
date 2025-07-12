// What can be build based on this information??????

// let suppose  we have a cart for an e-commerce application
const cart = {
    items: [], // Array to hold items in the cart
    total: 0, // Total price of items in the cart
    addItem(item) { // here item is object with properties like name, price, quantity
        this.items.unshift(item); // Add item to the start of the cart
        this.total += item.price
        // popup(`${item.name} added to cart!`); // Show popup message
    },
    DeleteItem(name) { // Remove item by name
        this.total -= this.items.find(item => item.name === name).price;
        this.items = this.items.filter(item => item.name !== name)
        // popup(`${name} removed from cart!`); // Show popup message      
    },
    addToFavourite(item){
        // Assuming we have a favourites array in the cart
        if (!this.favourites) {
            this.favourites = []; // Initialize favourites if it doesn't exist
        }
        this.favourites.unshift(item); // Add item to favourites
        // popup(`${item.name} added to favourites!`); // Show popup message
        item.favourite = true; // Mark item as favourite
    }
};

// const popup = (message){
//     alert(message);
// }

item1 = {
    name: "Nothing phone (2a",
    price: 20000,
    favourite: false,
    isAvailable: true
};

cart.addItem(item1);
console.log(cart.items); // Check items in the cart