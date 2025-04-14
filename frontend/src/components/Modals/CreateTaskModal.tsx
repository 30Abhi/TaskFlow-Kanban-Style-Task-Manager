import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import CreateTaskForm from '../Forms/CreateTaskForm';
import { useOpenModalStore } from '@/store/OpenModalStore';

const CreateTaskModal: React.FC = () => {
   const{isModalOpen,setIsModalOpen}=useOpenModalStore();

  const showModal = () => {
    setIsModalOpen(true);
  };

   

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Create Task
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} footer={null}>
        <CreateTaskForm />
      </Modal>
    </>
  );
};

export default CreateTaskModal;