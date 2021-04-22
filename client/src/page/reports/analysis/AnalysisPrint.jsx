import { useContext } from "react";
import moment from "moment";
import { ReportContext } from "../../../context/reports/reportContext";

export const AnalysisPrint = () => {
    const { state } = useContext(ReportContext);

    console.log("print analysis", state.analysis);

    return (
        <div className="analysis">
            <h1>Анализ срабатываний объектов</h1>

            {state.analysis
                ? state.analysis.map((e) => (
                      <div key={e._id} className="analysisSection">
                          <div className="analysisObject">
                              <span>{e.passwords}</span>
                              <span>{e.name}</span>
                              <span>{e.address}</span>
                          </div>
                          <div>
                              {e.defects.map((i) => (
                                  <div className="analysisDefects" key={i._id}>
                                      <div className="date">{i.date}</div>
                                      <div className="time">{i.time}</div>
                                      <div className="train">{i.train} шл.</div>
                                      <div>{i.cause}</div>
                                  </div>
                              ))}
                          </div>
                      </div>
                  ))
                : null}
        </div>
    );
};
