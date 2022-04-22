import "./styles/styles.scss";
import "bootstrap";
import { view, modalToggle } from "./view";
import { filter } from "./find";

window.onload = async function () {
  const profiles = await view(30, 2);
  const modalClose = document.getElementById("modal-close");
  modalClose.onclick = modalToggle;
  const find = document.getElementById("find");
  find.onkeyup = filter(profiles);
};
