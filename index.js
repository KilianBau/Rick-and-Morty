console.clear();

// import
import { createCharacterCard } from "./components/card/card.js";
import { nextPage, prevPage } from "./components/nav-button/nav-button.js";
import { changePagination } from "./components/nav-pagination/nav-pagination.js";
import { searchFunc } from "./components/search-bar/search-bar.js";

// variables
export const cardContainer = document.querySelector(
  '[data-js="card-container"]'
);
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
export const main = document.querySelector('[data-js="main"]');
export const searchBar = document.querySelector('[data-js="search-bar"]');
export const navigation = document.querySelector('[data-js="navigation"]');
export const prevButton = document.querySelector('[data-js="button-prev"]');
export const nextButton = document.querySelector('[data-js="button-next"]');
export const pagination = document.querySelector('[data-js="pagination"]');

// States
export let maxPage;

const searchQuery = "";

const firstUrl = "https://rickandmortyapi.com/api/character/?page=1";

// ------------------------------------------

// fetchData function
export async function fetchCharacters(url) {
  try {
    const response = await fetch(url);
    // if response ok, create cards
    if (response.ok) {
      const result = await response.json();
      const characters = result.results;
      // get the max Page
      maxPage = result.info.pages;

      // create cards within pages of 20 elements
      characters.forEach((character) => {
        const charName = character.name;
        const source = character.image;
        const status = character.status;
        const type = character.type;
        const occurrences = character.episode.length;

        createCharacterCard(charName, source, status, type, occurrences);
        changePagination();
      });
    } else {
      console.log("Response is not okeee");
    }
  } catch (error) {
    console.log("Error:", error);
  }
}

// create an array with all the characters
export let allCharacters = [];

export async function createAllCharacters() {
  // loop through all characters and make an array
  for (let i = 1; i <= maxPage; i++) {
    const url = `https://rickandmortyapi.com/api/character/?page=${i}`;

    try {
      const response = await fetch(url);
      if (response.ok) {
        const result = await response.json();

        const characters = result.results;
        allCharacters = allCharacters.concat(characters);
      } else {
        console.log("Response is not okeee");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  }
  return allCharacters;
}

fetchCharacters(firstUrl).then(createAllCharacters);
/* .then((allCharacters) => {
    console.log(allCharacters);
  }) */

nextButton.addEventListener("click", nextPage);
prevButton.addEventListener("click", prevPage);

searchBar.addEventListener("input", searchFunc);
