const NumberBox = (props) => {
    return (
        <button className="number-box m-2 btn-primary text-light border rounded text-center">
            {props.num}
        </button>
    )
};

export default NumberBox;