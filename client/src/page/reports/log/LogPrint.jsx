import { useContext } from "react";
import { ReportContext } from "../../../context/reports/reportContext";

export const LogPrint = () => {
    const { state } = useContext(ReportContext);
    console.log("print state", state);
    return (
        <div>
            <h1>ЖУРНАЛ СРАБАТЫВАНИЙ</h1>
            <h3>за период с 01.01.2021 по 31.01.2021</h3>
        </div>
    );
};
