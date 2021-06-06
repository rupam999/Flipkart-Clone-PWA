import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { MobileOutlined } from "@ant-design/icons";
import { verifyOTP } from "../../../api/verifyOTP";
import { getData } from "../../../localStorage/getData";
import { HeaderWithTitleOnly } from "../Header";
import Loader from "../components/mobileLoader";
import Colors from "../../../utils/Colors";
import "./css/SignInFlowStyle.css";

export const VerifyOTP = () => {
  const [loader, setLoader] = useState(false);
  const [loading, setLoading] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState<any>("");
  const [error, setError] = useState("");
  const history = useHistory();
  const location = useLocation();

  let number;
  useEffect(() => {
    if (!location.state) {
      history.push("/login");
    } else {
      setLoading(false);
      number = location.state;
      setPhoneNumber(number.phone);
    }
  });

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const onFinish = async (values) => {
    values.phone = phoneNumber;
    if (values.phone.length < 4) {
      setError("Enter a 4 digit OTP");
    } else {
      setLoader(true);
      const res = await verifyOTP(values);
      setLoader(false);
      if (res === 1) {
        setError("Wrong OTP");
      } else if (res === values.phone) {
        history.push("/information", { phone: phoneNumber });
      } else {
        setError("Internal Server Error!");
      }
    }
  };

  const onFinishFailed = (errorInfo) => {
    // setError('Internal Server Error!')
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    const user = getData("user");
    if (user && user.uid) {
      history.push("/user");
    }
  });

  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <HeaderWithTitleOnly title="E-commerce" curve={true} />
          <div
            className="extraHeader"
            style={{ backgroundColor: Colors.darkBlue() }}
          ></div>
          <div
            className="mainContent"
            style={{ backgroundColor: Colors.white() }}
          >
            {loader ? (
              <Loader />
            ) : (
              <React.Fragment>
                <div className="loginHeading">
                  <h3>Enter OTP</h3>
                  <p></p>
                  {error !== "" ? (
                    <p style={{ textAlign: "center", color: "#ff5800" }}>
                      {error}
                    </p>
                  ) : null}
                </div>
                <div className="registationFormContent">
                  <Form
                    {...layout}
                    name="basic"
                    initialValues={{}}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                  >
                    <Form.Item
                      name="otp"
                      rules={[
                        { required: true, message: "Please enter a OTP!" },
                      ]}
                    >
                      <Input
                        type="number"
                        size="large"
                        placeholder="&nbsp;Enter OTP"
                        prefix={<MobileOutlined />}
                        style={{ width: "100%", borderRadius: 3 }}
                      />
                    </Form.Item>

                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="submitBtn"
                        style={{ backgroundColor: "#ff5800" }}
                      >
                        Verify OTP
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
