let s = 'SOSSOSSOS'
let sArr = s.split('')
let value = 0

for(let i =0; i< sArr.length; i+=3){
    if(sArr[i] != 'S'){
        value ++
    }if(sArr[i+1] != 'O'){
        value ++
    }if(sArr[i+2] != 'S'){
        value ++
    }
}
console.log(value)