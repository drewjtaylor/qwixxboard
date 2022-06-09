let row1marks = 5;
let row2marks = 2;
let row3marks = 8;
let row4marks = 4;

let row1score = scorerow(row1marks);
let row2score = scorerow(row2marks);
let row3score = scorerow(row3marks);
let row4score = scorerow(row4marks);

function scorerow(numberofmarks) {
    let score = 0;
    while (numberofmarks > 0) {
        score += numberofmarks;
        numberofmarks--;
    };
    return score
}

function totalscore(row1score, row2score, row3score, row4score, penalties=0) {
    return row1score + row2score + row3score + row4score - penalties
}

console.log(scorerow(row1marks));
console.log(scorerow(row2marks));
console.log(scorerow(row3marks));
console.log(scorerow(row4marks));

console.log(totalscore(row1score, row2score, row3score, row4score, 5))