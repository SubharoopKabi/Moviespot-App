'use strict';


console.log("Hello")
//Adding event listener on multiple elements

const addEventOnElements = function(elements, eventType, callback ){
    for(const elem of elements){
        elem.addEventListener(eventType,callback);
    }
}



//Toggle serach box in mobile phone

const searchBox = document.querySelector("[search-box]");
const searchTogglers = document.querySelectorAll("[search-toggler]");

addEventOnElements(searchTogglers, "click", function(){
    searchBox.classList.toggle("active");
});

// store movieId in 'local storage' when you click a movie card

const getMovieDetail = function(movieId){
    window.localStorage.setItem("movieId", String(movieId));
}

const getMovieList = function(urlParam, genreName){
    window.localStorage.setItem("urlParam", urlParam);
    window.localStorage.setItem("genreName", genreName);
}


