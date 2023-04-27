let grades = [73, 67, 38, 33 ]
let finGrades = []

console.log(grades)

for(let i =0; i<grades.length; i ++){
    let round = Math.ceil(grades[i]/5)*5
    if(grades[i]<38){
        finGrades.push(grades[i])
    }else if(round-grades[i] < 3){
        finGrades.push(round)
    }else{
        finGrades.push(grades[i])
    }
}

console.log(finGrades)