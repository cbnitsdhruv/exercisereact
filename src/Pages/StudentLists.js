import React, { useState, useEffect } from 'react'
import { PlusOutlined, DeleteFilled, EditFilled } from '@ant-design/icons';
import { Layout, Button, Row, Col, Typography, Table, Space, Modal } from 'antd';
import EmptyData from '../Components/EmptyData';
import StudentDrawer from '../Components/StudentDrawer';

const { Header, Footer, Content } = Layout;
const { Text, Link, Title } = Typography;


const App = () => {

    const [visible, setVisible] = useState(false);
    const [studentData, _studentData] = useState([]);
    const [editData, setEditData] = useState(null);
    const [editIndex, setEditIndex] = useState(-1);
    const [forLocalData,setForLocalData]=useState();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [rowid, setRowId] = useState('')


    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: '1',            
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: '2',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: '3',
        },
        {
            title: 'Phone No.',
            dataIndex: 'phone',
            key: '4',
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: '5',

        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record,index) => (
                <Space size="middle">
                    <Button icon={<EditFilled />} onClick={() => editDrawer(record, index)}> Edit</Button>
                    <Button icon={<DeleteFilled />} onClick={() => showModal(index)} >Delete</Button>
                </Space>
            ),
        },
    ];
    

    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    const showModal = (id) => {
        setIsModalVisible(true);
        setRowId(id);        
      };
    
      const handleOk = () => {
        deleteTableRow(rowid)
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };

    const editDrawer = (data, index = -1) => {
        setEditIndex(index);        
        setEditData(data);
    }

    useEffect(() => {
        if (editData) {
            setVisible(true)
        } else {
            setVisible(false)
        }
       // setForLocalData(JSON.parse(localStorage.getItem('formData')))
    }, [editData ,localStorage.getItem('formData')]);

    const submitData = (data) => {
        const tempStudents = [...studentData];        
        if(editIndex === -1){
            tempStudents.push(data);
            setVisible(false)
        } else{
            tempStudents[editIndex] = data;
            setEditData(null);
            setEditIndex(-1);
        }
        _studentData(tempStudents);
    }

    const deleteTableRow = (idx) =>{
        const tempStudents = [...studentData];
        tempStudents.splice(idx, 1);
        _studentData(tempStudents)
    }

    return (
        <section>
            <Layout>
                <Header>
                    <Row>
                        <Col sm={6}>
                            <div className='valign'>
                                <Title level={2} type="warning">LOGO HERE</Title>
                            </div>
                        </Col>
                        <Col sm={12} >
                            <div className='valign justify-center'>
                                <Title level={3} type="warning">Welcome to your portal</Title>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className='valign justify-end'>
                                <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
                                    Add New
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Header>
                <Content>
                    <div className='studenttablewrap container'>
                        {/* <StudentTable studentData={studentData} editDrawer={editDrawer} /> */}
                        <Table columns={columns} dataSource={studentData} />
                    </div>

                    {/* <div className='studenttablewrap emptybox container'>
                        <EmptyData />


                        
                </div> */}



                </Content>
                <Footer >
                    <div className='valign justify-center'>
                        <Text>Made with ❤ by Smartwork</Text><Link href='#'>Go</Link>
                    </div>
                </Footer>
            </Layout>
            {visible ? <StudentDrawer visible={visible}  onClose={onClose} onSubmit={(data) => submitData(data)} editData={editData} /> : null}
            
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <div className='d-flex justify-center'>
                    <p>Are you sure want to deleete</p>
                </div> 
            </Modal>
        
        
        </section>
    );
};

export default App;