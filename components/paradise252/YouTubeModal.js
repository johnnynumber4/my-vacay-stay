import React from 'react';

const YouTubeModal = ({ videoId, onClose }) => {
  const videoUrl = `https://www.youtube.com/embed/${videoId}?rel=0`;

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center" onClick={handleClose}>
      <div className="max-w-screen-md w-full bg-white p-6 rounded-lg" onClick={(e) => e.stopPropagation()}>
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
          onClick={handleClose}
        >
          Close
        </button>
        <iframe
          className="w-full h-96"
          src={videoUrl}
          title="YouTube Video"
          allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubeModal;