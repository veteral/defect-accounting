import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ObjectState } from "./context/object/ObjectState";
import { CauseState } from "./context/cause/CauseState";
import { ReportState } from "./context/reports/ReportState";
import { ConfigProvider } from "antd";
import ruRU from "antd/lib/locale/ru_RU";

ReactDOM.render(
    <React.StrictMode>
        <ConfigProvider locale={ruRU}>
            <ObjectState>
                <ReportState>
                    <CauseState>
                        <BrowserRouter>
                            <App />
                        </BrowserRouter>
                    </CauseState>
                </ReportState>
            </ObjectState>
        </ConfigProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
