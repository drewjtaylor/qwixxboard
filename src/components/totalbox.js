import { useState } from 'react';

const TotalBox = () => {
    const [totalForRow, setRowTotal] = useState(0);


    return (
        <>  
            <button >
                {totalForRow}
            </button>
        </>
        
    )
};

export default TotalBox;