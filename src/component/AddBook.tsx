import React, { useState } from 'react';

const AddBook = () => {
  const [someState] = useState(3);
  return (
    <div> Page {someState}
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default AddBook;
