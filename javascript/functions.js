//import { contai } from "./app";

const url = "https://ghibliapi.vercel.app/films";
const contai = document.querySelector("#gameContainer");

async function getdata(apiurl) {
  try {
    fetch(apiurl)
      //den henter apien
      .then((res) => res.json())
      //tar data fram json til apien
      .then((data) => createCard(data))
      //og lagrer datan i createcard som blir den andre funksjonen
      .finally(console.log("got api!"));
    // til slutt ska den console.loge vist den har fått tak i apien
  } catch (err) {
    console.error(err);
    // og her console.loge error vist noe har gått galt
  }
}

// stuff to add to card title,
//title
//image
// diractor,
// producer,
// rt score,

function createCard(arrayData) {
  arrayData.forEach((apiData) => {
    //starte en array av datan fra apien og bruker foreach methoden for og loope gjennom di
    const gibliCard = document.createElement("div");
    //lager en div som skal være kortet til filmen
    gibliCard.classList = "movieCard";
    //gir den class navn

    const gibliTitleH3 = document.createElement("h3");
    const titleText = document.createTextNode(apiData.title);
    gibliTitleH3.append(titleText);
    gibliTitleH3.classList = "titleH3";

    const gibliDirectorP = document.createElement("p");
    const directorText = document.createTextNode(apiData.Director);
    gibliDirectorP.append(directorText);
    gibliDirectorP.classList = "DirectorP";

    const gibliproducerP = document.createElement("p");
    const producerText = document.createTextNode(apiData.producer);
    gibliproducerP.append(producerText);
    gibliproducerP.classList = "producerPH3";

    const gibliScore = document.createElement("p");
    const rtScoreText = document.createTextNode(apiData.rt_score);
    gibliScore.append(rtScoreText);
    gibliScore.classList = "rtScoreP";

    const figure = document.createElement("figure");
    const movieImage = document.createElement("img");
    figure.appendChild(movieImage);
    movieImage.src = apiData.url;
    figure.classList = "gibliImg";

    gibliCard.append(
      gibliTitleH3,
      gibliDirectorP,
      gibliproducerP,
      gibliScore,
      movieImage,
    );
    contai.appendChild(gibliCard);
  });
}

getdata(url);
//export { getdata, createCard };
//kan være en ide og bruke await på di to .thensa
