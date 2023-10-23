import React, { useRef } from 'react';

export default function Videorender(props) {
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
        playsInline
        onEnded={handleVideoEnded}
        
      >
        <source src={props.video} type="video/mp4" />
        Sorry, your browser doesn't support videos.
      </video>
    </div>
  );
}
