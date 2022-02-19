const favContainer = docum.getElementById("favContainer")
const favRandomContainer = docum.getElementById("favRandomContainer")

function LoadFavourites() {
  let htmlTemplate = "";
  for (const fav of MyFavourites) {
    htmlTemplate += `<div onclick="getComics('${fav.id}', true)" class="favourite">
    <img onclick="removeFavourite(\`${fav.id}\`)" class="iconDelete" src="./images/btn-delete.png" alt="">
    <img class="imgFav" src="${fav.img}" alt="">
    <p class="titleFav">${fav.title}</p>
</div>`;
  }
  favContainer.innerHTML = htmlTemplate;
}

async function LoadRandomFavourites() {
    let htmlTemplate = "";
    const randomFav = Array();
    for(let i=0; i<3; i++)
    {
        const fav = myRandomFavorites[Math.floor(Math.random() * myRandomFavorites.length)]
        const favComic = await getComics(fav.resourceURI, false)
        const favRand = new Favourites(`${favComic[0].resourceURI}`, `${favComic[0].thumbnail.path + "." + favComic[0].thumbnail.extension}` , `${favComic[0].title?.replace(/'/g, "\\'")}`, `${favComic[0].description?.replace(/'/g, "\\'")}`)
        randomFav.push(favRand)
    } 
    for (const fav of randomFav) {
      htmlTemplate += `<div onclick="getComics('${fav.id}', true)" class="favourite">
      <img class="imgFav" src="${fav.img}" alt="">
      <p class="titleFav">${fav.title}</p>
  </div>`;
    }
    favRandomContainer.innerHTML = htmlTemplate;
  }

function removeFavourite (id)
{
    removeFavouriteService(id)
    LoadFavourites()
}
