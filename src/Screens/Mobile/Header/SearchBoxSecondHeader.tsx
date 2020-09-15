import React from 'react';
import { Form, Input } from 'antd';
import { Toast } from 'antd-mobile';
import { SearchOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { pathCheck } from '../../Helpers/Utilities';
import Colors from '../../../utils/Colors';
import './css/HomeScreenHeaderStyle.css';

export const SearchBoxSecondHeader = () => {
  const history = useHistory();
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const onFinish = values => {
    if(values.searchText === '' || values.searchText === undefined) {
      Toast.offline('Please enter a text !!!', 1);
    } else {
      if(pathCheck(history, "/user/search")){
        history.push("/user/search", {searchData: values.searchText});
      }
    }
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="searchFixedHeader" style={{backgroundColor: Colors.darkBlue()}}>
      <div style={{position: 'relative', padding: 10, paddingBottom: 7}}>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="searchText"
          >
            <Input 
              type='search'
              size="large" 
              placeholder="&nbsp;Search for Products" 
              prefix={<SearchOutlined />} 
              style={{width: '100%', borderRadius: 3}} 
            />
          </Form.Item>

        </Form>
      </div>
    </div>
  );
};
