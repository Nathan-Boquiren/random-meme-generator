let cl = console.log;

const generateMemeBtn = document.getElementById("generate-meme-btn");
const memeContainer = document.getElementById("meme-container");

document
  .getElementById("generate-meme-btn")
  .addEventListener("click", fetchMemeInfo);
let memes = [];
function fetchMemeInfo() {
  fetch("https://meme-api.com/gimme/programminghumor")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      cl(data);
      if (!memes.includes(data.url)) {
        memes.push(data.url);
        memeContainer.innerHTML += `<div class="image-card"><h2>${data.title}</h2><img id="meme-image" src="${data.url}" ></div>`;
      }
    })
    .catch((error) => {
      console.error("There was an error:", error);
    });
}

fetchMemeInfo();

document.addEventListener("touchstart", (event) => {
  startY = event.touches[0].clientY;
});

document.addEventListener("touchend", (event) => {
  const endY = event.changedTouches[0].clientY;
  const deltaY = startY - endY;

  if (deltaY > 50) {
    fetchMemeInfo();
  }
});
