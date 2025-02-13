import React, { useContext, useEffect } from 'react';
import { Button, Form, Input, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';
import Swal from 'sweetalert2';
import { AuthContext } from '../firebaseprovider/FirebaseProvider';

type AddBookFormValues = {
  bookName: string;
  writerName: string;
  description: string;
  bookImage: { originFileObj: File }[];
  userEmail: string;
};

const AddBook: React.FC = () => {
  const { user } = useContext(AuthContext) || {};
  useEffect(() => {
    console.log('User Data:', user);
  }, [user]);
  const handleAddBook = async (values: AddBookFormValues) => {
    const { bookName, writerName, description, bookImage } = values;

    try {
      const uploadedFile = bookImage[0]?.originFileObj;

      if (!uploadedFile) {
        Swal.fire({
          title: 'Error',
          text: 'Please upload an image!',
          icon: 'error',
          confirmButtonText: 'Okay',
        });
        return;
      }

      const toBase64 = (file: File) =>
        new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = (error) => reject(error);
        });

      const imageBase64 = await toBase64(uploadedFile);

      const newBook = {
        bookName,
        writerName,
        description,
        image: imageBase64,
        userEmail: user?.email || 'N/A',
      };

      // Send data to the API
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/books`,
        newBook,
      );

      if (data.insertedId) {
        Swal.fire({
          title: 'Success',
          text: 'Book added successfully!',
          icon: 'success',
          confirmButtonText: 'Okay',
        });
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        title: 'Error',
        text: 'Failed to add the book!',
        icon: 'error',
        confirmButtonText: 'Okay',
      });
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
          margin: '20px',
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

          <Form
            layout="vertical"
            style={{ margin: '20px' }}
            onFinish={handleAddBook}
            initialValues={{
              userName: user?.displayName || '',
              userEmail: user?.email || '',
            }}
          >
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
              rules={[
                { required: true, message: "Please enter the writer's name!" },
              ]}
            >
              <Input placeholder="Enter the writer's name" />
            </Form.Item>

            <Form.Item
              label="Book Image"
              name="bookImage"
              valuePropName="fileList"
              getValueFromEvent={(e: any) => e?.fileList}
              rules={[{ required: true, message: 'Please upload the book image!' }]}
            >
              <Upload
                name="bookImage"
                listType="picture"
                beforeUpload={() => false}
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

            <Form.Item label="User Email" name="userEmail">
              <Input readOnly />
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
};

// eslint-disable-next-line import/no-default-export
export default AddBook;
