'use strict';

const api_key = 'a62ca9c568c0efd5ce7e1f82b934600e';
const imageBaseUrl = 'https://image.tmdb.org/t/p/';

// fetch data rom a server using 'url' and passes the result in JSON data to a callback function along with an optional parameter if has optionalParam

const fetchDatafromServer = function(url,callback,optionalParam){
    fetch(url)
      .then(response=> response.json())
      .then(data=>callback(data,optionalParam));
}

export{imageBaseUrl,api_key,fetchDatafromServer};


