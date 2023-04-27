let bill = [3, 10, 2, 9]
let k = 1
let billChared = 12
let totalBill = 0
let totalSharedCost = 0
let costPerPerson = 0

for(let i =0; i<bill.length; i++){
    totalBill += bill[i]
}
totalSharedCost = totalBill - bill[k]
costPerPerson = totalSharedCost/2

if(billChared - costPerPerson === 0){
    console.log("Bon Appetit")
}else{
    console.log(billChared - costPerPerson)
}

console.log(totalBill)
console.log(totalSharedCost)
console.log(costPerPerson)