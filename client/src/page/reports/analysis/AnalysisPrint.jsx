import { useContext } from "react";
import { useLocation } from "react-router-dom";
//import moment from "moment";
import { ReportContext } from "../../../context/reports/reportContext";
import { Preloader } from "../../../components/Preloader";

export const AnalysisPrint = () => {
    const { state } = useContext(ReportContext);
    // const [isFetching, setFetching] = useState(true);
    const location = useLocation();

    //console.log("print analysis", state.analysis);

    return (
        <div className="analysis">
            <h1>Анализ срабатываний объектов</h1>
            <h3>
                c {location.state.start} по {location.state.end}
            </h3>

            {state.isPreloder ? (
                <Preloader />
            ) : (
                state.analysis.map((e) => (
                    <div key={e._id} className="analysisSection">
                        <div className="analysisObject">
                            <span>{e.passwords}</span>
                            <span>{e.name}</span>
                            <span>{e.address}</span>
                        </div>
                        <div>
                            {e.defects.map((i) => (
                                <div
                                    className="analysisDefects"
                                    key={i.defectId}
                                >
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
