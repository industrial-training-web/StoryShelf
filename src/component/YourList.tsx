/* eslint-disable no-underscore-dangle */
import React, { useContext, useEffect, useState } from 'react';
import { Card, Button, Input } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import Swal from 'sweetalert2';
import { AuthContext } from '../firebaseprovider/FirebaseProvider';

const { Search } = Input;

const YourList: React.FC = () => {
  const [books, setBooks] = useState<any[]>([]);
  const { user } = useContext(AuthContext) || {};
  const [filteredBooks, setFilteredBooks] = useState<any[]>([]);

  useEffect(() => {
    console.log('User Data:', user);
  }, [user]);
  useEffect(() => {
    if (user?.email) {
      fetch(`${import.meta.env.VITE_API_URL}/books/${user.email}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Failed to fetch books');
          }
          return res.json();
        })
        .then((data) => {
          setBooks(data);
          setFilteredBooks(data); // Initially show all books
        })
        .catch((error) => {
          console.error('Failed to fetch books:', error);
          Swal.fire({
            title: 'Error',
            text: 'Failed to load books!',
            icon: 'error',
            confirmButtonText: 'Okay',
          });
        });
    }
  }, [user]);

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
        const response = await fetch(`${import.meta.env.VITE_API_URL}/books/${_id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          const result = await response.json();
          if (result.success) {
            setBooks((prev) => prev.filter((book) => book._id !== _id));
            Swal.fire({
              title: 'Deleted!',
              text: 'Book deleted successfully!',
              icon: 'success',
              confirmButtonText: 'Okay',
            });
          }
        } else {
          throw new Error('Failed to delete the book');
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

  return (
    <div style={{ padding: '2rem' }}>
      {/* Search Input */}
      <Search
        placeholder="Search books"
        enterButton
        style={{ marginBottom: '2rem' }}
      />

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        }}
      >
        {books.map((book) => (
          <Card
            key={book._id}
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
