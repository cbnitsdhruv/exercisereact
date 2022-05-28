import { Button, Space, Table } from 'antd';
import { DeleteFilled, EditFilled } from '@ant-design/icons';


const StudentTable = ({
    formArray,
    editDrawer
}) => {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text,) => <a>{text}</a>,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Phone No.',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Gender',
            key: 'gender',
            dataIndex: 'gender',

        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record,) => (
                <Space size="middle">
                    <Button icon={<EditFilled />} onClick={() => editDrawer(record)}> Edit</Button>
                    <Button icon={<DeleteFilled />}>Delete</Button>
                </Space>
            ),
        },
    ];
    return (
        <Table columns={columns} dataSource={formArray} />
    )
};






export default StudentTable;