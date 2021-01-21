
Array.prototype._map = function (fn, thisArg = []) {
    const result = []

    this.reduce((pre, cur, index, arr) => {
        result.push(fn.call(this.thisArg, cur, index, arr))
    }, 0)

    return result;
}

const arr = [1,2,3,4,5]

const res = arr._map((item) => {
    return item * 2
})

console.log(res)