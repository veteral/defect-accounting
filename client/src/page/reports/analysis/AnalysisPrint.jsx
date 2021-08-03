import { useContext } from "react";
import { useLocation } from "react-router-dom";
//import moment from "moment";
import { ReportContext } from "../../../context/reports/reportContext";
import { Preloader } from "../../../components/Preloader";

export const AnalysisPrint = () => {
    const { state } = useContext(ReportContext);
    const location = useLocation();

    const handleClickClose = (event) => {
        event.preventDefault();

        const index = event.target.id;

        const idBlock = `analysisSection-${index}`;
        const block = document.getElementById(idBlock);

        block.className += " no-display";
    };

    return (
        <div className="analysis">
            <h1>Анализ срабатываний объектов</h1>
            <h3>
                c {location.state.start} по {location.state.end}
            </h3>

            {state.isPreloder ? (
                <Preloader />
            ) : (
                state.analysis.map((e, index) => (
                    <div
                        key={index}
                        className="analysisSection"
                        id={`analysisSection-${index}`}
                    >
                        <div className="headerAnalysis">
                            <div className="analysisObject">
                                <span>{e.password}</span>
                                <span>{e.name}</span>
                                <span>{e.address}</span>
                            </div>
                            <div
                                className="close no-print"
                                id={index}
                                onClick={handleClickClose}
                            >
                                x
                            </div>
                        </div>

                        <div>
                            {e.defects.map((i, index) => (
                                <div className="analysisDefects" key={index}>
                                    <div className="date">{i.date}</div>
                                    <div className="time">{i.time}</div>
                                    <div className="train">{i.train} шл.</div>
                                    <div>{i.cause}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};
