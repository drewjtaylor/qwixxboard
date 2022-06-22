import NumbersRow from './NumbersRow';
// import TotalsRow from './TotalsRow';


const Board = () => {
    return (
        <div className="width90">
            <div className="bg-red">
                <NumbersRow />
            </div>
            <div className="bg-yellow">
                <NumbersRow />
            </div>
            <div className="bg-green">
                <NumbersRow />
            </div>
            <div className="bg-blue">
                <NumbersRow />
            </div>
        </div>
    )

};

export default Board;