let arr = [1, 2, 3, 4, 5]
let min = 0
let max = 0
let sum = 0
let sumArr = []

for(let i=0; i<arr.length; i++){
    sum = (sum + arr[i])
}
for(let i=0; i<arr.length; i++){
    let temp = sum - arr[i]
    sumArr.push(temp)
}
sumArr =  sumArr.sort()
min = sumArr[0]
max = sumArr[sumArr.length-1]

console.log(min + ' ' + max)