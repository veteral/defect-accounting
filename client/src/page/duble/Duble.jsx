import { useEffect, useContext } from "react";
import { DubleContext } from "../../context/duble/dubleContext";
import { ObjectsTable } from "../../components/tables/ObjectsTable";
import { Preloader } from "../../components/Preloader";

export const Duble = () => {
    const { duble, getDuble } = useContext(DubleContext);
    useEffect(() => {
        getDuble();
        // eslint-disable-next-line
    }, []);

    if (duble.length === 0) return <Preloader />;

    return (
        <>
            <ObjectsTable data={duble} />
        </>
    );
};
