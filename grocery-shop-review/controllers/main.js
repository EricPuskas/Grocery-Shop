/**
 * Initializing the cart
 */
let cart = [];

/**
 * Initializing the mock data
 * @ToDo Add quantity
 */
const data = [
  { name: "apple", price: 1.99, type: "fruit" },
  { name: "banana", price: 2.99, type: "fruit" },
  { name: "grape", price: 2.99, type: "fruit" },
  { name: "strawberry", price: 3.99, type: "fruit" },
  { name: "orange", price: 3.99, type: "fruit" },
  { name: "appleSack", price: 11.99, type: "fruit" },
  { name: "bananaSack", price: 12.99, type: "fruit" },
  { name: "grapeSack", price: 12.99, type: "fruit" },
  { name: "strawberrySack", price: 13.99, type: "fruit" },
  { name: "orangeSack", price: 12.99, type: "fruit" },
  { name: "goat", price: 1.99, type: "other" },
  { name: "cow", price: 2.99, type: "other" },
  { name: "goatSack", price: 11.99, type: "other" },
  { name: "cowSack", price: 12.99, type: "other" },
  { name: "potato", price: 12.99, type: "vegetable" },
  { name: "tomato", price: 12.99, type: "vegetable" },
  { name: "carrot", price: 12.99, type: "vegetable" },
  { name: "lettuce", price: 12.99, type: "vegetable" },
  { name: "cucumber", price: 12.99, type: "vegetable" },
  { name: "potatoSack", price: 12.99, type: "vegetable" },
  { name: "tomatoSack", price: 13.99, type: "vegetable" },
  { name: "carrotSack", price: 13.99, type: "vegetable" },
  { name: "lettuceSack", price: 10.99, type: "vegetable" },
  { name: "cucumberSack", price: 13.99, type: "vegetable" },
];

/**
 * Initializing the product categories
 */
let fruits = [];
let vegetables = [];
let other = [];

/**
 * Handles printing the product data
 * @param {String} name
 * @param {Number} price
 */
const printProduct = (name, price) =>
  console.log("Product: " + name + " Price: " + price);

/**
 * Handles categorizing the products into categories
 */
const categorizeProducts = () => {
  data.forEach((item) => {
    switch (item.type) {
      case "fruit":
        fruits.push(item);
        break;
      case "vegetable":
        vegetables.push(item);
        break;
      case "other":
        other.push(item);
        break;
      default:
        break;
    }
  });
};

/**
 * Handles printing all the fruits and their data
 */
const printAllFruits = () => {
  let totalPrice = 0;

  fruits.forEach((fruit) => {
    const { name, price } = fruit;

    printProduct(name, price);
    totalPrice += price;
  });
  console.log("Total fruit price: " + totalPrice.toFixed(2));
};

/**
 * Handles removing an apple ???
 */
const removeFruit = () => {
  let elem = document.getElementById("apple");
  if (elem) {
    const elementName = elem.innerHTML;
    fruits = fruits.filter((fruit) => {
      const { name } = fruit;

      if (name === elementName) {
        console.log("Fruit name:", name);
      }

      return fruit.name !== elementName;
    });
  }
};

/**
 * Handles printing all the products
 */
const printAllProducts = () => {
  data.forEach((item) => console.log(`${item.name} ${item.price}`));
};

/**
 * Handles adding a product to the cart
 * @param {String} id
 */
const addProductToCart = (id) => {
  const item = data.find((item) => item.name === id);
  item && cart.push(item);
};

/**
 * Handles removing a product from the cart
 * @param {String} id
 */
const removeProductFromCart = (id) => {
  if (cart.length === 0) return;
  const newCart = cart.filter((cartItem) => cartItem.name !== id);
  cart = newCart;
};

/**
 * Handles getting the total cost
 */
const getTotalCost = () => {
  let result = 0;
  cart.forEach((itemInCart) => (result += itemInCart.price));
  return result;
};

/**
 * Handles updating the total text
 */
const updateTotalText = () => {
  const totalElem = document.getElementById("totalcost");

  if (totalElem) {
    totalElem.innerHTML = `Total: $${getTotalCost().toFixed(2)}`;
    localStorage.setItem("totalPrice", totalElem.innerHTML);
    localStorage.setItem("basketItems", JSON.stringify(cart));
  }
};

/**
 * Handles getting the total price from local storage
 */
const getTotalPrice = () => {
  const elem = document.getElementById("total-price-products");
  if (elem) elem.innerHTML = localStorage.getItem("totalPrice");
};

/**
 * Handles getting the basket items from local storage
 */
const getBasketItems = () => JSON.parse(localStorage.getItem("basketItems"));

/**
 * Handles initializing the items in the basket
 */
const initializeItemsInBasket = () => {
  const storage = getBasketItems();
  for (i = 0; i < storage.length; i++) {
    const elem = document.getElementById("items-in-basket");
    if (elem) elem.innerHTML += " " + storage[i].name;
  }
};

/**
 * Handles adding a product
 * @param {String} id
 */
const addProduct = (id) => {
  let elem = document.createElement("li");
  elem.id = id;
  let nodeItem = document.createTextNode(id, "item-to-cart");
  elem.appendChild(nodeItem);

  let elementItem = document.getElementById("item-in-cart");
  elementItem.appendChild(elem);
};

/**
 * Handles removing a product
 * @param {String} id
 */
const removeProduct = (id) => document.getElementById(id).remove();

categorizeProducts();
initializeItemsInBasket();
getTotalPrice();
