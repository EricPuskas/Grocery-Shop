function Products(name, price)
{
    this.name = name;
    this.price = price;

    this.printProduct = function()
    {
        console.log("Product: " + name + " Price: " + price);
    }
    this.getPrice = function()
    {
        return this.price;
    }
    this.getName = function()
    {
        return this.name;
    }
}

//fruits product
const apple = new Products("apple", 1.99);
const banana = new Products("banana", 2.99);
const grape = new Products("grape", 2.99);
const strawberry = new Products("strawberry", 3.99);
const orange = new Products("orange", 2.99);

const appleSack = new Products("appleSack", 11.99);
const bananaSack = new Products("bananaSack", 12.99);
const grapeSack = new Products("grapeSack", 12.99);
const strawberrySack = new Products("strawberrySack", 13.99);
const orangeSack = new Products("orangeSack", 12.99);

const fruitArray = [];
fruitArray.push(apple, banana, grape, strawberry, orange);

//other product
const goat = new Products("goat", 1.99);
const cow = new Products("cow", 2.99);

const goatSack = new Products("goatSack", 11.99);
const cowSack = new Products("cowSack", 12.99);

//vegetables product
const potato = new Products("potato", 2.99);
const tomato = new Products("tomato", 3.99);
const carrot = new Products("carrot", 3.99);
const lettuce = new Products("lettuce", 0.99);
const cucumber = new Products("cucumber", 3.99);


const potatoSack = new Products("potatoSack", 12.99);
const tomatoSack = new Products("tomatoSack", 13.99);
const carrotSack = new Products("carrotSack", 13.99);
const lettuceSack = new Products("lettuceSack", 10.99);
const cucumberSack = new Products("cucumberSack", 13.99);

vegetableArray = [];
vegetableArray.push(potato, tomato, carrot, lettuce, cucumber);

//functions for fruits
function printAllFruitsInformation()
{
    let totalPrice = 0;
    for(i = 0;i<fruitArray.length;i++)
    {
        console.log("All fruits: ");
        console.log(fruitArray[i].printProduct());

        totalPrice+=fruitArray[i].getPrice();
    }
    console.log("Total fruit price: " + totalPrice.toFixed(2));
}

function removeOneFruit()
{
    let remove = document.getElementById("apple").innerHTML;
    let index;
    for(i = 0;i<fruitArray.length;i++)
    {
        if(fruitArray[i].getName() == remove)
            {
                console.log(fruitArray[i].getName());
                fruitArray.splice(fruitArray[i], 1);
            }
    }
}

// all products

productsArray = [];
productsArray.push(potato, tomato, carrot, lettuce, 
    cucumber,apple, banana, grape, strawberry, orange,
    potatoSack, tomatoSack, carrotSack, lettuceSack, cucumberSack,
     appleSack, bananaSack, grapeSack, strawberrySack, orangeSack,
     cow, goat, cowSack, goatSack);

function printAllProducts()
{
    for(i = 0;i<productsArray.length;i++)
    {
        console.log(productsArray[i].name + " " + productsArray[i].price);
    }
}

cartOfProducts = [];
function addProductToCar(clicked_id)
{  
    for(i = 0;i<productsArray.length;i++)
    {
        if(clicked_id == productsArray[i].getName())
            {
                cartOfProducts.push(productsArray[i]);
            }
    }
}

function removeProductFromCar(clicked_id)
{
    if(cartOfProducts.length > 0)
    {
        for(i=0;i<cartOfProducts.length;i++)
        {
            if(clicked_id == cartOfProducts[i].getName())
                {
                    cartOfProducts.splice(i, 1);
                    return;
                }
        }
    }
}

function totalCostOfProducts()
{   
    var result = 0;
    for(i=0;i<cartOfProducts.length;i++)
        result+= cartOfProducts[i].getPrice();
    return result;
}

function totalCostTextChange()
{
    document.getElementById("totalcost").innerHTML = "Total: $" + totalCostOfProducts().toFixed(2);
    localStorage.setItem("totalPrice",document.getElementById("totalcost").innerHTML);
    localStorage.setItem("basketItems",JSON.stringify(cartOfProducts));
}


