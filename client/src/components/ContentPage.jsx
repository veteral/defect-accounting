import { Switch, Route } from "react-router-dom";
import { Layout } from "antd";

import { Objects } from "../page/objects/Objects";
import { Duble } from "../page/duble/Duble";
import { Cause } from "../page/cause/Cause";
import { About } from "../page/about/About";
import { ControlReport } from "../page/reports/ControlReport";

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
                <Route path="/reports" component={ControlReport} />
                <Route path="/about" component={About} />
            </Switch>
        </Content>
    );
};

export default ContentPage;
