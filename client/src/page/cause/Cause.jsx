import React, { useContext, useEffect } from "react";
import { CauseContext } from "../../context/cause/causeContext";

export const Cause = () => {
    const { cause, getAllCause } = useContext(CauseContext);

    useEffect(() => {
        getAllCause();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            {cause.map((el) => (
                <div>{el.key}</div>
            ))}
        </>
    );
};
