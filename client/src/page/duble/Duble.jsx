import { useEffect, useContext } from "react";
import { DubleContext } from "../../context/duble/dubleContext";
import { ObjectsTable } from "../../components/tables/ObjectsTable";

export const Duble = () => {
    const { duble, getDuble } = useContext(DubleContext);
    useEffect(() => {
        getDuble();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <ObjectsTable data={duble} />
        </>
    );
};
