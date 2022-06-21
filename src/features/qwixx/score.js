let row1marks = 5;
let row2marks = 2;
let row3marks = 8;
let row4marks = 4;

let row1score = scoreRow(row1marks);
let row2score = scoreRow(row2marks);
let row3score = scoreRow(row3marks);
let row4score = scoreRow(row4marks);

const scoreRow = (numberofmarks) => {
    let score = 0;
    while (numberofmarks > 0) {
        score += numberofmarks;
        numberofmarks--;
    };
    return score
};

function totalscore(row1score, row2score, row3score, row4score, penalties = 0) {
    return row1score + row2score + row3score + row4score - penalties
};

console.log(scoreRow(row1marks));
console.log(scoreRow(row2marks));
console.log(scoreRow(row3marks));
console.log(scoreRow(row4marks));

console.log(totalscore(row1score, row2score, row3score, row4score, 5));

export default scoreRow