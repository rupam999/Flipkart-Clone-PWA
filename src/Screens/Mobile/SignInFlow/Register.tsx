import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { MobileOutlined } from "@ant-design/icons";
import { sendOTP } from "../../../api/sendOTP";
import { getData } from "../../../localStorage/getData";
import { HeaderWithTitleOnly } from "../Header";
import Loader from "../components/mobileLoader";
import Colors from "../../../utils/Colors";
import "./css/SignInFlowStyle.css";

export const Register = () => {
  const [loader, setLoader] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const history = useHistory();
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const onFinish = async (values) => {
    if (values.phone.length < 10) {
      setError("Phone Number must be 10 digits");
    } else {
      setLoader(true);
      const res = await sendOTP(values);
      setLoader(false);
      if (res === 1) {
        setError("A user exist with this Number");
      } else if (res === 2) {
        setError("Internal Messaging Server Error!");
      } else if (res === values.phone) {
        history.push("/verifyOTP", { phone: values.phone });
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
    } else {
      setLoading(false);
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
                  <h3>Register to start exploring</h3>
                  <p>Experience the new E-commerce</p>
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
                      name="phone"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your Phone Number!",
                        },
                      ]}
                    >
                      <Input
                        type="number"
                        size="large"
                        placeholder="&nbsp;Phone Number"
                        prefix={<MobileOutlined />}
                        style={{ width: "100%", borderRadius: 3 }}
                      />
                    </Form.Item>

                    <Form.Item>
                      {true ? (
                        <Button
                          type="primary"
                          htmlType="submit"
                          className="submitBtn"
                          style={{ backgroundColor: "#ff5800" }}
                        >
                          Send OTP
                        </Button>
                      ) : (
                        <Button
                          type="primary"
                          htmlType="submit"
                          className="submitBtn"
                          style={{ backgroundColor: "#c2c2c2" }}
                        >
                          Send OTP
                        </Button>
                      )}
                    </Form.Item>
                  </Form>
                  <div>
                    <p className="switchPageHeading" style={{ marginTop: 25 }}>
                      Already have an Account ?
                    </p>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="submitBtn"
                      onClick={() => history.push("/login")}
                      style={{
                        backgroundColor: Colors.darkBlue(),
                        marginTop: 5,
                      }}
                    >
                      Login
                    </Button>
                  </div>
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
