//Jonas Atzenhofer
//Quellen: Robert Schindler, Yannick König, Henning Pils

namespace ShoppingList {
    export interface ItemAdded {
        newItem: string;
        Amount: number;
        Comment: string;
        bought: boolean;
        date: string;
    }

    export interface Data {
        [itemNumber: number]: ItemAdded[];
    }

    export let data: Data = {
        1: [
            {newItem: "Brot", Amount: 1, Comment: "Bauernbrot", bought: false, date: "27.10.2022"}
        ],
        2: [
            {newItem: "Mehl", Amount: 500, Comment: "gr", bought: false, date: "28.10.2022"}
        ]
    };

}