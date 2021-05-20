import React from 'react'
import { Row, Col } from 'antd';

function AppAbout() {
    return (
        <div className='block aboutBlock'>
            <div className='container-fluid'>
                <div className='titleHolder'>
                <h2>About Us</h2>
                <p>Tech is the first</p>
                </div>
                <div className='contentHolder'>
                    <p>Technology is the sum of techniques, skills, methods, and processes used in the production of goods or services or in the accomplishment of objectives, such as scientific investigation.</p>
                </div>
                <Row gutter={[16, 16]}>
                    <Col span={8}>Item</Col>
                    <Col span={8}>Item</Col>
                    <Col span={8}>Item</Col>
                </Row>    
            </div>
        </div>
    )
}

export default AppAbout
