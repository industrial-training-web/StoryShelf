/* eslint-disable no-console */
import React from 'react';
import { Card, Button, Input } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const { Search } = Input;
const { Meta } = Card;

const onSearch = (value: string) => {
  console.log('Search value:', value);
};

const YourList: React.FC = () => {
  // Sample books data
  const books = [
    {
      id: 1,
      bookName: 'Book Title 1',
      writerName: 'Author 1',
      description: 'Description of the book 1',
      coverImage: 'https://i.postimg.cc/sgxNjwVn/book-4600757-1280.jpg',
    },
    {
      id: 2,
      bookName: 'Book Title 2',
      writerName: 'Author 2',
      description: 'Description of the book 2',
      coverImage: 'https://i.postimg.cc/sgxNjwVn/book-4600757-1280.jpg',
    },
  ];

  const handleUpdate = (id: number) => {
    console.log('Update book with id:', id);
  };

  const handleDelete = (id: number) => {
    console.log('Delete book with id:', id);
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
            style={{ width: 240, marginBottom: '2rem' }}
            cover={<img alt={book.bookName} src={book.coverImage} />}
          >
            <Meta
              title={book.bookName}
              description={`By ${book.writerName}`}
            />
            <p>{book.description}</p>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '1rem',
              }}
            >
              <Button
                icon={<EditOutlined />}
                shape="circle"
                onClick={() => handleUpdate(book.id)}
                style={{ backgroundColor: '#fdbf50', borderColor: '#fdbf50' }}
              />
              <Button
                icon={<DeleteOutlined />}
                shape="circle"
                onClick={() => handleDelete(book.id)}
                style={{ backgroundColor: '#ff4d4f', borderColor: '#ff4d4f' }}
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default YourList;
