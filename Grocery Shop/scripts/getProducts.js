document.getElementById("total-price-products").innerHTML = localStorage.getItem("totalPrice");

var storage = JSON.parse(localStorage.getItem("basketItems"))
for(i =0;i<storage.length;i++)
{
    document.getElementById("items-in-basket").innerHTML +=" " + storage[i].name;
}