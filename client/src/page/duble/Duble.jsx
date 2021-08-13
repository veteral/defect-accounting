import { useEffect, useContext } from "react";
import { ObjectsTable } from "../../components/tables/ObjectsTable";
import { Preloader } from "../../components/Preloader";
import { FixedHeader } from "../../components/FixedHeader";
import { ObjectContext } from "../../context/object/objectContext";

export const Duble = () => {
    const { state, getDuble, getDefectsIdObject } = useContext(ObjectContext);

    useEffect(() => {
        getDuble();
        // eslint-disable-next-line
    }, []);

    //if (duble.length === 0) return <Preloader />;

    console.log(state);

    return (
        <>
            <FixedHeader
                title={"Список объектов на контроле"}
                //buttonTitle={"Добавить объект"}
                //handleOnClick={handleAddObject}
            />
            {state.dubles.length !== 0 ? (
                <ObjectsTable
                    data={state.dubles}
                    //defects={state.defects}
                    getDefectsIdObject={getDefectsIdObject}
                    //editingObject={handleEditObject}
                    duble={"true"}
                />
            ) : (
                <Preloader />
            )}
        </>
    );
};
