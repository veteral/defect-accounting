import { Switch, Route } from "react-router-dom";
import { Layout } from 'antd';

import {Objects} from "../page/objects/Objects";
import {Duble} from "../page/duble/Duble";
import {Defects} from "../page/defects/Defects";
import {About} from "../page/about/About";

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
                <Route path="/defects" component={Defects} />
                <Route path="/reports" component={About} />
                <Route path="/about" component={About} />

            </Switch>            
        </Content>
    );
}

export default ContentPage;