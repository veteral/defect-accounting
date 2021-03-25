import React, { useContext, useEffect } from "react";
import { CauseContext } from "../../context/cause/causeContext";
import { CauseTable } from "../../components/tables/CauseTable";
import { FixedHeader } from "../../components/FixedHeader";

export const Cause = () => {
    const { cause, getCause } = useContext(CauseContext);

    useEffect(() => {
        getCause();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <FixedHeader
                title={"Список видов срабатывания"}
                buttonTitle={"Добавить вид срабатывания"}
                // handleOnClick={}
            />
            <CauseTable data={cause} />
        </>
    );
};
