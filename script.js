let cl = console.log;

const generateMemeBtn = document.getElementById("generate-meme-btn");
const memeContainer = document.getElementById("meme-container");

generateMemeBtn.addEventListener("click", fetchMemeInfo);

function fetchMemeInfo() {
  fetch("https://meme-api.com/gimme")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      cl(data.url);
      memeContainer.innerHTML = `<img id="meme-image" src="${data.url}" ></img>`;
    })
    .catch((error) => {
      console.error("There was an error:", error);
    });
}
