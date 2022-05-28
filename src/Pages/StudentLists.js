import React, { useState, useEffect } from 'react'
import { PlusOutlined } from '@ant-design/icons';
import { Layout, Button, Row, Col, Typography } from 'antd';
import EmptyData from '../Components/EmptyData';
import StudentDrawer from '../Components/StudentDrawer';
import StudentTable from '../Components/StudentTable';

const { Header, Footer, Content } = Layout;
const { Text, Link, Title } = Typography;


const App = () => {

    const [visible, setVisible] = useState(false);
    const [formArray, _formArray] = useState([]);
    const [editData, setEditData] = useState({});

    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    const editDrawer = (data) => {
        setVisible(true)
    }

    return (
        <section>
            <Layout>
                <Header>
                    <Row>
                        <Col sm={6}>
                            <div className='valign'>
                                <Title level={2} type="warning" >LOGO HERE</Title>
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
                        <StudentTable formArray={formArray} editDrawer={editDrawer} />
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
            <StudentDrawer visible={visible} onClose={onClose} _formArray={_formArray} formArray={formArray} editData={editData} />
        </section>
    );
};

export default App;