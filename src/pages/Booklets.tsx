import { Collapse, Divider, Form, Space } from "antd";
import Title from "antd/es/typography/Title";
import Material from "../components/Material";
import Lamination from "../components/Lamination";
import Size from "../components/Size";
import Quantity from "../components/Quantity";
import Border from "../ui/Border";
import { formConfig } from "../utils/formConfig";
import Pages from "../components/Pages";

const handleSelectNoop = () => {};

const items = [
    {
        key: "cover",
        label: "Обложка",
        children: (
            <>
                <Material handleSelect={handleSelectNoop} />
                <Divider />
                <Lamination />
            </>
        ),
    },
    {
        key: "block",
        label: "Блок",
        children: (
            <>
                <Material handleSelect={handleSelectNoop} />
            </>
        ),
    },
];

const Booklets = () => {
    return (
        <div>
            <Title level={3} style={{ alignSelf: "start" }}>
                Брошюры
            </Title>
            <Form {...formConfig}>
                <Space
                    direction="vertical"
                    size={"middle"}
                    style={{ width: "100%" }}
                >
                    <Border>
                        <Size />
                    </Border>
                    <Quantity />
                    <Border>
                        <Pages />
                    </Border>
                    <Collapse items={items} defaultActiveKey={["cover"]} />
                    {/* <Result /> */}
                </Space>
            </Form>
        </div>
    );
};

export default Booklets;
