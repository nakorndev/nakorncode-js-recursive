console.log(4 ** 3) // 4 * 4 * 4
console.log(Math.pow(4, 3))

function pow(a, b) {
    if (b == 1) {
        return a
    } else {
        return a * pow(a, b - 1) // recursive
    }
}

console.log(pow(4, 3)) // 64
