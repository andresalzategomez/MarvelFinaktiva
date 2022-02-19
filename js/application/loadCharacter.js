const divcontCharacters = docum.getElementById("idContCharacters");
const sectionContInfo = docum.getElementById("sectionContInfo");
const ButtonAdd = docum.getElementsByClassName("buttonAdd");
const ImgFavourites = docum.getElementsByClassName("ImgFavourites");
const info = docum.getElementById("info");
let characters = new Array();
let page = 1;
let perPage = 10;
let totalItems = 100;
let totalPages = 10;
getFavouritesService();
LoadFavourites();
loadPagination();

async function LoadCharacters(characters) {
  myRandomFavorites = new Array ()
  let htmlTemplate = "";
  for (const character of characters) {
    htmlTemplate += `<div class="character">
    <div class="contCharacterTop">
        <div>
            <img id="idImgCharacter" src="${
              character.thumbnail.path + "." + character.thumbnail.extension
            }" alt="spiderman" class="imageCharacter">
        </div>
        <div>
            
            <p class="titleCharacter">${character.name}</p>
            <p class="textCharacter">${character.description}</p>
            <button class="buttonViewMore">VIEW MORE</button>
        </div>
    </div>
    <div class="contCharacterDown">
        <p class="titleRelated">Related Comics</p>
        <div class="contComicsRelated">`;

    let limit = 3;
    for (let [index, comic] of character.comics.items.entries()) {
      htmlTemplate += `<p onclick="getComics('${comic.resourceURI}', true)" class="comicsRelated" >${comic.name}"</p>`;
      myRandomFavorites.push(comic);
      if (index == limit) break;
    }
    htmlTemplate += `</div>
    </div>
</div>`;
  }
  divcontCharacters.innerHTML = htmlTemplate;
  await LoadRandomFavourites();
}

function openComic(comic) {
  document.getElementById("modal1").classList.add(isVisible);
  let htmlTemplate = "";
  for (const imgcomic of comic) {
    htmlTemplate += ` <div id="divContInfo" class="contInfo">
              <div>
                <img class="modalImg" src="${
                  imgcomic.thumbnail.path + "." + imgcomic.thumbnail.extension
                }" alt="">
              </div>
              <div class="textsModal">
                  <p class="titleModal">${imgcomic.title}</p>
                  <p class="textModal">${imgcomic.description}</p>
              </div>
              </div></div>
                    <div class="contButtons">
                      <div onclick="addFavourites(\`${
                        imgcomic.resourceURI
                      }\`, \`${
      imgcomic.thumbnail.path + "." + imgcomic.thumbnail.extension
    }\` , \`${imgcomic.title?.replace(
      /'/g,
      "\\'"
    )}\`, \`${imgcomic.description?.replace(
      /'/g,
      "\\'"
    )}\`)" id="idButtonAdd" class="buttonAdd">
                        <img class="ImgFavourites" src="./images/btn-favourites-primary.png" alt="">
                        <p>ADD TO FAVOURITES</p>
                      </div>
                      <div class="buttonBuy">
                        <img src="./images/shopping-cart-primary.png" alt="">`;
    for (let [index, price] of imgcomic.prices.entries()) {
      if (index === 0) {
        htmlTemplate += `<p>BUY FOR $${price.price}</p>`;
        break;
      }
    }
    htmlTemplate += `</div>
                </div>`;
  }
  sectionContInfo.innerHTML = htmlTemplate;
}

function addFavourites(id, img, title, description) {
  const newFav = new Favourites(id, img, title, description);
  saveService(id, newFav) ? LoadFavourites() : null;

  Array.from(ButtonAdd).forEach((elementoadd) => {
    elementoadd.style.backgroundColor = "#322827";
    elementoadd.style.color = "#ec1e22";
    elementoadd.style.src = "./images/btn-favourites-primary.png";
  });

  Array.from(ImgFavourites).forEach((elementoImg) => {
    elementoImg.style.src = "./images/btn-favourites-primary.png";
  });

  closeModal();
}

function loadPagination() {
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  prevBtn.addEventListener("click", () => pageChange("prev"));
  nextBtn.addEventListener("click", () => pageChange("next"));
}

function pageChange(type) {
  totalItems = characters.length;
  totalPages = Math.round(characters.length / perPage);
  if (type === "next" && page < totalPages) {
    page += 1;
    render();
  } else if (type === "prev" && page > 1) {
    page -= 1;
    render();
  }
}

function render() {
  let arrToShow = characters.slice(
    page > 1 ? perPage * (page - 1) : 0,
    perPage * page
  );

  LoadCharacters(arrToShow);

  info.innerHTML = `Showing ${
    arrToShow.length * page
  } of ${totalItems}. Page Number: ${page} of ${totalPages}`;
}
