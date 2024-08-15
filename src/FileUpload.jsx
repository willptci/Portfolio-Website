import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null); // to store the image preview URL

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setImagePreviewUrl(URL.createObjectURL(selectedFile)); // create and set the image preview URL
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://127.0.0.1:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(response.data.message); // Display the message from Flask
    } catch (error) {
      console.error('Error uploading file:', error);
      setMessage('Error uploading file');
    }
  };

  return (
    <div>
      <div className='mojo-input-image'>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>
      </div>
      {imagePreviewUrl && (
        <div className='image-preview'>
          {message && <p className='input-message'>{message}</p>}
          <h3>Image Preview:</h3>
          <img src={imagePreviewUrl} alt="Selected file" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      )}
    </div>
  );
};

export default FileUpload;
