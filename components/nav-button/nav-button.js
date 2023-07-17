import { fetchCharacters, cardContainer, maxPage } from "../../index.js";

let page = 1;

export function nextPage() {
  cardContainer.innerHTML = "";
  if (page === maxPage) {
    page = 1;
  } else {
    page++;
  }
  const url = `https://rickandmortyapi.com/api/character/?page=${page}`;
  console.log(url);
  fetchCharacters(url);
}

export function prevPage() {
  cardContainer.innerHTML = "";
  if (page === 1) {
    page = maxPage;
  } else {
    page--;
  }
  const url = `https://rickandmortyapi.com/api/character/?page=${page}`;
  console.log(url);
  fetchCharacters(url);
}

// ?page=<pageIndex>
