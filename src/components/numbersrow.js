import NumberBox from "./NumberBox";
import TotalBox from "./TotalBox";

const NumbersRow = () => {
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


            {/* Totals should eventually be on bottom, but for now it's simple to keep it here until I figure how to make it work */}
            <div className="col">
                <TotalBox totalMarks={5}/>
            </div>

{/* Blocked bottom row until I can figure out totals for just simple numbers */}
            {/* <div className="col">
                <NumberBox num='🔒'/>
            </div> */}

        </div>
    )
};

export default NumbersRow;