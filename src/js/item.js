

export class Item {

    label;
    uuid;
    dateCreated;

    dueDate;
    description;
    priority;
    type; // Either habit or todo
    project; // If todo, which project does it belong to


    constructor(type, label) {
        this.label = label;
        this.type = type;
        this.uuid = crypto.randomUUID();
        this.dateCreated = new Date();
    }


}