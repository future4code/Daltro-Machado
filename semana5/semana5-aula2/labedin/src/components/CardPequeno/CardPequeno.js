import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="littlecard-container">
            <img src={ props.icone } />
            <div>
                <h4>{ props.tipo }</h4>
                <p>{ props.info }</p>
            </div>
        </div>
    )
}

export default CardPequeno;