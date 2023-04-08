// Get the video player and video title elements
const videoPlayer = document.querySelector('#video-player');
const videoTitle = document.querySelector('#video-title');

// Get the video list container element
const videoListContainer = document.querySelector('#video-list');

// Load the video list from the JSON file
fetch('videos.json')
  .then(response => response.json())
  .then(videos => {
    // Loop through the videos and create a thumbnail for each one
    videos.forEach(video => {
      // Create a thumbnail element
      const thumbnail = document.createElement('div');
      thumbnail.classList.add('col-md-6', 'col-lg-12', 'mb-4');

      // Create the thumbnail image and overlay
      const thumbnailImage = document.createElement('img');
      thumbnailImage.src = video.thumbnailUrl;
      thumbnailImage.alt = video.title;
      thumbnailImage.classList.add('img-fluid');

      const thumbnailOverlay = document.createElement('div');
      thumbnailOverlay.classList.add('overlay');

      // Create the thumbnail title
      const thumbnailTitle = document.createElement('div');
      thumbnailTitle.textContent = video.title;
      thumbnailTitle.classList.add('video-title');

      // Add the thumbnail image, overlay, and title to the thumbnail element
      thumbnail.appendChild(thumbnailImage);
      thumbnail.appendChild(thumbnailOverlay);
      thumbnail.appendChild(thumbnailTitle);

      // Add a click event listener to the thumbnail that sets the video source and title
      thumbnail.addEventListener('click', () => {
        videoPlayer.src = video.videoUrl;
        videoTitle.textContent = video.title;
      });

      // Add the thumbnail to the video list container
      videoListContainer.appendChild(thumbnail);
    });
  });
