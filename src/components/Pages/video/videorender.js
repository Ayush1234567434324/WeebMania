import React, { useRef } from 'react';

export default function Videorender() {
  const videoRef = useRef(null);

  const handleVideoEnded = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Reset video to the beginning
      videoRef.current.play(); // Start playing again
    }
  };

  return (
    <div>
      <video
        ref={videoRef}
        width="100%"
        autoPlay
        muted
        onEnded={handleVideoEnded}
        
      >
        <source src="tanjiro.mp4" type="video/mp4" />
        Sorry, your browser doesn't support videos.
      </video>
    </div>
  );
}
