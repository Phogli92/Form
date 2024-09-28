import React from 'react';
import { Button, Form, Input, Select} from "antd";
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

function App () {
    return(
    <>
    <Form
        name="basic"
        labelCol={{
        span: 8,
        }}
        wrapperCol={{
        span: 16,
        }}
        style={{
        maxWidth: 600,
        }}
        initialValues={{
        remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        <Form.Item
        label="Username"
        name="username"
        rules={[
            {
            required: true,
            message: 'Please input your username!',
            },
        ]}
        >
        <Input />
        </Form.Item>

        <Form.Item
        label="Region"
        name="Region"
        rules={[
            {
            required: true,
            message: 'Please input your Region!',
            },
        ]}>

            <Select
            defaultValue="Region"
            style={{
            width: 200,
            }}
            onChange={handleChange}
            options={[
            {
                options: [
                {
                    label: <span>Tashkent</span>,
                    value: 'Tashkent',
                },
                {
                    label: <span>Andijon</span>,
                    value: 'Andijon',
                },
                {
                    label: <span>Fargona</span>,
                    value: 'Fargona',
                },
                {
                    label: <span>Namangan</span>,
                    value: 'Namangan',
                },
                {
                    label: <span>Jizzax</span>,
                    value: 'Jizzax',
                },
                {
                    label: <span>Qoraqalpagiston</span>,
                    value: 'Qoraqalpagiston',
                },
                {
                    label: <span>Samarqand</span>,
                    value: 'Samarqand',
                },
                {
                    label: <span>Buxoro</span>,
                    value: 'Buxoro',
                },
                {
                    label: <span>Xorazm</span>,
                    value: 'Xorazm',
                },
                {
                    label: <span>Navoiy</span>,
                    value: 'Navoiy',
                },
                {
                    label: <span>Qashqadaryo</span>,
                    value: 'Qashqadaryo',
                },
                {
                    label: <span>Sirdaryo</span>,
                    value: 'Sirdaryo',
                },
                {
                    label: <span>Surxandaryo</span>,
                    value: 'Surxandaryo',
                },
                ],
            },
            ]}
            />

        </Form.Item>

        <Form.Item
        label="Phone Number"
        name="Phone Number"
        rules={[
            {
            required: true,
            message: 'Please input your Phone Number!',
            },
        ]}
        >
        <Input/>
        </Form.Item>

        <Form.Item
        wrapperCol={{
            offset: 8,
            span: 16,
        }}

        >
        <Button type="primary" htmlType="submit">
            Add Number
        </Button>
        <Button type="primary" htmlType="submit">
            Submit
        </Button>
        </Form.Item>
    </Form>
</>
    )
}
export default App;
