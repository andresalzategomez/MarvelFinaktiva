const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

async function getCharacters (name=null)
{
  const ts = "1"
  const Apikey = "ebfd6e907a8729a278b5d0a65f9710d4"
  const secretKey = "5671402f2343d72d6fbb326da6e3b23038c7cc60"
  const hashMD5 = md5(ts+secretKey+Apikey)
  
  const offset = 0;
  const limit = 100;
  const url = name ? `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${name}` 
    : `https://gateway.marvel.com/v1/public/characters?`;

  fetch(`${url}&apikey=${Apikey}&ts=${ts}&hash=${hashMD5}&offset=${offset}&limit=${limit}`, requestOptions)
  .then(response => response.json()) 
  .then(result => 
  {
    characters = result.data.results;
    render();  
  })
  .catch(error => console.log('error', error));
}


async function getComics (url, openCom)
{
  const ts = "1"
  const Apikey = "ebfd6e907a8729a278b5d0a65f9710d4"
  const secretKey = "5671402f2343d72d6fbb326da6e3b23038c7cc60"
  const hashMD5 = md5(ts+secretKey+Apikey)

  return await fetch(`${url}?apikey=${Apikey}&ts=${ts}&hash=${hashMD5}`, requestOptions)
  .then(response => response.json()) 
  .then(result => 
  {
    if(openCom)
    {
      openComic(result.data.results)
    }else{
      return result.data.results
    }
    
  })
  .catch(error => console.log('error', error));
}

