/* eslint-disable no-console */
/* eslint-disable import/no-default-export */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Button, Form, Input, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const AddBook: React.FC = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f5f5f5',
    }}
  >
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        borderRadius: 8,
        padding: '2rem',
        maxWidth: 800,
      }}
    >
      {/* Left side image */}
      <div style={{ flex: 1, marginRight: '2rem' }}>
        <img
          src="https://i.postimg.cc/sgxNjwVn/book-4600757-1280.jpg"
          alt="Add a Book"
          style={{ maxWidth: '100%', borderRadius: 8 }}
        />
      </div>

      {/* Right side form */}
      <div style={{ flex: 1, maxWidth: 400 }}>
        <p style={{ textAlign: 'center', fontSize: '1.5rem', color: '#555' }}>
          Add a New Book
        </p>

        <Form layout="vertical" style={{ marginTop: '1rem' }}>
          <Form.Item
            label="Book Name"
            name="bookName"
            rules={[{ required: true, message: 'Please enter the book name!' }]}
          >
            <Input placeholder="Enter the book name" />
          </Form.Item>

          <Form.Item
            label="Writer Name"
            name="writerName"
            rules={[{ required: true, message: 'Please enter the writer\'s name!' }]}
          >
            <Input placeholder="Enter the writer's name" />
          </Form.Item>
          <Form.Item
        label="Book Image"
        name="bookImage"
        valuePropName="fileList"
        rules={[{ required: true, message: 'Please upload the book image!' }]}
      >
        <Upload
          name="bookImage"
          listType="picture"
          beforeUpload={() => false} // Prevent automatic upload
        >
          <Button icon={<UploadOutlined />}>Upload Book Image</Button>
        </Upload>
      </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: 'Please enter a description!' }]}
          >
            <Input.TextArea placeholder="Enter the description" rows={4} />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                width: '100%',
                backgroundColor: '#fdc57b',
                borderColor: '#fdc57b',
              }}
            >
              Add Book
            </Button>
          </Form.Item>
        </Form>

      </div>
    </div>
  </div>
);

export default AddBook;
