import React from 'react'
import { Menu } from 'antd';

function AppHeader() {
    return (
        <div className="container-fluid">
            <div className="header">
                <div className="logo" />
                    <Menu mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </div>
            </div>
    )
}

export default AppHeader