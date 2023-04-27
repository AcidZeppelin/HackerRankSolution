let arr = [ 'abcdde', 'baccd', 'eeabg' ]
let comb = arr.join('')
let unq = [...new Set(comb)]

let result = unq.filter(ch =>
    arr.every(str => str.includes(ch)))

console.log(comb)
console.log(unq)
console.log(result.length)