// import { useEffect, useState } from 'react';
// import io from 'socket.io-client';

// const WebcamStream = () => {
//   const [webcamSrc, setWebcamSrc] = useState('');

//   useEffect(() => {
//     const socket = io('http://localhost:3001');
//     socket.on('image', (imageData:string) => {
//       console.log('image data', imageData);
//       setWebcamSrc(imageData);
//     });
//     return () => {
//       socket.disconnect();
//     };
//   }, []);

//   return <img alt="stream" id="webcam" src={webcamSrc} />;
// };

// export default WebcamStream;