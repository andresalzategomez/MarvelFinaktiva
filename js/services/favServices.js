let MyFavourites = new Array();
let myRandomFavorites = new Array()

function saveService(id, newFav) {
  if (!FavExist(id)) {
    MyFavourites.push(newFav);
    saveFavourites(MyFavourites);
    return true 
  }
  return false
}

function getFavouritesService() {
  let currentFav = getFavourites()
  if (currentFav) {
    MyFavourites = JSON.parse(currentFav);
  }
}

function FavExist(id) {
  const fav = MyFavourites.find((element) => element.id == id);
  return fav ? true : false;
}

function removeFavouriteService (id)
{
  const favs = MyFavourites.filter((element) => element.id != id);
  MyFavourites = favs
  saveFavourites(MyFavourites)
}