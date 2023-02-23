// eindeutige id erstellen   npm i uuid --> dann hier import
import {v4 as uuidv4} from 'uuid';

import Schablone from "../schablone/Schablone.jsx";


// importieren von movies daten
import { movies } from "../datenObjektMovies/DatenObjektMovies.jsx"

console.log(movies)

// map Funktion 
const html = movies.map((obj, index) =>{
console.log(obj)
console.log(index)
console.log(uuidv4())
   return <Schablone key={uuidv4()} key_={uuidv4()} key_i={`obj_`+index+`_`+uuidv4()} title={obj.title} year={obj.year} director={obj.director} duration={obj.duration} rate={obj.rate} genre={obj.genre}  ></Schablone>
    // key wird für react für map oder forEach benötigt, damit es keinen Fehler gibt
    //  dfae2019-733b-426a-93be-f543d607c28e
    // key_ kann als id im html geommen werden, da nur key zu fehler führt, da es key-Word ist
    // dfae2019-733b-426a-93be-f543d607c28e
    // key_i kann als id im html geommen werden, da nur key zu fehler
    // obj_1-250_dfae2019-733b-426a-93be-f543d607c28e
})

const MapFunktion = () => {
    return (

        <>
            {html}
        </>


    );
}

export default MapFunktion;