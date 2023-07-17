// import
import {
  searchBar,
  cardContainer,
  fetchCharacters,
  allCharacters,
  navigation,
  main,
} from "../../index.js";

import { page } from "../nav-button/nav-button.js";
import { createCharacterCard } from "../card/card.js";

// search function
export async function searchFunc(event) {
  // clean the container
  cardContainer.innerHTML = "";

  // if input empty, show page content
  if (searchBar.value === "") {
    const url = `https://rickandmortyapi.com/api/character/?page=${page}`;
    fetchCharacters(url);
    // show navigation bar
    navigation.style.display = "grid";
    main.style.overflowY = "auto";
  }
  // show search content
  else {
    // hide navigation bar
    navigation.style.display = "none";
    main.style.overflowY = "unset";
    // clean the container
    cardContainer.innerHTML = "";
    // get search value
    const searchString = event.target.value.toUpperCase();
    // make an array out of all matched characters
    const foundCharacters = allCharacters.filter((character) =>
      character.name.toUpperCase().startsWith(searchString)
    );

    const sortedFoundCharacters = foundCharacters.slice().sort((a, b) => {
      const charA = a.name;
      const charB = b.name;
      if (charA < charB) {
        return -1;
      } else if (charA > charB) {
        return 1;
      } else {
        return 0;
      }
    });

    // create card of all matched characters
    sortedFoundCharacters.forEach((character) => {
      const charName = character.name;
      const source = character.image;
      const status = character.status;
      const type = character.type;
      const occurrences = character.episode.length;

      createCharacterCard(charName, source, status, type, occurrences);
    });
  }
}
