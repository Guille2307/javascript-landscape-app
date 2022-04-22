import { getProfiles } from "./db";

const modalToggle = () => {
  const modal = document.getElementById("modal");
  modal.classList.toggle("modal--show");
};

const onImageClick = (profile) => {
  return (event) => {
    console.log(event.srcElement.src);
    const modalImg = document.getElementById("modal-img");
    modalImg.src = event.srcElement.src;
    const author = document.getElementById("img-detail-name");
    author.textContent = "Autor: " + profile.author;
    const id = document.getElementById("img-detail-id");
    id.textContent = "ID: " + profile.id;
    const width = document.getElementById("img-detail-width");
    width.textContent = "Ancho: " + profile.width + " Pixeles";
    const height = document.getElementById("img-detail-height");
    height.textContent = "Alto: " + profile.height + " Pixeles";
    modalToggle();
  };
};
const nextImages = () => {
  view(20, 1);
};

const view = async (limit, page) => {
  const spinner = document.querySelector(".sk-circle__container");
  spinner.style.display = "block";
  const numImages = document.querySelectorAll(".card").length;
  const numPages = numImages / limit;
  const profiles = await getProfiles(limit + numImages, page + numPages);
  spinner.style.display = "none";
  let container = document.getElementById("container");
  return profiles.map((profile) => {
    let card = document.createElement("div");
    card.className = "card";
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = profile.download_url;
    img.className = ("img_card", "hvr-grow");
    img.onclick = onImageClick(profile);
    div.className = "img_container";
    div.appendChild(img);
    let authorName = document.createElement("p");
    authorName.textContent = profile.author;
    authorName.className = "author_name";
    div.appendChild(authorName);
    card.appendChild(div);
    container.appendChild(card);
    const info = document.createElement("div");
    card.appendChild(info);
    let bntNext = document.getElementById("btn-more-img");
    bntNext.addEventListener("click", nextImages);
    return { ...profile, card };
  });
};

export { view, modalToggle };
