let s = 'acxz'
let arrS = s.split('')
let arrASCII = []
let arrASCIIRev = []
let diff = []
let diffRev = []

for(let i =0; i<arrS.length; i++){
    arrASCII.push(arrS[i].charCodeAt(0))
}
arrASCIIRev = arrASCII.slice().reverse()

for(let i =0; i<arrS.length; i++){
    diff.push(Math.abs(arrASCII[i ]- arrASCII[i +1]))
    diffRev.push(Math.abs(arrASCIIRev[i ]- arrASCIIRev[i +1]))
}

function checkEqual(a,b){
    return JSON.stringify(a) === JSON.stringify(b);
}

if(checkEqual(diff.slice(0,-1), diffRev.slice(0,-1))){
    console.log("Funny")
}else{
    console.log("Not Funny")
}

console.log(arrASCII)
console.log(arrASCIIRev)
console.log(diff.slice(0,-1))
console.log(diffRev.slice(0,-1))