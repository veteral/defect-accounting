import React, { useContext, useEffect } from "react";
import { CauseContext } from "../../context/cause/causeContext";

export const Cause = () => {
    const { data, getAllCause } = useContext(CauseContext);

    useEffect(() => {
        getAllCause();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            {data.map((el) => (
                <div>{el.key}</div>
            ))}
        </>
    );
};
