import NumberBox from "./numberbox";

const NumbersRow = (props) => {
    return (
        <div className='row'>
            <div className="col">
                <NumberBox num='2'/>
            </div>
            <div className="col">
                <NumberBox num='3'/>
            </div>
            <div className="col">
                <NumberBox num='4'/>
            </div>
            <div className="col">
                <NumberBox num='5'/>
            </div>
            <div className="col">
                <NumberBox num='6'/>
            </div>
            <div className="col">
                <NumberBox num='7'/>
            </div>
            <div className="col">
                <NumberBox num='8'/>
            </div>
            <div className="col">
                <NumberBox num='9'/>
            </div>
            <div className="col">
                <NumberBox num='10'/>
            </div>
            <div className="col">
                <NumberBox num='11'/>
            </div>
            <div className="col">
                <NumberBox num='12'/>
            </div>
            <div className="col">
                <NumberBox num='🔒'/>
            </div>
        </div>
    )
};

export default NumbersRow;