import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { Affix, Button, Row, Col, Form, Input, Checkbox, Select, Menu, Dropdown } from 'antd';
import { DownOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import Colors from '../../../utils/Colors';
import LOGO from '../../../assets/desktop_logo.png';
import './css/DesktopTopNavbarStyle.css';

const { SubMenu } = Menu;
const { Option } = Select;

const DesktopTopNavbar = () => {
    const [top, setTop] = useState(0);
    const history = useHistory();

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };
    
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
          <Select style={{ width: 50, height: 35 }}>
            <Option value="86">+86bbhjhjghjghjgjh</Option>
            <Option value="87">+87</Option>
          </Select>
        </Form.Item>
    );

    const menu = (
        <Menu>
            <Menu.ItemGroup title="Group title">
                <Menu.Item>1st menu item</Menu.Item>
                <Menu.Item>2nd menu item</Menu.Item>
                <Menu.Item>2nd menu item</Menu.Item>
                <Menu.Item>2nd menu item</Menu.Item>
                <Menu.Item>2nd menu item</Menu.Item>
            </Menu.ItemGroup>
        </Menu>
    );

    return(
        <div style={{width: '100%'}}>
            <Affix offsetTop={top} className="navbar">
                <div className="navbarContainer" style={{backgroundColor: Colors.darkBlue()}}>
                    <div style={{paddingLeft: 15}}>
                        <Row>
                            <Col span={2}></Col>
                            <Col 
                                span={3}
                                className="centerStyle"
                            >
                                <img 
                                    src={LOGO} 
                                    className="desktopLogo" 
                                    onClick={() => history.push('/')}
                                    alt="LOGO"
                                />
                            </Col>
                            <Col span={10}>
                                <Form
                                    name="basic"
                                    initialValues={{ remember: true }}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                >
                                    <Form.Item
                                        name="username"
                                        rules={[{ required: true, message: 'Please input your username!' }]}
                                    >
                                        <Input 
                                            className="searchBox" 
                                            addonBefore={prefixSelector}
                                            placeholder="Search for products, brands and more"
                                        />
                                    </Form.Item>
                                </Form>
                            </Col>
                            <Col 
                                span={2}
                                className="centerStyle"
                                >
                                <Dropdown overlay={menu}
                                    placement="bottomCenter"
                                >
                                    <a className="ant-dropdown-link userSecction" 
                                        onClick={e => e.preventDefault()}
                                    >
                                    Name <DownOutlined />
                                    </a>
                                </Dropdown>
                            </Col>
                            <Col 
                                span={2} 
                                className="centerStyle"
                                >
                                <Dropdown overlay={menu}
                                    placement="bottomCenter"
                                >
                                    <a className="ant-dropdown-link userSecction" 
                                        onClick={e => e.preventDefault()}
                                    >
                                    More <DownOutlined />
                                    </a>
                                </Dropdown>
                            </Col>
                            <Col 
                                span={2} 
                                className="centerStyle"
                                >
                                <a
                                    className="shoppingCart"
                                    onClick={e => e.preventDefault()}
                                >
                                    <ShoppingCartOutlined />
                                    <span className="cartText">&nbsp;Cart</span>
                                </a>
                            </Col>
                            <Col span={2}></Col>
                        </Row>
                    </div>
                </div>
            </Affix>
        </div>
    );
}

export default DesktopTopNavbar;