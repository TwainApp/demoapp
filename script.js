// Simulate generated videos
const videoFilenames = [
  'videos/question_0.mp4',
  'videos/question_1.mp4',
  'videos/question_2.mp4'
];

const container = document.getElementById('video-list');
const template = document.getElementById('video-template');

videoFilenames.forEach(filename => {
  const clone = template.content.cloneNode(true);
  const video = clone.querySelector('video');
  const source = video.querySelector('source');
  const text = clone.querySelector('.filename');
  const button = clone.querySelector('.post-button');

  source.src = filename;
  video.load(); // Refresh video source
  text.textContent = filename.split('/').pop();

  button.addEventListener('click', () => {
    console.log(`✅ Pretend uploading: ${filename}`);
    button.textContent = '✅ Posted';
    button.disabled = true;
  });

  container.appendChild(clone);
}); 