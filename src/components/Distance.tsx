import { Form, InputNumber } from "antd";

const Distance = () => {
    return (
        <>
            <Form.Item
                label="Расстояние между листовками по вертикали:"
                name="verticalSpacing"
                wrapperCol={{ span: 8 }}
                labelCol={{ span: 16 }}
                colon={false}
            >
                <InputNumber min={1} max={100_000} style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item
                label="Расстояние между листовками по горизонтали:"
                name="horizontalSpacing"
                wrapperCol={{ span: 8 }}
                labelCol={{ span: 16 }}
                colon={false}
            >
                <InputNumber min={1} max={100_000} style={{ width: "100%" }} />
            </Form.Item>
        </>
    );
};

export default Distance;
