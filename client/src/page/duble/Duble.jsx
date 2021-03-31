import { useEffect, useContext } from "react";
import { DubleContext } from "../../context/duble/dubleContext";
import { ObjectsTable } from "../../components/tables/ObjectsTable";
import { Preloader } from "../../components/Preloader";
import { ObjectContext } from "../../context/object/objectContext";

export const Duble = () => {
    const { duble, getDuble } = useContext(DubleContext);
    const { state } = useContext(ObjectContext);

    useEffect(() => {
        getDuble();
        // eslint-disable-next-line
    }, [state.duble]);

    if (duble.length === 0) return <Preloader />;

    return (
        <>
            {state.objects.length !== 0 ? (
                <ObjectsTable data={state.duble} />
            ) : (
                <Preloader />
            )}
        </>
    );
};
