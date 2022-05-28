import { Button, Col, Drawer, Form, Input, Row, Select, Space } from "antd";
import { useEffect, useState } from "react";
const { Option } = Select;

const StudentDrawer = ({
  visible,
  onClose,
  _formArray,
  formArray,
  editData,
}) => {
  // const [name , setName] = useState();
  // const [age , setAge] = useState();
  // const [address , setAddress] = useState();
  // const [phoneNumber , setPhoneNumber ] = useState();
  // const [gender, setGender] = useState();

  const [form] = Form.useForm();

  // useEffect(()=>{
  // console.log(formArray,"sdfsgsd");
  // localStorage.setItem('formData',JSON.stringify(formArray));
  // },[formArray])

  const Submit = () => {
    form.validateFields().then((values) => {
      console.log("ppp", values);
      _formArray([...formArray, values]);
      form.resetFields();
    });
  };

  // const CheckValidation = (e) => {

  // }

  return (
    <>
      <Drawer
        title="Create a new account"
        width={650}
        onClose={onClose}
        visible={visible}
        bodyStyle={{
          paddingBottom: 80,
        }}
      >
        <Form form={form} layout="vertical" onFinish={Submit}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Name"
                rules={[
                  {
                    required: true,
                    message: "Please enter Name",
                    type: "text",
                  },
                ]}
              >
                <Input
                  placeholder="Please enter Your name"
                  defaultValue={editData.name}
                //   onChange={(e) => CheckValidation(e.target.value)}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="age"
                label="Age"
                rules={[
                  {
                    required: true,
                    message: "Please enter Age",
                  },
                ]}
              >
                <Input
                  placeholder="Please enter Age"
                  defaultValue={editData.age}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="address"
                label="Address"
                rules={[
                  {
                    required: true,
                    message: "Please enter Address",
                  },
                ]}
              >
                <Input
                  placeholder="Please enter Address"
                  defaultValue={editData.address}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="phone"
                label="Phone No."
                rules={[
                  {
                    required: true,
                    message: "Please enter Number",
                  },
                ]}
              >
                <Input
                  placeholder="Please enter Phone No."
                  defaultValue={editData.phone}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="gender"
                label="Gender"
                rules={[
                  {
                    required: true,
                    message: "Please select Your Gender",
                  },
                ]}
              >
                <Select
                  placeholder="Please select gender"
                  value="Male"
                  defaultValue={editData.gender}
                >
                  <Option value="Male">Male</Option>
                  <Option value="Female">Female</Option>
                  <Option value="Others">Others</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Space className="justify-end w-100">
            <Button htmlType="reset">Reset</Button>
            <Button htmlType="submit" type="primary">
              Submit
            </Button>
          </Space>
        </Form>
      </Drawer>
    </>
  );
};

export default StudentDrawer;
