'use strict';

import { api_key, fetchDatafromServer } from "./api.js";
import { sidebar } from "./sidebar.js";
import { createMovieCard } from "./movie-card.js";
import { search } from "./search.js";





// collect genre name and url from local storage
const genreName = window.localStorage.getItem("genreName");
const urlParam = window.localStorage.getItem("urlParam");
const pageContent = document.querySelector("[page-content]");



sidebar();

let currentPage=1;
let totalPages=0;


fetchDatafromServer(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&sort_by=popularity.desc&include_adult=false&page=${currentPage}&${urlParam}`, function ({results : movieList, total_pages}) {
   totalPages = total_pages;

  document.title = `Movies - MovieSpot`;

  const movieListElem = document.createElement("section");
  movieListElem.classList.add("movie-list", "genre-list");

  movieListElem.ariaLabel = `${genreName} Movies`;

  movieListElem.innerHTML =
  
  `
  <div class="title-wrapper">
  <h1 class="heading">All Movies</h1>
  </div>

<div class="grid-list">

</div>

<button class="btn load-more loading" load-more>Load More</button>
  
  
  `;

  for(const movie of movieList){
    const moviecard = createMovieCard(movie);
    movieListElem.querySelector(".grid-list").appendChild(moviecard);
  }


   pageContent.appendChild(movieListElem);

   // load more button functionality

   document.querySelector("[load-more]").addEventListener("click", function(){

    if(currentPage>=totalPages){
      this.style.display = "none";
      return;

    }

    currentPage++;
    this.classList.add("loading");

    fetchDatafromServer(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&sort_by=popularity.desc&include_adult=false&page=${currentPage}&${urlParam}`,({results: movieList})=>{

           this.classList.remove("loading");
           for(const movie of movieList){
            const moviecard = createMovieCard(movie);
            movieListElem.querySelector(".grid-list").appendChild(moviecard);
           }

    });


   });


});

search();
