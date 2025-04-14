import React from 'react';
import {
  Button,
  DatePicker,
  Form,
  Input,
  Select,
  
} from 'antd';
import { useOpenModalStore } from '@/store/OpenModalStore';
import { createTask } from '@/utils/modifyTask';

const handleOnSubmit = (values: any, setIsModalOpen: any,userID:string,authtoken:string) => {
  console.log(values);
  const title=values.tasktitle;
  const status=values.tasktype;

  createTask(userID, status, title, authtoken).then(() => {
    // Refresh tasks after creating a new task
    setIsModalOpen(false); // Close the modal
  });
};



const CreateTaskForm: React.FC = () => {
    const {setIsModalOpen}=useOpenModalStore();
    
    const userID=localStorage.getItem("userid");
    const authtoken=localStorage.getItem("tokken");


  return (
    <>
    
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        
        style={{ maxWidth: 600 }}
        onFinish={
             // @ts-ignore
          (values)=>handleOnSubmit(values,setIsModalOpen,userID,authtoken)
        }
      >
      {/* title of task */}
        <Form.Item label="INPUT" name="tasktitle">
          <Input />
        </Form.Item>

        {/* type of task */}
        <Form.Item label="Select" name="tasktype">

          <Select>
            <Select.Option value="todo">TODO</Select.Option>
            <Select.Option value="completed">COMPLETED</Select.Option>
            <Select.Option value="ongoing">ONGOING</Select.Option>
          </Select>

        </Form.Item>
       
       

        <Form.Item label="Button">
            <Button htmlType='submit' >Submit</Button>
        </Form.Item>

      </Form>
    </>
  );
};

export default () => <CreateTaskForm />;