console.clear();

// import
import { createCharacterCard } from "./components/card/card.js";

// variables
const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

const url = "https://rickandmortyapi.com/api/character";

// ------------------------------------------

// fetchData funciton
async function fetchCharacters() {
  try {
    const response = await fetch(url);
    console.log(response);
    if (response.ok) {
      const result = await response.json();
      console.log(result);

      const characters = result.results;
      console.log(characters);

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

fetchCharacters();
