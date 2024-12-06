// TASK: Да се дефинира функция SumEven2DimArrayElements(), която връща сумата от четните елементи на подаденият й двумерен масив.

// // ---> YOUR CODE HERE <---
function SumEven2DimArrayElements(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[0].length; j++) {
            const element = array[i][j];
            if(element % 2 === 0){
                sum += element;
            }
        }

    }
    return sum;
}

// TEST:
let arr = [
	[1,2,3],
	[4,5,6]
];

let sum = SumEven2DimArrayElements(arr);
console.log(sum);

// expected output: 12


//TASK:
//да се дефинира функция calcRectangleArea(), която връща лицето на правоъгълник, със зададени дължина и ширина:

// ---> YOUR CODE HERE <---

function calcRectangleArea(width, height) {
    return width * height;
}

// !!! Do not change code bellow
// TEST:
let rectWidth = 6;
let rectHeight = 3;

let area = calcRectangleArea(rectWidth, rectHeight);

console.log(`The area of rectangle is: ${area}`);

// // EXPECTED RESULT:
// // The area of rectangle is: 18



// TASK: дефинирайте функция 'getBestStudentName', която да връща името на студента с най-висока оценка
let getBestStudentName = function(scores,students) {
    // find max score index

    let currentMaxScore = scores[0];
    let maxScoreIndex=0;

    for(let i=1; i<scores.length; i++){
        let score = scores[i];
        if(score>currentMaxScore){
            currentMaxScore=score;
            maxScoreIndex=i;
        }
    }

    return students[maxScoreIndex]
}

let studentsData = [
    ["Ivan", "Pesho", "Maria"],
    [5, 4, 6]
];


let bestStudentName = getBestStudentName(studentsData[1], studentsData[0]);
console.log(`bestStudentName: ${bestStudentName}`);
