import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { AddDefect } from "./addDefect/AddDefect";

const { Header } = Layout;

export default function Headerpage() {
    return (
        <Header style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", justifyContent: "left" }}>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={["1"]}
                    style={{ fontSize: "20px", width: "100%" }}
                >
                    <Menu.Item key="1">
                        <Link to={"/"}>Повторы</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to={"/objects"}>Объекты</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to={"/reports"}>Отчеты</Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Link to={"/cause"}>Виды срабатываний</Link>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Link to={"/about"}>О программе</Link>
                    </Menu.Item>
                </Menu>
            </div>
            <div>
                <AddDefect />
            </div>
        </Header>
    );
}
