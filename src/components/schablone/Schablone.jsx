// Schablone fürs anzeigen

// import uuid
import { v4 as uuidv4 } from 'uuid';

import "./Schablone.scss"



const Schablone = (props) => {
    return (
        
            <article id={props.key_i} className="article_Schablone">

                <h2>{props.title}</h2>
                <p>{props.year}</p>
                <p>{props.director}</p>
                <p>{props.duration}</p>
                <p>{props.rate}</p>
                {/* // * nochmal drüber map en um sie einzeln aufzuzählen und in einem p-Tag wiederzugeben */}
                {props.genre.map((gerneEinzeln,i) => {
                    return <p key={i} key_i={uuidv4()} > {gerneEinzeln} </p>   // key ist nur für react und map 
                                                                                // wird in browser nicht angezeigt
                })}
             {/*    <p>{props.genre}</p> */}

            </article>
        
    );
}

export default Schablone;