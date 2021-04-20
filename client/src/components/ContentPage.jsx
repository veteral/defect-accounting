import { Switch, Route } from "react-router-dom";
import { Layout } from "antd";

import { Objects } from "../page/objects/Objects";
import { Duble } from "../page/duble/Duble";
import { Cause } from "../page/cause/Cause";
import { About } from "../page/about/About";
import { LogReport } from "../page/reports/log/LogReport";
import { LogPrint } from "../page/reports/log/LogPrint";
import { AnalysisReport } from "../page/reports/analysis/AnalysisReport";
import { AnalysisPrint } from "../page/reports/analysis/AnalysisPrint";

const { Content } = Layout;

const ContentPage = () => {
    return (
        <Content
            style={{
                padding: "0 50px",
                backgroundColor: "#ffffff",
            }}
        >
            <Switch>
                <Route exact path="/" component={Duble} />
                <Route path="/objects" component={Objects} />
                <Route path="/cause" component={Cause} />
                <Route
                    exact
                    path="/reports/analysis"
                    component={AnalysisReport}
                />
                <Route
                    path="/reports/analysis/print"
                    component={AnalysisPrint}
                />
                <Route exact path="/reports/log" component={LogReport} />
                <Route path="/reports/log/print" component={LogPrint} />
                <Route path="/about" component={About} />
            </Switch>
        </Content>
    );
};

export default ContentPage;
