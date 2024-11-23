/* eslint-disable no-console */
/* eslint-disable import/no-default-export */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Button, Form, Input } from 'antd';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

const Signin: React.FC = () => (
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
          src="https://i.postimg.cc/zXb7snLY/old-books-436498-1280.jpg"
          alt="books"
          style={{ maxWidth: '100%', borderRadius: 8 }}
        />
      </div>

      {/* Right side form */}
      <div style={{ flex: 1, maxWidth: 400 }}>
        <p style={{ textAlign: 'center', fontSize: '1.5rem', color: '#555' }}>
          Welcome back!
        </p>

        {/* Social login buttons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '1rem',
          }}
        >
          <Button
            icon={<FcGoogle />}
            shape="circle"
            size="large"
            onClick={() => console.log('Sign in with Google')}
          />
          <Button
            icon={<FaGithub />}
            shape="circle"
            size="large"
            onClick={() => console.log('Sign in with GitHub')}
          />
        </div>

        <p style={{ textAlign: 'center', color: '#aaa' }}>
          OR LOGIN WITH EMAIL
        </p>

        <Form layout="vertical" style={{ marginTop: '1rem' }}>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please enter your email!' }]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please enter your password!' }]}
          >
            <Input.Password placeholder="Enter your password" />
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
              Log In
            </Button>
          </Form.Item>
        </Form>

        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <a
            href="StoryShelf/sign-up"
            style={{ color: '#555', textDecoration: 'underline' }}
          >
            New Here? Register Here
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Signin;
