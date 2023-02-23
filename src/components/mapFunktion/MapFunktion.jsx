// eindeutige id erstellen   npm i uuid --> dann hier import
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

// import hmtl schablone
import Schablone from "../schablone/Schablone.jsx";


// importieren von movies daten
import { movies } from "../datenObjektMovies/DatenObjektMovies.jsx"


// css import
import "./MapFunktion.scss"

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

    /************************************************************************************************
     * 
     * *          Filter Buttons
     * 
     *************************************************************************************************/


    // useState movies
    const [sollMovies, setSollMovies] = useState(movies)




    let sollMoviesCopy = [...sollMovies]
    // auslöser fürs sortieren 
    // kopie erstellen, damit original gleich bleibt
    function handleSortByRate() {
        //const sollMoviesCopy = [...sollMovies]
        //  console.log(sollMoviesCopy)

        // copy sortieren nach Rate
        // sollMovies    anstatt sollMoviesCopy
        console.log(sollMoviesCopy)
        sollMoviesCopy.sort((a, b) => b.rate - a.rate)  // 9-0 absteigend sortieren

        // useState updaten 
        // ! return hin, dann wird auch der Desktop aktualisiert
        setSollMovies(sollMoviesCopy)

    }

    // function  Jahr aufsteigend sortieren 
    function handleSortDateAsc() {
        sollMoviesCopy.sort((a, b) => a.year - b.year)
        setSollMovies(sollMoviesCopy)

    }

    // function  Jahr absteigend sortieren 
    function handleSortDateDes() {
        sollMoviesCopy.sort((a, b) => b.year - a.year)
        setSollMovies(sollMoviesCopy)
    }

    // function A-Z aufsteigend sortieren 
    function handleSortAZ() {
        sollMoviesCopy.sort((a, b) => (a.title < b.title ? -1 : 1))
        // ? -1 : 1 
        // if (a.title < b.title) true dann sortiere   -1   eins weiter for     else     1    eins weiter hinter
        setSollMovies(sollMoviesCopy)
    }

    // function Z-A absteigend sortieren 
    function handleSortZA() {
        sollMoviesCopy.sort((a, b) => {
            if (a.title > b.title) {
                return -1;

            } else if (a.title > b.title) {
                return 1;

            } else return 0;
        }

        )
        setSollMovies(sollMoviesCopy)
    }

    /************************************************************************************************
     * 
     * *        Titel Suche
     * 
     *************************************************************************************************/
    // titel suche
    // useState hook zum inputValue fangen

    // function onChange input
    function handleTextInput(e) {
        console.log(e.target.value)

        for (let i = 0; i < sollMovies.length; i++) {
            console.log(i)


            //sollMoviesCopy = [];        // oben von const zu let ändern, damit hier leeren 
            if (e.target.value.toLowerCase() === sollMovies[i].title.toLocaleLowerCase()) {
                console.log("in if ")

                const sollMoviesCopys2 = [...sollMoviesCopy]


                 sollMoviesCopy = [
                    {
                        title: sollMovies[i].title,
                        year: sollMovies[i].year,
                        director: sollMovies[i].director,
                        duration: sollMovies[i].duration,
                        genre: [sollMovies[i].genre],
                        rate: [sollMovies[i].rate],
                    }
                ]
                setSollMovies(sollMoviesCopy)

                setTimeout(() => {
                sollMoviesCopy = [...sollMoviesCopys2]      // somit wird sollMoviesCopy wieder auf 
                                                            // den Anfangszustand mit 250 Objekten gesetzt
                                                            // mit dem Timeout kommt eine Verzögerung
                                                            // so das die suche 10Sek angezeigt wird,
                                                            // bevor die Seite wieder lädt
                setSollMovies(sollMoviesCopy)
                },10000)



                /* const html = (

                    <Schablone
                        title={sollMovies[i].title}
                        year={sollMovies[i].year}
                        director={sollMovies[i].director}
                        duration={sollMovies[i].duration}
                        rate={sollMovies[i].rate}
                        genre={sollMovies[i].genre}  ></Schablone>);
                return html
 */





            } else { }
        }
    }










    // map Funktion 
    const html = sollMovies.map((obj, index) => {

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
            <input onChange={handleTextInput} type="text" name="textSuche" id="textSuche" placeholder='Titel Suche  10Sek' />

            <article className='art_button'>
                <button onClick={handleSortDateAsc}>Sort by Date Ascending</button>
                <button onClick={handleSortDateDes}>Sort by Date Descending</button>
                <button onClick={handleSortByRate}>Best Rate</button>
                <button onClick={handleSortAZ}>A-Z</button>
                <button onClick={handleSortZA}>Z-A</button>
            </article>
            {html}
        </>


    );
}

export default MapFunktion;