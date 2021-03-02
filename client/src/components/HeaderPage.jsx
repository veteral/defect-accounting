import { Layout, Menu } from "antd";

const { Header } = Layout;

export default function Headerpage() {
    return (
        <Header>
            <div style={{ display: "flex", justifyContent: "left" }}>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={["2"]}
                    style={{ fontSize: "20px", width: "100%" }}
                >
                    <Menu.Item key="1">Повторы</Menu.Item>
                    <Menu.Item key="2">Объекты</Menu.Item>
                    <Menu.Item key="3">Отчеты</Menu.Item>
                    <Menu.Item key="4">О программе</Menu.Item>
                </Menu>
            </div>
        </Header>
    );
}
