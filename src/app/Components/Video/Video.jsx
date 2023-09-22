import { useEffect, useState } from 'react';
import YouTube from 'react-youtube';

const Video = ({ videoId }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [containerHeight, setContainerHeight] = useState('696px'); 

  const opts = {
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setContainerHeight('200px');
      } 
      else {
        setContainerHeight('696px');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="px-6 md:px-0">
      <div className={`my-8 rounded-2xl relative bg-[#D9D9D9]`} style={{ height: containerHeight }}>
      {
      !isPlaying && (
        <div
          className="absolute inset-0 flex items-center justify-center cursor-pointer"
          onClick={() => setIsPlaying(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="#fff" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        )
      }
      {
        isPlaying && (
        <div className="overflow-hidden rounded-2xl">
          <YouTube videoId={videoId} opts={opts} />
        </div>
        )
      }
      </div>
    </div>
  );
};

export default Video;
