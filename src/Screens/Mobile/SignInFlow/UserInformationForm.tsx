import React, { useEffect, useState, useContext } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { handleSignup } from '../../../api/handleSignup';
import { getData } from '../../../localStorage/getData';
import { storeData } from '../../../localStorage/storeData';
import { removeData } from '../../../localStorage/removeData';
import { Store } from '../../../Context/Store';
import { HeaderWithTitleOnly } from '../Header';
import Loader from '../components/mobileLoader';
import Colors from '../../../utils/Colors';
import './css/SignInFlowStyle.css';

export const UserInformationForm = () => {
    const [loader, setLoader] = useState(false);
    const [loading, setLoading] = useState(true);
    const [phoneNumber, setPhoneNumber] = useState<any>('');
    const [error, setError] = useState('');
    const history = useHistory();
    const location = useLocation();
    const { setUser } = useContext(Store);

    let number;
    useEffect(() => {
        if(!location.state){
            history.push('/login')
        } else {
            setLoading(false);
            number = location.state;
            setPhoneNumber(number.phone)
        }
    });

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    const onFinish = async (values) => {
        values.phone = phoneNumber;
        values.type = "Buyer"
        if(values.password.length < 6) {
            setError('Password Should be atleast 6 Characters')
        } else {
            setLoader(true)
            const user = await handleSignup(values);
            setLoader(false)
            // if(user !== -1 && user.uid) {
            //     setUser(user)
            //     storeData('user', {...values, uid: user.uid, password: ''})
            //     removeData('password');
            //     history.push('/user')
            // } else {
            //     setError('Internal Server Error!')
            // }
        }
    };
    
    const onFinishFailed = errorInfo => {
        // setError('Internal Server Error!')
        console.log('Failed:', errorInfo);
    };

    useEffect(() => {
        const user = getData('user');
        if(user && user.uid) {
            history.push('/user');
        }
    });

    return (
        <React.Fragment>
        {loading ? <Loader /> :
        <div>
            <HeaderWithTitleOnly title="E-commerce" curve={true} />
            <div className="extraHeader" style={{backgroundColor: Colors.darkBlue()}}></div>
            <div className="mainContent" style={{backgroundColor: Colors.white()}}>
                {loader ? <Loader /> :
                <React.Fragment>
                    <div className="loginHeading">
                        <h3>Enter your Details</h3>
                        <p>Experience the new E-commerce</p>
                        {error !== '' ? 
                            <p style={{textAlign: 'center', color: '#ff5800'}}>{error}</p>
                        : null }
                    </div>
                    <div className="registationFormContent">
                        <Form
                            {...layout}
                            name="basic"
                            initialValues={{  }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            >
                            <Form.Item
                                name="name"
                                rules={[{ required: true, message: 'Please enter your Full Name!' }]}
                                >
                                <Input 
                                    type='default'
                                    size="large" 
                                    placeholder="&nbsp;Full Name" 
                                    prefix={<UserOutlined />} 
                                    style={{width: '100%', borderRadius: 3}} 
                                />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please enter your Password!' }]}
                                style={{marginTop: 5}}
                                >
                                <Input.Password
                                    size="large" 
                                    placeholder="&nbsp;Password"
                                    prefix={<LockOutlined />} 
                                    className="inputField"
                                    style={{width: '100%', borderRadius: 3}} 
                                />
                            </Form.Item>

                            <Form.Item>
                                <Button 
                                    type="primary"
                                    htmlType="submit" 
                                    className="submitBtn" 
                                    style={{backgroundColor: '#ff5800'}}
                                    >
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </React.Fragment>
                }
            </div>
        </div>
        }
        </React.Fragment>
    );
}