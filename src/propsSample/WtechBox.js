import React from 'react'

//Bir componente PARENT componentten DATA yollluyorsunuz!!
function WtechBox(props) {
    return (
        <div style={{borderStyle:'solid',width:300}}>

            <span>{props.title}</span>
            <p style={{ color: 'tomato' }}>{props.detail}</p>
            <button> Go To Detail</button>
        </div>
    )
}

export default WtechBox