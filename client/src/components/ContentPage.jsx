import { Switch, Route } from "react-router-dom";
import { Layout } from 'antd';
import Objects from "../page/Objects";
import Duble from "../page/Duble";
import ViewsDefects from "../page/ViewsDefects";
import About from "../page/About";

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
                <Route path="/defects" component={ViewsDefects} />
                <Route path="/reports" component={About} />
                <Route path="/about" component={About} />

            </Switch>            
        </Content>
    );
}

export default ContentPage;