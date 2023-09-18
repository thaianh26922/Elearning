import React, { useRef, useEffect, useState } from 'react';
import { FaceMesh } from "@mediapipe/face_mesh";
import * as Facemesh from "@mediapipe/face_mesh";
import * as cam from "@mediapipe/camera_utils";
import Webcam from "react-webcam";

// Define a reference set of landmarks for comparison (e.g., from an image)
const referenceLandmarks = [
  // Add your reference landmarks here.
  // Each landmark should have an x and y coordinate.
  { x: 100, y: 200 },
  { x: 150, y: 210 },
  // Add more landmarks as needed.
];

export default function FaceIDLogin() {
  // const webcamRef = useRef(null);
  // const canvasRef = useRef(null);
  // const [faceMatch, setFaceMatch] = useState(false);
  // const connect = window.drawConnectors;

  // var camera = null;

  // // Function to calculate the Euclidean distance between two sets of landmarks
  // function calculateEuclideanDistance(landmarks1, landmarks2) {
  //   if (!landmarks1 || !landmarks2 || landmarks1.length !== landmarks2.length) {
  //     return Infinity; // Return a large value to indicate no match
  //   }

  //   let distanceSum = 0;
  //   for (let i = 0; i < landmarks1.length; i++) {
  //     if (landmarks1[i] && landmarks2[i]) {
  //       const x1 = landmarks1[i].x;
  //       const y1 = landmarks1[i].y;
  //       const x2 = landmarks2[i].x;
  //       const y2 = landmarks2[i].y;
  //       const dx = x1 - x2;
  //       const dy = y1 - y2;
  //       distanceSum += Math.sqrt(dx * dx + dy * dy);
  //     }
  //   }
  //   const averageDistance = distanceSum / landmarks1.length;
  //   return averageDistance;
  // }

  // async function loadReferenceImage(url) {
  //   try {
  //     const response = await fetch(url);
  //     const blob = await response.blob();
  //     return URL.createObjectURL(blob);
  //   } catch (error) {
  //     console.error('Error loading reference image:', error);
  //     return null;
  //   }
  // }

  // async function onResults(results) {
  //   const videoWidth = webcamRef.current.video.videoWidth;
  //   const videoHeight = webcamRef.current.video.videoHeight;
  //   const canvasElement = canvasRef.current;
  //   const canvasCtx = canvasElement.getContext("2d");

  //   // Set canvas width
  //   canvasElement.width = videoWidth;
  //   canvasElement.height = videoHeight;

  //   // Draw landmarks on the canvas
  //   if (results.multiFaceLandmarks) {
  //     for (const landmarks of results.multiFaceLandmarks) {
  //       connect(canvasCtx, landmarks, Facemesh.FACEMESH_TESSELATION, {
  //         color: "#C0C0C070",
  //         lineWidth: 1,
  //       });

  //       // Load the reference image
  //       const referenceImage = await loadReferenceImage('https://scontent.xx.fbcdn.net/v/t1.15752-9/377485523_1449412605923169_6561594739883642110_n.jpg?stp=dst-jpg_s206x206&_nc_cat=109&ccb=1-7&_nc_sid=aee45a&_nc_ohc=3X9gMP29qMoAX-QfWof&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRmUdd1kVRMSQTjzxhToGzUX2t1n6j5uKGl2Y0usbIfcg&oe=652AE504');

  //       if (referenceImage) {
  //         const isMatch = compareImages(canvasElement, referenceImage);
  //         setFaceMatch(isMatch);
  //       }
  //     }
  //   }
  // }

  // function compareImages(canvas, referenceImage) {
  //   const canvasData = canvas.toDataURL("image/jpeg"); // Convert canvas to image data

  //   // Create Image elements for comparison
  //   const canvasImage = new Image();
  //   const referenceImageElement = new Image();

  //   canvasImage.src = canvasData;
  //   referenceImageElement.src = referenceImage;

  //   // Compare the two images (you can implement a more advanced algorithm)
  //   const similarityThreshold = 50; // Adjust as needed

  //   const similarity = calculateImageSimilarity(canvasImage, referenceImageElement);

  //   return similarity >= similarityThreshold;
  // }

  // function calculateImageSimilarity(image1, image2) {
  //   // Implement a similarity calculation method (e.g., SSIM, perceptual hashing, etc.)
  //   // and return a similarity score.
  //   // For a basic example using SSIM, you can use a library like 'image-ssim'.
  //   // Here's an example using 'image-ssim':
  //   // https://www.npmjs.com/package/image-ssim

  //   // Example (not actual implementation, you need to implement your own):
  //   // const ssim = imageSsim(image1, image2);
  //   // return ssim;

  //   // Placeholder return value (update with your implementation)
  //   return Math.random(); // Replace with your similarity calculation
  // }

  // useEffect(() => {
  //   const faceMesh = new FaceMesh({
  //     locateFile: (file) => {
  //       return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`;
  //     },
  //   });

  //   faceMesh.setOptions({
  //     maxNumFaces: 1,
  //     minDetectionConfidence: 0.5,
  //     minTrackingConfidence: 0.5,
  //   });

  //   faceMesh.onResults(onResults);

  //   if (
  //     typeof webcamRef.current !== "undefined" &&
  //     webcamRef.current !== null
  //   ) {
  //     camera = new cam.Camera(webcamRef.current.video, {
  //       onFrame: async () => {
  //         await faceMesh.send({ image: webcamRef.current.video });
  //       },
  //       width: 640,
  //       height: 480,
  //     });
  //     camera.start();
  //   }
  // }, []);
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const connect = window.drawConnectors;
  var camera = null;
  function onResults(results) {
    // const video = webcamRef.current.video;
    const videoWidth = webcamRef.current.video.videoWidth;
    const videoHeight = webcamRef.current.video.videoHeight;

    // Set canvas width
    canvasRef.current.width = videoWidth;
    canvasRef.current.height = videoHeight;

    const canvasElement = canvasRef.current;
    const canvasCtx = canvasElement.getContext("2d");
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    canvasCtx.drawImage(
      results.image,
      0,
      0,
      canvasElement.width,
      canvasElement.height
    );
    if (results.multiFaceLandmarks) {
      for (const landmarks of results.multiFaceLandmarks) {
        connect(canvasCtx, landmarks, Facemesh.FACEMESH_TESSELATION, {
          color: "#C0C0C070",
          lineWidth: 1,
        });
        connect(canvasCtx, landmarks, Facemesh.FACEMESH_RIGHT_EYE, {
          color: "#FF3030",
        });
        connect(canvasCtx, landmarks, Facemesh.FACEMESH_RIGHT_EYEBROW, {
          color: "#FF3030",
        });
        connect(canvasCtx, landmarks, Facemesh.FACEMESH_LEFT_EYE, {
          color: "#30FF30",
        });
        connect(canvasCtx, landmarks, Facemesh.FACEMESH_LEFT_EYEBROW, {
          color: "#30FF30",
        });
        connect(canvasCtx, landmarks, Facemesh.FACEMESH_FACE_OVAL, {
          color: "#E0E0E0",
        });
        connect(canvasCtx, landmarks, Facemesh.FACEMESH_LIPS, {
          color: "#E0E0E0",
        });
      }
    }
    canvasCtx.restore();
  }
  // }

  // setInterval(())
  useEffect(() => {
    const faceMesh = new FaceMesh({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`;
      },
    });

    faceMesh.setOptions({
      maxNumFaces: 1,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });

    faceMesh.onResults(onResults);

    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null
    ) {
      camera = new cam.Camera(webcamRef.current.video, {
        onFrame: async () => {
          await faceMesh.send({ image: webcamRef.current.video });
        },
        width: 640,
        height: 480,
      });
      camera.start();
    }
  }, []);
  return (
    <div>
      {/* <Webcam
        ref={webcamRef}
        style={{
          // ...
        }}
      />
      <canvas
        ref={canvasRef}
        className="output_canvas"
        style={{
          // ...
        }}
      ></canvas> */}
      <Webcam
          ref={webcamRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left:700,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 400,
            height: 300,
          }}
        />{" "}
        <canvas
          ref={canvasRef}
          className="output_canvas"
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 700,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 400,
            height: 300,
          }}
        ></canvas>
        
      {/* {faceMatch && <div>Face Matches Image!</div>} */}
    </div>
  );
}
