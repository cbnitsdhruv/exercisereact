import { Button, Col, Drawer, Form, Input, Row, Select, Space } from "antd";
import { useEffect, useState } from "react";
const { Option } = Select;

const StudentDrawer = ({
  visible,
  onClose,
  editData,
  onSubmit, 
  forLocalData  
}) => {
  
  const [form] = Form.useForm();
  useEffect(()=>{
  if(editData){
    form.setFieldsValue(
      {
      name: editData.name,
      age: editData.age,
      address:editData.address,
      phone:editData.phone,
      gender:editData.gender
      }
    )
  }
  },[editData,])

  const submit = () => {
    form.validateFields().then((values) => {  
      onSubmit(values);        
     // localStorage.setItem('formData',JSON.stringify(values)) 
      form.resetFields();
    });
  };

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
        <Form form={form} layout="vertical" onFinish={submit} initialValues={{gender:'Male'}}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Name"
                rules={[
                  {
                    type:"text",
                    message:'Please Enter Text only'
                  },
                  {
                    required: true,
                    message: "Please Enter Name"
                  },
                ]}
              >
                <Input placeholder="Please Enter Your Name"  />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="age"
                label="Age"
                rules={[
                  
                  {
                    required: true,
                    message: "Please Enter Age",
                  },
                ]}
              >
                <Input
                  placeholder="Please Enter Age"
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
                    type:"text",
                    message:'Please Enter Text only'
                  },
                  {
                    required: true,
                    message: "Please Enter Address",
                  },
                ]}
              >
                <Input
                  placeholder="Please Enter Address"
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
                    message: "Please Enter Number",
                  },
                ]}
              >
                <Input
                  placeholder="Please Enter Phone No."
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
                    message: "Please Select Your Gender",
                  },
                ]}
              >
                <Select
                  placeholder="Please Select gender"
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
              submit
            </Button>
          </Space>
        </Form>
      </Drawer>
    </>
  );
};

export default StudentDrawer;
