import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ObjectState } from "./context/object/ObjectState";
import { CauseState } from "./context/cause/CauseState";

ReactDOM.render(
    <React.StrictMode>
        <ObjectState>
            <CauseState>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </CauseState>
        </ObjectState>
    </React.StrictMode>,
    document.getElementById("root")
);
