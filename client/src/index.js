import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ObjectState } from "./context/object/ObjectState";

ReactDOM.render(
    <React.StrictMode>
        <ObjectState>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ObjectState>
    </React.StrictMode>,
    document.getElementById("root")
);
