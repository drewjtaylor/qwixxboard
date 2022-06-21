import { useState } from 'react';

// TotalBox has a prop of totalMarks

const TotalBox = ({ totalMarks }) => {

    const [scoreForRow, setRowTotal] = useState(0);

    // Temporary functions set up to test scoring function
    const calculateScoreForRow = (numberOfMarks) => {
        let score = 0;
        while (numberOfMarks > 0) {
            score += numberOfMarks;
            numberOfMarks--
        }
        return score
    }

    return (
        <>
            <button >
                {calculateScoreForRow(totalMarks)}
            </button>
        </>
    )
};

export default TotalBox;

function scorerow(numberofmarks) {
    let score = 0;
    while (numberofmarks > 0) {
        score += numberofmarks;
        numberofmarks--;
    };
    return score
}