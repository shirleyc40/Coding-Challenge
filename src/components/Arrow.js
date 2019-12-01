import React from 'react';
import '../styles/arrow.css'

function Arrow(props) {
    return <div className={`slide-arrow${props.direction}`} onClick={props.clickFunction}>
        {props.glyph}
    </div>
}
export default Arrow;

