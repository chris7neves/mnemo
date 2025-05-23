
// Could be nice to have a reference to the div that contains the itemcontainer, so that calling additem
// would act directly on that div, and all logic would be kept here

// Actually this isnt a good idea for separation of concerns. frontend logic should be disconnected from backend.


class ItemContainer {

    label;
    items;

    constructor(label, itemSet=[]) {
        this.label = label;
        this.items = itemSet;
    }

    addItem(item) {
        this.items[this.items.length] = item;
    }
}