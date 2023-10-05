import React, { useState } from "react";
import { Upload, Button, Modal, Checkbox, Form, Input, message } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import useAxios from "@/utils/useAxios";

const CreateJournalModal = ({
  showCreate = false,
  setShowCreate = () => {},
}) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const isMobileView =
    typeof window !== "undefined" ? window.innerWidth <= 768 : false;

  const {
    response,
    error,
    loading: apiLoading,
    trigger,
  } = useAxios({
    url: "/api/journal/store",
    method: "post",
    body: {
      name: "nagi",
      description: "desc of nagi",
      imagePath: "demo path of image",
    },
  });

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const onFinish = (formData) => {
    console.log({ formData });

    trigger();
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLessThanTen =
      file.size /
        1024 /
        1024 /
        1024 /
        1024 /
        1024 /
        1024 /
        1024 /
        1024 /
        1024 /
        1024 <
      10;
    if (!isLessThanTen) {
      message.error("Image must smaller than 10MB!");
    }
    return isJpgOrPng && isLessThanTen;
  };

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }

    if (info.file.status === "error") {
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
      return;
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  return (
    <div>
      <Modal
        title="Create Your New Photo Journal"
        open={showCreate}
        onCancel={() => setShowCreate(false)}
        footer={null}
        width={isMobileView ? "80%" : "50%"}
        centered
        maskClosable={false}
      >
        <div>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                beforeUpload={beforeUpload}
                onChange={handleChange}
              >
                {imageUrl ? (
                  <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
                ) : (
                  uploadButton
                )}
              </Upload>
            </Form.Item>

            <Form.Item
              label="Description"
              name="description"
              rules={[
                {
                  required: true,
                  message: "Please input your description!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="favourite"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>Set As Favourite</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default CreateJournalModal;
