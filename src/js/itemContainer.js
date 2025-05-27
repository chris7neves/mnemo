
// Could be nice to have a reference to the div that contains the itemcontainer, so that calling additem
// would act directly on that div, and all logic would be kept here

// Actually this isnt a good idea for separation of concerns. frontend logic should be disconnected from backend.


export class ItemContainer {

    label;
    uuid;
    #items = new Map();

    constructor(label="Todo: Default Project") {
        this.label = label;
        this.uuid = crypto.randomUUID();
    }

    addItem(item) {
        this.#items.set(item.uid, item)
    }

    addManyItems(items) {
        /**
         * Accepts a container with a for .. each iterator
         */
    }

    getItem(uuid) {
        return this.#items.get(uuid)
    }
}


