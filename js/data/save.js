function saveFavourites (favs)
{
    localStorage.setItem('Favourites', JSON.stringify(favs));
}

function getFavourites()
{
    return localStorage.getItem("Favourites");
}
