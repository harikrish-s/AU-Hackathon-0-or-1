import React, { useState } from 'react';
import Webcam from 'react-webcam';

const videoConstraints = {
	width: 1280,
	height: 720,
	facingMode: 'user'
};

const WebLiveCapture = () => {
	const webcamRef = React.useRef(null);
	// const [ image, setImage ] = useState('');
	// const capture = React.useCallback(
	// 	() => {
	// 		const imageSrc = webcamRef.current.getScreenshot();
	// 		setImage(imageSrc);
	// 		// console.log('Captured');
	// 	},
	// 	[ webcamRef ]
	// );

	return (
		<React.Fragment>
			<Webcam
				audio={false}
				ref={webcamRef}
				screenshotFormat="image/jpeg"
				height={150}
				width={300}
				videoConstraints={videoConstraints}
			/>

			{/* <button className="hide" onClick={capture}>
				Capture photo
			</button> */}
		</React.Fragment>
	);
};

export default WebLiveCapture;



// import React, { useEffect, useRef } from 'react';
// import Webcam from 'react-webcam';
// import { io, Socket } from 'socket.io-client';

// const videoConstraints = {
//   width: 1280,
//   height: 720,
//   facingMode: 'user',
// };

// const WebLiveCapture = () => {
//   const webcamRef = useRef<Webcam | null>(null);
//   const socket = useRef<Socket | null>(null);
//   useEffect(() => {
// 	// Connect to the WebSocket server (Flask)
// 	socket.current = io('http://127.0.0.1:5000');
  
// 	// Function to send frames to the server
// 	const sendFrame = () => {
// 	  if (webcamRef.current) {
// 		const imageSrc = webcamRef.current.getScreenshot();
// 		console.log(imageSrc);
// 		socket.current?.emit('frame', imageSrc); // Send the frame to the server
// 	  }
// 	};
  
// 	// Capture and send frames at a desired interval (adjust as needed)
// 	const captureInterval = setInterval(sendFrame, 1000); // Send a frame every second
  
// 	// Cleanup when the component unmounts
// 	return () => {
// 	  clearInterval(captureInterval); // Stop sending frames on unmount
// 	  socket.current?.disconnect(); // Disconnect from the WebSocket server
// 	};
//   }, [webcamRef]); 

//   return (
//     <div>
//       <Webcam
//         audio={false}
//         ref={webcamRef}
//         screenshotFormat="image/jpeg"
//         height={150}
//         width={300}
//         videoConstraints={videoConstraints}
//       />
//     </div>
//   );
// };

// export default WebLiveCapture;
