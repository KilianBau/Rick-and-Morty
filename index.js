console.clear();

// import
import { createCharacterCard } from "./components/card/card.js";
import { nextPage, prevPage } from "./components/nav-button/nav-button.js";

// variables
export const cardContainer = document.querySelector(
  '[data-js="card-container"]'
);
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
export const prevButton = document.querySelector('[data-js="button-prev"]');
export const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
export let maxPage = 1;
// export let page = 1;
const searchQuery = "";

const firstUrl = "https://rickandmortyapi.com/api/character/?page=1";

// ------------------------------------------

// fetchData funciton
export async function fetchCharacters(url) {
  try {
    const response = await fetch(url);
    console.log(response);
    if (response.ok) {
      const result = await response.json();
      console.log(result);

      const characters = result.results;
      console.log(characters);

      maxPage = result.info.pages;
      console.log(maxPage);

      characters.forEach((character) => {
        const charName = character.name;
        const source = character.image;
        const status = character.status;
        const type = character.type;
        const occurrences = character.episode.length;

        createCharacterCard(charName, source, status, type, occurrences);
      });
    } else {
      console.log("Response is not okeee");
    }
  } catch (error) {
    console.log("Error:", error);
  }
}

fetchCharacters(firstUrl);

nextButton.addEventListener("click", nextPage);
prevButton.addEventListener("click", prevPage);
