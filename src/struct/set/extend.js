import Set from './index';

// 并集
Set.prototype.union = function(otherSet){
    let unionSet = new Set();
    console.log(this);
    this.values().forEach(item => unionSet.add(item));
    otherSet.values().forEach(item => unionSet.add(item));
    return unionSet;
}

// 交集

Set.prototype.intersection = function(otherSet){
    let intersectionSet = new Set();
    this.values().forEach(item => {
        otherSet.has(item) && intersectionSet.add(item);
    })

    return intersectionSet;
}

// 差集
Set.prototype.difference = function(otherSet){
    let differenceSet = new Set();
    this.values().forEach(item => {
        otherSet.has(item) || differenceSet.add(item);
    })
    return differenceSet;
}

// 子集
Set.prototype.subset = function(otherSet){
    if(this.size() > otherSet.size()) {
        return false;
    } else {
        let values = this.values();
        for(let i =0; i<values.length; i++) {
            if(!otherSet.has(values[i])) {
                return false
            }
        }
        return true;
    }

}

export default Set;