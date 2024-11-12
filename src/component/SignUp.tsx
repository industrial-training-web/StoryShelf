/* eslint-disable no-console */
/* eslint-disable import/no-default-export */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Button, Form, Input } from 'antd';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

const Signup: React.FC = () => (
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
          alt="Cat in a box"
          style={{ maxWidth: '100%', borderRadius: 8 }}
        />
      </div>

      {/* Right side form */}
      <div style={{ flex: 1, maxWidth: 400 }}>
        <p style={{ textAlign: 'center', fontSize: '1.5rem', color: '#555' }}>
          Create an Account
        </p>

        {/* Social signup buttons */}
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
            onClick={() => console.log('Sign up with Google')}
          />
          <Button
            icon={<FaGithub />}
            shape="circle"
            size="large"
            onClick={() => console.log('Sign up with GitHub')}
          />
        </div>

        <p style={{ textAlign: 'center', color: '#aaa' }}>
          OR SIGN UP WITH EMAIL
        </p>

        <Form layout="vertical" style={{ marginTop: '1rem' }}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please enter your name!' }]}
          >
            <Input placeholder="Enter your name" />
          </Form.Item>

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
                backgroundColor: '#fdbf50',
                borderColor: '#fdbf50',
              }}
            >
              Sign Up
            </Button>
          </Form.Item>
        </Form>

        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <a
            href="/sign-in"
            style={{ color: '#555', textDecoration: 'underline' }}
          >
            Already have an account? Log In
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Signup;
