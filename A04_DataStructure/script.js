// Jonas Atzenhofer
// Quellen: Yannick König, Robert Schindler,
var ShoppingList;
(function (ShoppingList) {
    window.addEventListener("load", handleLoad);
    let itemNumber = 0;
    function handleLoad() {
        let addButton = document.querySelector("button#add");
        addButton.addEventListener("click", itemAdd);
    }
    function itemAdd() {
        //console.log("Item hinzugefügt");
        let formData = new FormData(document.querySelector("form"));
        let newItem = formData.get("newItem");
        let amount = formData.get("amount");
        let comment = formData.get("comment");
        let bought = false;
        let date = "10.11.2022";
        itemNumber++;
        let list = document.getElementById("list");
        let newDiv = document.createElement("div");
        newDiv.setAttribute("class", "lister");
        newDiv.setAttribute("id", "lister" + itemNumber);
        let newInput = document.createElement("input");
        newDiv.appendChild(newInput);
        newInput.setAttribute("class", "bought");
        newInput.setAttribute("id", "bought" + itemNumber);
        newInput.setAttribute("type", "checkbox");
        newInput.addEventListener("change", itemBought);
        let divItemData = document.createElement("div");
        newDiv.appendChild(divItemData);
        divItemData.setAttribute("class", "ItemData");
        divItemData.setAttribute("id", "ItemData" + itemNumber);
        let newItemField = document.createElement("p");
        divItemData.appendChild(newItemField);
        newItemField.setAttribute("class", "ItemDataFont");
        newItemField.innerHTML = newItem;
        let amountField = document.createElement("p");
        divItemData.appendChild(amountField);
        amountField.setAttribute("class", "ItemDataFont");
        amountField.innerHTML = amount;
        let commentField = document.createElement("p");
        divItemData.appendChild(commentField);
        commentField.setAttribute("class", "ItemDataFont");
        commentField.innerHTML = comment;
        let dateField = document.createElement("p");
        divItemData.appendChild(dateField);
        dateField.setAttribute("class", "ItemDataFont");
        dateField.innerHTML = date;
        let editButton = document.createElement("button");
        newDiv.appendChild(editButton);
        editButton.setAttribute("class", "edit");
        editButton.setAttribute("id", "edit" + itemNumber);
        editButton.setAttribute("type", "button");
        editButton.innerHTML = "edit";
        editButton.addEventListener("click", editItem);
        let deleteButton = document.createElement("button");
        newDiv.appendChild(deleteButton);
        deleteButton.setAttribute("class", "delete");
        deleteButton.setAttribute("id", "delete" + itemNumber);
        deleteButton.setAttribute("type", "button");
        deleteButton.innerHTML = "delete";
        deleteButton.addEventListener("click", deleteItem);
        list.appendChild(newDiv);
    }
    function itemBought(_event) {
        let trigger = _event.target.id;
        let triggerNum = trigger.replace(/\D/g, "");
        let identifyer = parseInt(triggerNum);
    }
    function editItem(_event) {
        let trigger = _event.target.id;
        let triggerNumber = trigger.replace(/\D/g, "");
    }
    function deleteItem(_event) {
        let trigger = _event.target.id;
        let triggerNum = trigger.replace(/\D/g, "");
        let identifyer = parseInt(triggerNum);
        let list = document.getElementById("list");
        let remIt = document.getElementById("lister" + identifyer);
        list.removeChild(remIt);
    }
})(ShoppingList || (ShoppingList = {}));
//# sourceMappingURL=script.js.map