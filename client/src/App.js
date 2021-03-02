import React from "react";
import { Layout } from "antd";
import HeaderPage from "./components/HeaderPage";

const { Content } = Layout;

function App() {
    return (
        <Layout className="layout">
            <HeaderPage />

            <Content
                style={{
                    padding: "0 50px",
                    backgroundColor: "#ffffff",
                }}
            >
                dfdfdfdfdf
            </Content>
        </Layout>
    );
}

export default App;
