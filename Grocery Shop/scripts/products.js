function addProduct()
{
    potato.push(potateItem);
    if(potatoAdded == true)
    {
        var para = document.createElement("li");
        var node = document.createTextNode("Apple");
        para.appendChild(node);

        var para2 = document.createElement("a");
        var node2 = document.createTextNode("$2.99");
        para2.appendChild(node2);

        var element = document.getElementById("item-in-cart");
        var element2 = document.getElementById("item-in-cart");
        element.appendChild(para);
        element2.appendChild(para2);
        potatoAdded = false;
    }
}

function removeProduct()
{
    let removeHTML = document.getElementById("total-cost-text");
    document.getElementById("total-cost-text").innerHTML = "Total: $" + result;
    if(potato.length == 0)
        removeHTML.remove();
}

function addFullProduct()
{
    fullSack.push(fullSackPotato)
    if(sackAdded == true)
    {
        var para = document.createElement("li");
        var node = document.createTextNode("Sack of Potatoes");
        para.appendChild(node);

        var para2 = document.createElement("a");
        var node2 = document.createTextNode("$11.99");
        para2.appendChild(node2);

        var element = document.getElementById("item-in-cart");
        var element2 = document.getElementById("item-in-cart");
        element.appendChild(para);
        element2.appendChild(para2);
        sackAdded = false;
    }
}

function removeFullProduct()
{
    let removeHTML = document.getElementById("item-in-cart");
    document.getElementById("total-cost-text").innerHTML = "Total: $" + result;
    if(fullSack.length == 0)
        removeHTML.remove();
}


function totalCost()
{
    let result = 0;
    for(i=0;i<potato.length;i++)
        result+=potato[i].price;
    
    for(i=0;i<fullSack.length;i++)
        result+=fullSack[i].price;

    return result.toFixed(2);
}

function totalCostPrint()
{
    document.getElementById("total-cost-text").innerHTML = "Total: $" + totalCost();
}
