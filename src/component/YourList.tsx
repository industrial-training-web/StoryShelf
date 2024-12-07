/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { Card, Button, Input } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import axios from 'axios';
import Swal from 'sweetalert2';

const { Search } = Input;
const { Meta } = Card;

const YourList: React.FC = () => {
  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/books`);
        setBooks(data);
      } catch (error) {
        console.error('Failed to fetch books:', error);
        Swal.fire({
          title: 'Error',
          text: 'Failed to load books!',
          icon: 'error',
          confirmButtonText: 'Okay',
        });
      }
    };

    getData();
  }, []);

  const handleUpdate = (id: number) => {
    console.log('Update book with id:', id);
  };

  const handleDelete = async (_id: number) => {
    const confirmResult = await Swal.fire({
      title: 'Are you sure?',
      text: 'Do you really want to delete this book? This action cannot be undone!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    });
    if (confirmResult.isConfirmed) {
      try {
        const { data } = await axios.delete(
          `${import.meta.env.VITE_API_URL}/books/${_id}`,
        );
        if (data.success) {
          setBooks((prev) => prev.filter((book) => book.id !== _id));
          Swal.fire({
            title: 'Deleted!',
            text: 'Book deleted successfully!',
            icon: 'success',
            confirmButtonText: 'Okay',
          });
        }
      } catch (error) {
        console.error('Failed to delete book:', error);
        Swal.fire({
          title: 'Error',
          text: 'Failed to delete the book!',
          icon: 'error',
          confirmButtonText: 'Okay',
        });
      }
    } else {
      Swal.fire({
        title: 'Cancelled',
        text: 'Book deletion was cancelled.',
        icon: 'info',
        confirmButtonText: 'Okay',
      });
    }
  };
  const onSearch = (value: string) => {
    console.log('Search value:', value);
  };

  return (
    <div style={{ padding: '2rem' }}>
      {/* Search Input */}
      <Search
        placeholder="Search books"
        onSearch={onSearch}
        enterButton
        style={{ marginBottom: '2rem' }}
      />

      {/* Books List */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        }}
      >
        {books.map((book) => (
          <Card
            key={book.id}
            hoverable
            style={{
              width: 380,
              borderRadius: '12px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
            }}
            cover={
              <div style={{ padding: '20px', backgroundColor: '#f9f9f9' }}>
                <img
                  alt={book.bookName}
                  src={book.image}
                  style={{
                    width: '400px',
                    height: '400px',
                    borderRadius: '12px',
                    objectFit: 'cover',
                  }}
                />
              </div>
            }
          >
            <div style={{ textAlign: 'center', padding: '16px' }}>
              <h2
                style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  margin: '0 0 8px',
                }}
              >
                {book.bookName}
              </h2>
              <p style={{ margin: '0 0 12px', color: '#8c8c8c' }}>
                By {book.writerName}
              </p>
              <p
                style={{
                  margin: '0 0 16px',
                  fontSize: '14px',
                  color: '#595959',
                }}
              >
                {book.description}
              </p>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '8px',
                }}
              >
                <Button
                  type="primary"
                  icon={<EditOutlined />}
                  style={{
                    backgroundColor: '#fdbf50',
                    borderColor: '#fdbf50',
                    color: '#fff',
                  }}
                  onClick={() => handleUpdate(book.id)}
                >
                  Edit
                </Button>
                <Button
                  type="primary"
                  danger
                  icon={<DeleteOutlined />}
                  onClick={() => handleDelete(book._id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default YourList;
