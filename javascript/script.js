import { header } from "./header.js";
import { nav } from "./nav.js";
import { jugadores } from "./informacion.js";
import { footer } from "./footer.js";

document.body.appendChild(header);

document.body.appendChild(nav);

for (let index = 0; index < jugadores.length; index++) {
    const section = document.createElement("section");
    section.classList.add("jugador");
    section.innerHTML = `<h2>Jugador #${index + 1}: ${jugadores[index].name}</h2>
    <img
      src=${jugadores[index].image}
      alt="Imagen ${index}"
      class="section-image"
    />
    <p>
      ${jugadores[index].text}
    </p>`

    document.body.appendChild(section);
}

document.body.appendChild(footer);


