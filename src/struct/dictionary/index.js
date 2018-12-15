export default class Dictionary {
    constructor(...arg) {
        this.items = {};
        arg && arg.forEach(item => this.items={...item});
    }
    keys = Object.keys(this.items);
    size = keys.length;
    has(key) {
        return key in this.items;
    }

    set(key, value) {
        this.items[key] = value
    }

    delete(key) {
        if(this.items.has(key)){
            delete this.items[key];
            return true;
        }
        return false;
    }

    get(key) {
        return this.has(key) ? this.items[key] : undefined;
    }

    values() {
        let values = [];
        for(let key in this.items) {
            this.has(key) && values.push(this.items[key])
        }
        return values;
    }

    clear() {
        this.items = {};
        return true;
    }


}