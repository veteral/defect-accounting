import React from "react";
import { Layout } from "antd";
import HeaderPage from "./components/HeaderPage";
import ContentPage from "./components/ContentPage";


function App() {
    return (
        <Layout className="layout">
            <HeaderPage />
            <ContentPage />            
        </Layout>
    );
}

export default App;
