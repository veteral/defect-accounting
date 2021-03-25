import { useEffect, useContext } from "react";
import { DubleContext } from "../../context/duble/dubleContext";

export const Duble = () => {
    const { getDuble } = useContext(DubleContext);
    useEffect(() => {
        getDuble();
        // eslint-disable-next-line
    }, []);

    return <>duble</>;
};
