import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const AppWork = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
  
    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
    
        return (
            <div id="works" className="block worksBlock">
                <div className="container-fluid">
                    <div className="titleHolder">
                        <h2>How it works</h2>
                        <p>Perspiciatis vero similique, ut ducimus modi ipsam autem tempora</p>
                    </div>
                    <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
              </div>
            </div>
        )
   
}    


export default AppWork;
