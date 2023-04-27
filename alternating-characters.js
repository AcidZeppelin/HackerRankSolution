var s = 'AAABBB'
var arrS = s.split('')
var delCount = 0

console.log(arrS)

for(let i =0; i<arrS.length; i++){
    if(arrS[i] === arrS[i+1]){
        console.log('matching')
        delCount ++
    }
}

console.log(delCount)