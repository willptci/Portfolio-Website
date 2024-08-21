import React, { useRef, useEffect, useState } from 'react';

const WebcamStream = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [processedFrame, setProcessedFrame] = useState(null);

  useEffect(() => {
    const startWebcam = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing webcam:', error);
      }
    };

    startWebcam();

    return () => {
      const stream = videoRef.current?.srcObject;
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(async () => {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
  
      if (!videoRef.current || !context) return;
  
      // Set the canvas size to match the video dimensions
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
  
      // Draw the current video frame onto the canvas
      context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
  
      // Convert the canvas content to a base64-encoded JPEG image
      const frame = canvas.toDataURL('image/jpeg');
  
      try {
        // Send the frame to the backend for processing
        const response = await fetch('/process_frame', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ image: frame }),
        });
  
        // Retrieve the processed frame from the backend
        const data = await response.json();
        setProcessedFrame(data.image);
      } catch (error) {
        console.error('Error sending frame:', error);
      }
    }, 10000); // Adjust the interval as needed
  
    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={{ position: 'relative', margin: '0 auto', width: '500px', height: '375px', border: '10px #333 solid' }}>
    <video
      ref={videoRef}
      autoPlay
      style={{ width: '100%', height: '100%', backgroundColor: '#666' }}
    />
    <canvas
      ref={canvasRef}
      style={{ display: 'none' }}
    />
    {processedFrame && <img src={processedFrame} alt="Processed Frame" style={{ width: '100%', height: '100%', objectFit: 'cover', marginTop: '10px' }} />}
    </div>
    </div>
  );
}

export default WebcamStream;