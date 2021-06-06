import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { userCheck } from "../../../components/userCheck";
import { Store } from "../../../Context/Store";
import { getData } from "../../../localStorage/getData";
import { HeaderWithBack } from "../Header";
import Loader from "../components/mobileLoader";
import Colors from "../../../utils/Colors";
import "./css/ReportBugStyle.css";

export const ReportBug = () => {
  const [loader, setLoader] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { setUser } = useContext(Store);
  const history = useHistory();
  const loggedUser = getData("user");

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  useEffect(() => {
    if (userCheck(history)) {
      setUser(loggedUser);
      setLoading(false);
    }
  }, []);

  // Form
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <HeaderWithBack name="Report Bug" icon="left" />
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
                  <h3>Find Something Odd? Report US</h3>
                  <p>Your Report will help us</p>
                  {error !== "" ? (
                    <p
                      style={{
                        textAlign: "center",
                        color: "#ff5800",
                      }}
                    >
                      {error}
                    </p>
                  ) : null}
                </div>
                <div className="loginFormContent">
                  <Form
                    {...layout}
                    name="basic"
                    initialValues={{}}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                  >
                    <Form.Item
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your Name!",
                        },
                      ]}
                    >
                      <Input
                        type="default"
                        size="large"
                        placeholder="&nbsp;Full Name"
                        style={{
                          width: "100%",
                          borderRadius: 3,
                        }}
                      />
                    </Form.Item>

                    <Form.Item
                      name="email"
                      rules={[
                        {
                          required: false,
                        },
                      ]}
                    >
                      <Input
                        type="email"
                        size="large"
                        placeholder="&nbsp;E-mail Id"
                        className="inputField"
                        style={{
                          width: "100%",
                          borderRadius: 3,
                        }}
                      />
                    </Form.Item>

                    <Form.Item
                      name="message"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your Message!",
                        },
                      ]}
                    >
                      <Input.TextArea
                        placeholder="&nbsp;Message"
                        className="inputField"
                        style={{
                          width: "100%",
                          borderRadius: 3,
                        }}
                      />
                    </Form.Item>

                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="submitBtn"
                        style={{
                          backgroundColor: "#ff5800",
                        }}
                      >
                        Send Bug Report
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
