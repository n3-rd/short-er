const shortenButton = document.getElementById("shorten-link");
const linkInput = document.getElementById("link");
const shortLink = document.querySelector(".short-link");
shortenButton.addEventListener("click", () => {
  shortenLink();
});

const shortenLink = (link) => {
  fetch(`https://api.shrtco.de/v2/shorten?url=${linkInput.value}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(data.result.full_short_link);
      shortLink.textContent = data.result.full_short_link;
      storeLinksData();
    });
};

const storeLinksData = () => {
  localStorage.setItem("linkInputStore", linkInput.value);
  localStorage.setItem("shortLinkStore", shortLink.textContent);
};

const checkLinksStorage = () => {
  linkInput.value = localStorage.getItem("linkInputStore");
  shortLink.textContent = localStorage.getItem("shortLinkStore");
};

checkLinksStorage();