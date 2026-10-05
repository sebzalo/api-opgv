//import { contai } from "./app";

const url = "https://ghibliapi.vercel.app/films";
// legger til en constant som er urlen for endeponktet
const contai = document.querySelector("#gameContainer");
//hennter section alt skal være i

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
    // lager elemententet for titlen og sier det skal være en h3
    const titleText = document.createTextNode(apiData.title);
    // tar texten fra api dataen sin title
    gibliTitleH3.append(titleText);
    // også sender eg det videre
    gibliTitleH3.classList = "titleH3";
    // legger til en class

    const gibliDirectorP = document.createElement("p");
    // lagger constant som er en p
    const directorText = document.createTextNode(apiData.director);
    //tar datan fra apien sine diractors
    gibliDirectorP.append(directorText);
    // sender datan til vedre bruk
    gibliDirectorP.classList = "DirectorP";
    // legger til klasse

    const gibliproducerP = document.createElement("p");
    const producerText = document.createTextNode(apiData.producer);
    gibliproducerP.append(producerText);
    gibliproducerP.classList = "producerPH3";

    const gibliScore = document.createElement("p");
    const rtScoreText = document.createTextNode(apiData.rt_score);
    gibliScore.append(rtScoreText);
    gibliScore.classList = "rtScoreP";

    const figure = document.createElement("figure");
    // lager en constant som er en figure tag
    const movieImage = document.createElement("img");
    // lager en ny constnat for movieimage som som lages til og være et img tag/element
    movieImage.src = apiData.url;
    // gir movieimage src til apidaten sin url
    figure.appendChild(movieImage);
    // appender movieimage i figure
    figure.classList = "gibliImg";
    // gir det en class som er gibliImg

    gibliCard.append(
      gibliTitleH3,
      gibliDirectorP,
      gibliproducerP,
      gibliScore,
      movieImage,
    );
    // appender alle elementer i film kortet
    contai.appendChild(gibliCard);
    // appender film kortet i konteineren
  });
}

getdata(url);
// henter datan til url
