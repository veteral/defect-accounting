import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { AddDefect } from "./addDefect/AddDefect";

const { Header } = Layout;
const { SubMenu } = Menu;

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
                    <SubMenu
                        key="3"
                        //icon={<SettingOutlined />}
                        title="Отчеты"
                    >
                        <Menu.Item key="setting:1">
                            <Link to={"/reports/log"}>Журнал срабатываний</Link>
                        </Menu.Item>
                        <Menu.Item key="setting:2">
                            <Link to={"/reports/analysis"}>
                                Анализ срабатываний объектов
                            </Link>
                        </Menu.Item>
                    </SubMenu>
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
