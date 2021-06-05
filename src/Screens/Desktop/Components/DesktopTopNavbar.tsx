import React, {useContext, useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import { Affix, Button, Row, Col, Form, Input, Modal, Select, Menu, Dropdown, message } from 'antd';
import { DownOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Store } from '../../../Context/Store';
import { storeData } from '../../../localStorage/storeData';
import { getData } from '../../../localStorage/getData';
import { handleLogin } from '../../../api/handleLogin';
import { handleSignup } from '../../../api/handleSignup';
import Loading from './Loading';
import Colors from '../../../utils/Colors';
import LOGO from '../../../assets/desktop_logo.png';
import './css/DesktopTopNavbarStyle.css';

const DesktopTopNavbar = (props) => {
    const {search} = props;
    const [top] = useState(0);
    const history = useHistory();
    const {user, setUser} = useContext(Store);
    const [loginModal, setLoginModal] = useState<boolean>(false);
    const [showRegisterForm, setShowRegisterForm] = useState<boolean>(false);
    const [loading, setLoading] = useState<Boolean>(false);

    const checkUserLogginOrNot = async () => {
        const userInfo = await getData('user');
        if(userInfo && userInfo.id) {
            setUser(userInfo);
            setLoading(false);
        } else {
            setUser({});
            setLoading(false);
        }
    }

    useEffect(() => {
        setLoading(true)
        checkUserLogginOrNot();
    }, []);

    const logout = () => {
        localStorage.clear();
        setUser({});
        message.success('You have logout Successfully!');
    }

    const onFinish = (values: any) => {
        if(values.search.trim()) {
            history.push(`/search/${values.search}`);
        } else {
            console.log('Empty');
        }
    };
    
    const onFinishFailed = (errorInfo: any) => {
        Modal.error({
            title: 'Error',
            content: 'Internal Server Error, Please try after sometime...'
        });
    };

    const submitLogin = async (values) => {
        try {
            setLoading(true);
            const response = await handleLogin(values);
            
            if(response && response.message.toString() === 'Wrong Password') {
                setLoading(false);
                setLoginModal(false);
                Modal.error({
                    title: 'Error',
                    content: 'You have entred wrong password!'
                });
            } else if (response && response.message.toString() === 'No User Found') {
                setLoading(false);
                setLoginModal(false);
                Modal.error({
                    title: 'Error',
                    content: `There is no user with "${values.email}" mail id`
                });
            } else if(response && response.message.toString() === 'success') {
                setUser(response);
                storeData('user', response);
                setLoading(false);
                setLoginModal(false);
                message.success('Successfully loggedin!');
            } else {
                setLoading(false);
                setLoginModal(false);
                Modal.error({
                    title: 'Error',
                    content: 'Internal Server Error, Please try after sometime...'
                });
            }

        } catch(error) {
            setLoading(false);
            setLoginModal(false);
            console.log('Error at Submit login', error);
            Modal.error({
                title: 'Error',
                content: 'Internal Server Error, Please try after sometime...'
            });
        }
    }

    const failedLogin = (values) => {
        setLoginModal(false);
        setLoading(false);
        Modal.error({
            title: 'Error',
            content: 'Internal Server Error, Please try after sometime...'
        });
    }

    const submitNewUserData = async (values) => {
        setLoading(true);
        values.userType = 'buyer';
        values.approved = true;
        const response: any = await handleSignup(values);

        if(response && response.message.toString() === 'User Exists') {
            setLoading(false);
            setLoginModal(false);
            Modal.error({
                title: 'Error',
                content: 'A user exists with this email id'
            });
        } else if(response && response.message.toString() === 'success') {
            setUser(response);
            storeData('user', response);
            setLoading(false);
            setLoginModal(false);
            message.success('Successfully registred!');
        } else {
            setLoading(false);
            setLoginModal(false);
            Modal.error({
                title: 'Error',
                content: 'Internal Server Error, Please try after sometime...'
            });
        }
    }

    const failedSubmitNewUserData = (values) => {
        setLoading(false);
        setLoginModal(false);
        Modal.error({
            title: 'Error',
            content: 'Internal Server Error, Please try after sometime...'
        });
    }

    const menu = (
        <Menu>
            <Menu.ItemGroup title="More">
                <Menu.Item>1st menu item</Menu.Item>
                <Menu.Item>2nd menu item</Menu.Item>
                <Menu.Item>2nd menu item</Menu.Item>
                <Menu.Item>2nd menu item</Menu.Item>
                <Menu.Item>2nd menu item</Menu.Item>
            </Menu.ItemGroup>
        </Menu>
    );

    return ( 
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
                                    // onClick={() => history.push('/')}
                                    alt="LOGO"
                                />
                            </Col>
                            <Col span={10}>
                                <Form
                                    name="basic"
                                    initialValues={{  }}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                >
                                    <Form.Item
                                        name="search"
                                    >
                                        <Input 
                                            className="searchBox" 
                                            value={search}
                                            // addonBefore={prefixSelector}
                                            placeholder="Search for products, brands and more"
                                        />
                                    </Form.Item>
                                </Form>
                            </Col>
                            <Col 
                                span={2}
                                className="centerStyle"
                                >
                                <div className="desktopUserOrLogin">
                                    {user && user.id ? (
                                        <Button
                                            onClick={logout}
                                            >
                                            Logout
                                        </Button>
                                    ) : (
                                        <Button
                                            onClick={() => setLoginModal(true)}
                                            >
                                            Login
                                        </Button>
                                    )}
                                </div>
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
                                <span
                                    className="shoppingCart"
                                    onClick={() => history.push('desktopCart')}
                                    >
                                    <ShoppingCartOutlined />
                                    <span className="cartText">&nbsp;Cart</span>
                                </span>
                            </Col>
                            <Col span={2}></Col>
                        </Row>
                    </div>
                </div>
            </Affix>
            <Modal
                className="desktopLoginModal"
                title="login"
                visible={loginModal}
                footer={false}
                onCancel={() => setLoginModal(false)}
                width={750}
                >
                {loading ? <Loading title='Loading...' /> :
                <div className="loginContent">
                    <Row>
                        <Col span={8}>
                            {showRegisterForm ?
                            <div className="loginRightSide">
                                <h3>Register</h3>
                                <h4>Sign up with your E-mail</h4>
                                <h4>to get stared</h4>
                            </div>
                            :
                            <div className="loginRightSide">
                                <h3>Login</h3>
                                <h4>Get access to your </h4>
                                <h4>Orders, Wishlist and</h4>
                                <h4>Recommendations</h4>
                            </div>
                            }
                        </Col>
                        <Col span={16}>
                            {showRegisterForm ?
                            <div className="desktopLoginForm">
                                <Form
                                    name='registration'
                                    onFinish={submitNewUserData}
                                    onFinishFailed={failedSubmitNewUserData}
                                    >
                                    <Form.Item
                                        name='email'
                                        rules={[{required: true, message: 'Please Enter E-mail Id'}]}
                                        >
                                        <Input placeholder="Enter E-mail Id" />
                                    </Form.Item>

                                    <Form.Item
                                        name='name'
                                        rules={[{required: true, message: 'Please Enter your Name'}]}
                                        >
                                        <Input placeholder="Enter Your Name" />
                                    </Form.Item>

                                    <Form.Item
                                        name='password'
                                        rules={[{required: true, message: 'Please Enter your Password'}]}
                                        >
                                        <Input.Password placeholder="Enter Password" />
                                    </Form.Item>
                                    
                                    <Form.Item>
                                        <Button
                                            className='desktopLoginSubmit'
                                            htmlType='submit'
                                            >
                                            Register
                                        </Button>
                                    </Form.Item>
                                </Form>
                                <div className='desktopUserChoiceSec2'>
                                    <p 
                                        onClick={() => setShowRegisterForm(false)}
                                        >
                                        Existing User? Click to Login
                                    </p>
                                </div>
                            </div>
                            :
                            <div className="desktopLoginForm">
                                <Form
                                    name='login'
                                    onFinish={submitLogin}
                                    onFinishFailed={failedLogin}
                                    >
                                    <Form.Item
                                        name='email'
                                        rules={[{required: true, message: 'Please Enter your E-mail Id'}]}
                                        >
                                        <Input placeholder="Enter E-mail Id" />
                                    </Form.Item>

                                    <Form.Item
                                        name='password'
                                        rules={[{required: true, message: 'Please Enter your Pasword'}]}
                                        >
                                        <Input.Password placeholder="Enter Password" />
                                    </Form.Item>
                                    
                                    <Form.Item>
                                        <Button
                                            className='desktopLoginSubmit'
                                            htmlType='submit'
                                            >
                                            Login
                                        </Button>
                                    </Form.Item>
                                </Form>
                                <div className='desktopUserChoiceSec'>
                                    <p 
                                        onClick={() => setShowRegisterForm(true)}
                                        >
                                        New to Ecommerce? Create an account
                                    </p>
                                </div>
                            </div>
                            }
                        </Col>
                    </Row>
                </div>
                }
            </Modal>
        </div>
    );
}

export default DesktopTopNavbar;