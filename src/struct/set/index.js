export default class Set{
    constructor(array) {
        this.items = {};
        array && array.map(item => {
            this.items[item] = item;
        });
    }

    has(value) {
        return this.items.hasOwnProperty(value);
    }

    add(value) {
        if(!this.has(value)){
            this.items[value] = value;
            return true
        }
        return false;
    }

    remove(value) {
        if(this.has(value)){
            delete this.items[value];
            return true;
        }
        return false;
    }

    size() {
        return Object.keys(this.items).length;
    }
    
    values() {
        return Object.keys(this.items).map(key => {
            return this.items[key];
        })
    }

    clear() {
        this.items = {};
        return true;
    }
}