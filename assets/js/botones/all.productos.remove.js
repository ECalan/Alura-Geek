import {
  ref,
  remove,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";
import { database } from "../firebase.js";

export function removeFile(key, idElement, gatilloRevome, nuevoArticulo) {
  if (key == "consolas") {
    var contenedor = "consolas";
  } else if (key == "demonSlayer") {
    var contenedor = "demonSlayer";
  } else if (key == "diversos") {
    var contenedor = "diversos";
  }

  gatilloRevome.addEventListener("click", (e) => {
    e.preventDefault();

    remove(ref(database, `Productos/${contenedor}/${idElement}`));

    nuevoArticulo.remove();
  });
}
