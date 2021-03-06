import { Switch, Route } from "react-router-dom";
import { Layout } from 'antd';
import Objects from "../page/Objects";
import Duble from "../page/Duble";

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
                <Route path="/reports" component={Objects} />
                <Route path="/about" component={Objects} />

            </Switch>            
        </Content>
    );
}

export default ContentPage;