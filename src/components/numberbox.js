import {useState} from 'react';

const NumberBox = ({num}) => {
    // useState to capture changes in clicks on box
    const [currentNum, setNum] = useState(num);

    // toggleX changes 'num' to and from x using the function set up with "useState"
    const toggleX = () => {
        if (currentNum === 'X') {
           setNum(num)
        } else {
            setNum('X')
        }
    }

    return (
        <button onClick={() => toggleX()} className="number-box m-2 btn-primary text-light border rounded text-center">
            {currentNum}
        </button>
    )
};

export default NumberBox;