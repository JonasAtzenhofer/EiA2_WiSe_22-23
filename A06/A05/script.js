// Jonas Atzenhofer
// Quellen: Yannick König!!!, Robert Schindler, Henning Pils, Tristan Broghammer 
var ShoppingListL06;
(function (ShoppingListL06) {
    let itemNumber = 0;
    let date = new Date();
    let dateWithoutTime = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
    window.addEventListener("load", handleLoad);
    async function handleLoad(_event) {
        let addButton = document.querySelector("button#add");
        addButton.addEventListener("click", itemAdd);
        let response = await fetch("https://jonasatzenhofer.github.io/EiA2_WiSe_22-23/A05/datastructure.json");
        let item = await response.text();
        let data = JSON.parse(item);
        generateExistingItem(data);
        // create a async function to exchange the data with the server//
        async function communicate(_url) {
            let response = await fetch(_url);
            let responseText = await response.text();
            console.log(responseText);
            let json = {};
            for (let key of Object.keys(json)) {
                let value = json[key];
                console.log(key + ":" + value);
            }
            function generateExistingItem(_data) {
                let values = _data[1];
                console.log(values[0].newItem);
                let newItem = values[0].newItem;
                let amount = values[0].amount;
                let comment = values[0].comment;
                let list = document.getElementById("list");
                let newDiv = document.createElement("div");
                let newInput = document.createElement("input");
                let divItemData = document.createElement("div");
                createInput(newInput, newDiv);
                createDiv(newDiv);
                createItemDiv(divItemData, newDiv);
                addElement(divItemData);
                addElement(divItemData, newItem.toString());
                addElement(divItemData, amount.toString());
                addElement(divItemData, comment.toString());
                addElement(divItemData, dateWithoutTime);
                addButton(newDiv, "edit");
                addButton(newDiv, "delete");
                list.appendChild(newDiv);
            }
            async function itemAdd() {
                let formData = new FormData(document.querySelector("form"));
                let newItem = formData.get("newItem");
                let amount = formData.get("amount");
                let comment = formData.get("comment");
                let list = document.getElementById("list");
                let newDiv = document.createElement("div");
                let newInput = document.createElement("input");
                let divItemData = document.createElement("div");
                itemNumber++;
                createInput(newInput, newDiv);
                createDiv(newDiv);
                createItemDiv(divItemData, newDiv);
                addElement(divItemData);
                addElement(divItemData, newItem.toString());
                addElement(divItemData, amount.toString());
                addElement(divItemData, comment.toString());
                addElement(divItemData, dateWithoutTime);
                addButton(newDiv, "edit");
                addButton(newDiv, "delete");
                list.appendChild(newDiv);
                let query = new URLSearchParams(formData);
                await fetch("index.html?" + query.toString());
                console.log(query.toString());
                alert("Item added");
            }
            function addElement(_parent, _content) {
                let newItemField = document.createElement("p");
                _parent.appendChild(newItemField);
                newItemField.setAttribute("class", "ItemDataFont");
                if (_content) {
                    newItemField.innerHTML = _content;
                }
            }
            function addButton(_parent, _identify) {
                let newButton = document.createElement("button");
                _parent.appendChild(newButton);
                newButton.setAttribute("class", _identify);
                newButton.setAttribute("id", _identify + itemNumber);
                newButton.setAttribute("type", "button");
                newButton.innerHTML = _identify;
                switch (_identify) {
                    case "edit":
                        newButton.addEventListener("click", editItem);
                        break;
                    case "delete":
                        newButton.addEventListener("click", deleteItem);
                    default:
                        break;
                }
            }
            function createDiv(_element) {
                _element.setAttribute("class", "lister");
                _element.setAttribute("id", "lister" + itemNumber);
            }
            function createInput(_element, _parent) {
                _parent.appendChild(_element);
                _element.setAttribute("class", "bought");
                _element.setAttribute("id", "bought" + itemNumber);
                _element.setAttribute("type", "checkbox");
                _element.addEventListener("change", itemBought);
            }
            function createItemDiv(_element, _parent) {
                _parent.appendChild(_element);
                _element.setAttribute("class", "ItemData");
                _element.setAttribute("id", "ItemData" + itemNumber);
            }
            function itemBought(_event) {
                let trigger = _event.target.id;
                let triggerNum = trigger.replace(/\D/g, "");
                let identifyer = parseInt(triggerNum);
                //to be continued
            }
            function editItem(_event) {
                let trigger = _event.target.id;
                let triggerNumber = trigger.replace(/\D/g, "");
                let identifyer = parseInt(triggerNumber);
                let list = document.getElementById("lister" + identifyer);
                list.setAttribute("contenteditable", "true");
                let saveItem = function (_event) {
                    let trigger = _event.target.id;
                    let triggerNumber = trigger.replace(/\D/g, "");
                    let identifyer = parseInt(triggerNumber);
                    let list = document.getElementById("lister" + identifyer);
                    list.setAttribute("contenteditable", "false");
                    let saveButton = document.getElementById("save" + identifyer);
                    saveButton.innerHTML = "edit";
                    saveButton.setAttribute("id", "edit" + identifyer);
                    saveButton.addEventListener("click", editItem);
                };
                let saveButton = document.getElementById("edit" + identifyer);
                saveButton.innerHTML = "save";
                saveButton.setAttribute("id", "save" + identifyer);
                saveButton.removeEventListener("click", editItem);
                saveButton.addEventListener("click", saveItem);
            }
            function deleteItem(_event) {
                let trigger = _event.target.id;
                let triggerNum = trigger.replace(/\D/g, "");
                let identifyer = parseInt(triggerNum);
                let list = document.getElementById("list");
                let remIt = document.getElementById("lister" + identifyer);
                list.removeChild(remIt);
            }
        }
    }
})(ShoppingListL06 || (ShoppingListL06 = {}));
//# sourceMappingURL=script.js.map