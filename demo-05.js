
let grades1 = [80, 90, 77, 82, 68, 98, 89, 79, 41, 80];
let grades2 = [170, 68, 77, 82, 68, 65, 80, 75, 93, 78];
let grades3 = [56, 50, 45, 98, 75, 50, 68, 34, 91, 19];
let grades4 = [10, 30, 70, 31, 90, 20, 99, 58, 67, 21];


function calculateAverage(grades) {
    let total = grades.reduce((sum, grade) => sum + grade, 0);
    return total / grades.length;
}

function getRating(average) {
    if (average >= 90) {
        return 'A';
    } else if (average >= 80) {
        return 'B';
    } else if (average >= 70) {
        return 'C';
    } else if (average >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}


function getPassStatus(rating) {
    return rating !== 'F' ? 'You passed.' : 'You failed.';
}

function printResults(grades) {
    let averageGrade = calculateAverage(grades);
    let rating = getRating(averageGrade);
    let passStatus = getPassStatus(rating);

    console.log('Grades:', grades.join(', '));
    console.log('Grade average:', averageGrade.toFixed(1));
    console.log('Your rating:', rating);
    console.log(passStatus);
    console.log('--------------------------------------');
}


console.log(printResults);