import React, { useState } from 'react';
import YouTubeModal from './YouTubeModal'; // Adjust the path based on your project structure

const HomeGuide = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState(null);

  const openModal = (videoId) => {
    setCurrentVideoId(videoId);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentVideoId(null);
  };

  const slides = [
    {
      type: 'textAndPicture',
      title: 'Your Home Away from Home',
      imgSrc: 'https://images.ctfassets.net/qa81vo6zkhsj/5dgfSrxA20Q7uTYD5x8azE/a1deab2aa9aa93c926e951bd341615e0/paradise_sunset.jpeg',
      content: 'Welcome to our home away from home!  Here at Paradise 252 we do the electric boogaloo.  Enjoy your home away from home!  Use this site as your to guide to all things about the Condo and some of our favorite things here in Myrtle Beach, SC.',
    },
    {
      type: 'youtube',
      title: 'Accessing the Building',
      videoId: 'ECX7Ro45dYs',
    },
    {
      type: 'textAndPicture',
      title: 'Accessing the Condo',
      imgSrc: 'https://images.ctfassets.net/qa81vo6zkhsj/5dgfSrxA20Q7uTYD5x8azE/a1deab2aa9aa93c926e951bd341615e0/paradise_sunset.jpeg',
      content: 'Punch in the code, duh.',
    },
    // Add more slides as needed
  ];

  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div className="flex mb-4">
        {slides.map((slide, index) => (
          <div
            key={index}
            onClick={() => setActiveTab(index)}
            className={`cursor-pointer p-4 ${
              activeTab === index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
            } rounded-md`}
          >
            {slide.title}
          </div>
        ))}
      </div>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`${
            activeTab !== index && 'hidden'
          } transition-all duration-300 ease-in-out`}
        >
          {slide.type === 'textAndPicture' && (
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <div className="md:w-1/2 md:mr-4 mb-4 md:mb-0">
                <img
                  className="w-full h-48 object-cover rounded-md"
                  src={slide.imgSrc}
                  alt="Slide Image"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold mb-4">{slide.title}</h2>
                <p className="mb-4">{slide.content}</p>
              </div>
            </div>
          )}
          {slide.type === 'youtube' && (
            <div className="relative cursor-pointer" onClick={() => openModal(slide.videoId)}>
              Accessing the Building
              <img
                className="w-full h-48 object-cover rounded-md"
                src={`https://img.youtube.com/vi/${slide.videoId}/mqdefault.jpg`}
                alt="Video Preview"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <svg
                  className="w-12 h-12 text-white transition-opacity duration-300 opacity-70 hover:opacity-90"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 4l10 6-10 6V4z" />
                </svg>
              </div>
            </div>
          )}
        </div>
      ))}
      {modalOpen && <YouTubeModal videoId={currentVideoId} onClose={closeModal} />}
    </div>
  );
};

export default HomeGuide;
