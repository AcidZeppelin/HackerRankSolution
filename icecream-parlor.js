let t = 2 //number of trips to parlor
let m = 4

let arr = [2, 2,4, 3]
let cost = []

for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
        let tempCost = arr[i] + arr[j]
        if(tempCost === m){
            cost.push(i+1)
            cost.push(j+1)
        }
    }
}
return cost