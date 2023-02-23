// Schablone fürs anzeigen


import "./Schablone.scss"



const Schablone = (props) => {
    return (
        
            <article id={props.key_i} className="article_Schablone">

                <h2>{props.title}</h2>
                <p>{props.year}</p>
                <p>{props.director}</p>
                <p>{props.duration}</p>
                <p>{props.rate}</p>
                <p>{props.genre}</p>

            </article>
        
    );
}

export default Schablone;