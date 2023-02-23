// eindeutige id erstellen   npm i uuid --> dann hier import
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

// import hmtl schablone
import Schablone from "../schablone/Schablone.jsx";


// importieren von movies daten
import { movies } from "../datenObjektMovies/DatenObjektMovies.jsx"

console.log(movies)
/* 
// map Funktion 
const html = movies.map((obj, index) => {
    console.log(obj)
    console.log(index)
    console.log(uuidv4())
    return <Schablone
        key={uuidv4()}
        key_={uuidv4()}
        key_i={`obj_` + index + `_` + uuidv4()}
        title={obj.title}
        year={obj.year}
        director={obj.director}
        duration={obj.duration}
        rate={obj.rate}
        genre={obj.genre}  ></Schablone>
    // key wird für react für map oder forEach benötigt, damit es keinen Fehler gibt
    //  dfae2019-733b-426a-93be-f543d607c28e
    // key_ kann als id im html geommen werden, da nur key zu fehler führt, da es key-Word ist
    // dfae2019-733b-426a-93be-f543d607c28e
    // key_i kann als id im html geommen werden, da nur key zu fehler
    // obj_1-250_dfae2019-733b-426a-93be-f543d607c28e
}) 
*/




// sfc
const MapFunktion = () => {

    // useState movies
const [sollMovies, setSollMovies] = useState(movies)
console.log(movies)
console.log(sollMovies)

const sollMoviesCopy = [...sollMovies]
// auslöser fürs sortieren 
// kopie erstellen, damit original gleich bleibt
function handleSortByRate(){
    //const sollMoviesCopy = [...sollMovies]
   //  console.log(sollMoviesCopy)

// copy sortieren nach Rate
// sollMovies    anstatt sollMoviesCopy
sollMoviesCopy.sort((a, b) => b.rate - a.rate)  // 9-0 absteigend sortieren
console.log(sollMovies)
console.log(sollMoviesCopy)

// useState updaten 
// ! return hin, dann wird auch der Desktop aktualisiert
setSollMovies(sollMoviesCopy)

// ! Ende function ..Sort..Rate
}

// function  Jahr aufsteigend sortieren 
function handleSortDateAsc(){
    sollMoviesCopy.sort((a, b) => a.year - b.year)
    console.log(sollMovies)
    console.log(sollMoviesCopy)
    setSollMovies(sollMoviesCopy)

    // ! Ende function..Sort..DateAsc
}

// function  Jahr absteigend sortieren 
function handleSortDateDes(){
    sollMoviesCopy.sort((a, b) => b.year - a.year)
    setSollMovies(sollMoviesCopy)
}


console.log(sollMovies)
console.log(sollMoviesCopy)

// map Funktion 
const html = sollMovies.map((obj, index) => {
    console.log(obj)
    console.log(index)
    console.log(uuidv4())
    return <Schablone
        key={uuidv4()}
        key_={uuidv4()}
        key_i={`obj_` + index + `_` + uuidv4()}
        title={obj.title}
        year={obj.year}
        director={obj.director}
        duration={obj.duration}
        rate={obj.rate}
        genre={obj.genre}  ></Schablone>

})


    return (

        <>
        <button onClick={handleSortDateAsc}>Sort by Date Ascending</button>
        <button onClick={handleSortDateDes}>Sort by Date Descending</button>
        <button onClick={handleSortByRate}>Best Rate</button>
        <button>A-Z</button>
        <button>Z-A</button>
            {html}
        </>


    );
}

export default MapFunktion;