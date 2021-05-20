import React from 'react'
import { Row, Col } from 'antd';

const items = [
    {
      key: '1',
      icon: <i className="fas fa-chart-pie"></i>,
      title: 'High Performance',
      content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
    },
    {
      key: '2',
      icon: <i className="fas fa-desktop"></i>,
      title: 'Flat Design',
      content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
    },
    {
      key: '3',
      icon: <i className="fas fa-database"></i>,
      title: 'Simplified Workflow',
      content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
    },
  ]

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
                    {items.map(item => {
                        return (
                            <Col span={8}>
                                {item.title}
                                {item.content}
                            </Col>
                            
                        );
                    })}
                    
                </Row>    
            </div>
        </div>
    )
}

export default AppAbout
