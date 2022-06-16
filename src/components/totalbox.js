import { increaseMarks } from "./rowSlice";

const TotalBox = (props) => {
    return (
        <button onClick={() => {{increaseMarks(props.totalMarks); console.log(props.totalMarks)}}}>
            {props.totalMarks}
        </button>
    )
};

export default TotalBox;