// Create the observer for checking if video is in view
const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.play();
        } else {
          entry.target.pause();
        }
      });
    },
    {
      threshold: 0.2 // 0 (default) - element must be totally offscreen, 0.5 - 50%, 1 - element fully on screen
    }
  );
  
  // Select all videos with data attribute wb-embed="video"
  const videos = document.querySelectorAll('[wb-embed="video"]');
  
  // Loop through all the videos
  videos.forEach((video) => {
    // Pause on initial load
    video.pause();
    // Watch for entering viewport
    observer.observe(video);
  });