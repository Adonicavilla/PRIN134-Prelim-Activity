function getGrades(grades) {
    let avg = grades.reduce((a, b) => a + b) / grades.length;
    
    let rating = 'F';
    if (avg >= 90) rating = 'A';
    else if (avg >= 80) rating = 'B';
    else if (avg >= 70) rating = 'C';
    else if (avg >= 60) rating = 'D';
    
    console.log(`Grades: [${grades}]. Grade average: ${avg.toFixed(1)}. Your rating: ${rating}. You ${rating === 'F' ? 'failed' : 'passed'}.`);
}

getGrades([85, 93, 89, 89, 85, 92, 100, 90, 80, 100]);
getGrades([80, 90, 77, 82, 68, 98, 89, 79, 93, 100]);
getGrades([70, 68, 77, 82, 68, 65, 89, 79, 93, 70]);
getGrades([56, 50, 89, 90, 75, 68, 34, 91, 19, 67]);
getGrades([10, 30, 70, 31, 90, 20, 89, 58, 67, 21]);
