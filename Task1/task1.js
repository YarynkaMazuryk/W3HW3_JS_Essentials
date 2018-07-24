
if (!Array.prototype.map) {

    Array.prototype.map = (callback, thisArg) => {
        if (!Array.isArray(thisArg)) {
            throw new TypeError(`${thisArg} is not array`);
        }
        if (typeof callback !== 'function') {
            throw new TypeError(`${callback} is not a function`);
        }
        const newArray = [];
        for (let i = 0; i < thisArg.length; i++) {
            newArray[i] = callback.call(thisArg, thisArg[i], i, thisArg)
        }
        return newArray;
    }
}

