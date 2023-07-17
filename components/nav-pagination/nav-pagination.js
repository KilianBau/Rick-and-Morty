import { page } from "../nav-button/nav-button.js";
import { maxPage, pagination } from "../../index.js";

export function changePagination() {
  pagination.textContent = `${page} / ${maxPage}`;
  // console.log(pagination.textContent);
}
