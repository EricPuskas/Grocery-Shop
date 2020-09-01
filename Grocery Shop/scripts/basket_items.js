
function addProduct(clicked_id)
{
    var productToAdd = clicked_id;

    var paraItem = document.createElement("li");
    paraItem.id = clicked_id;
    var nodeItem = document.createTextNode(clicked_id, "item-to-cart");
    paraItem.appendChild(nodeItem);

    var elementItem = document.getElementById("item-in-cart");
    elementItem.appendChild(paraItem);
}

function removeProduct(clicked_id)
{
    var obj = document.getElementById(clicked_id, "item-to-cart");
    obj.remove();
}

