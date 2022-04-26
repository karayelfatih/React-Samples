import React from 'react'

function WtechButton(props) {

    return (
        <>
            <button style={{color:props.color}}>{props.title}</button>
        </>
    )
}

export default WtechButton