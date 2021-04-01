import { DatePicker, Button } from "antd";

export const ControlReport = () => {
    return (
        <div className="reports">
            <h1>Контроль за сработавшими объектами</h1>
            <DatePicker />
            <DatePicker />
            <Button type="primary">Отмена</Button>
            <Button type="primary">Сформировать</Button>
        </div>
    );
};
