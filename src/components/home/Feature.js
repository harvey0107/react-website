import React from 'react'
import { Card } from 'antd';


const { Meta } = Card;
function AppFeature() {
    return (
        <div className='block featureBlock bgGray'>
              <div className='container-fluid'>
              <Row gutter={[16, 16]}>
                    <Col span={8}>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                    </Col>
                </Row>
              </div>
        </div>
    )
}

export default AppFeature
