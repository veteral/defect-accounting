import { useEffect, useContext } from "react";
import { ObjectsTable } from "../../components/tables/ObjectsTable";
import { Preloader } from "../../components/Preloader";
import { ObjectContext } from "../../context/object/objectContext";
import Filtertable from "../../components/tables/filtr";

export const Duble = () => {
    //const { duble, getDuble } = useContext(DubleContext);
    const { state, getDuble } = useContext(ObjectContext);

    useEffect(() => {
        //getDuble();
        // eslint-disable-next-line
    }, []);

    //if (duble.length === 0) return <Preloader />;

    return (
        <>
            {/* {state.duble.length !== 0 ? (
                <ObjectsTable data={state.duble} />
            ) : (
                <Preloader />
            )} */}
            duble
            <Filtertable />
        </>
    );
};
