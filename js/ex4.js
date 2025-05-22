//ex4
let a = 2
let b = 3
let c = 5
let isTriangle = false

if ((a + b > c) && (a + c > b) && (b + c > a)) {
    isTriangle = true
} else {
    isTriangle = false
}

let message = isTriangle ? "Triangle possible" : "Triangle is not possible"
console.log(message)