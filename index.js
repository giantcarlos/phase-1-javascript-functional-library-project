function myEach(collection, callback) {
    for (let accessor in collection) {
        callback(collection[accessor])
    }
    return collection;
}

function myMap(collection, callback) {
    let newArray = []
    for (let accessor in collection) {
        newArray.push(callback(collection[accessor]))
    }
    return newArray;
}

function myReduce(collection, callback, acc) {
    let array = []
    let copy = myValues(collection)
    acc = acc || copy.shift();
    for (array in copy) {
        acc = callback(acc, copy[array], copy)
    }
    return acc;
}

function myFind(collection, callback) {
    for (let accessor in collection) {
        let element = collection[accessor];
        if(callback(element)) {
            return element;
        }
    }
}

function myFilter(collection, callback) {
    let selectArray = [];
    for (let accessor in collection) {
        let element = collection[accessor];
        if(callback(element)) {
            selectArray.push(element);
        }
    }
    return selectArray;
}

function mySize(collection) {
    return Object.keys(collection).length;
}

function myFirst(collection, n = 1) {
    let count = 1
    let array = []
    for(let accessor in collection) {
        if(count <= n) {
            array.push(collection[accessor]);
            count ++
        }
    }
    return array.length > 1 ? array : array[0]
}

function myLast(collection, n = 1) {
    let start = collection.length - n;
    return n > 1 ? collection.slice(start, collection.length) : collection[start];
}

function myKeys(object) {
    return Object.keys(object);
}

function myValues(object) {
    return Object.values(object);
}