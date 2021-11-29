/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './buttonStyle.css';
function StyleSapmle() {

    const divStyle = {
        width :200,
        height :200,
        backgroundColor :'tomato'
    }
    return (
        <>  
        <button className="deletebtn">Butonu sil</button>
            <div style={divStyle}>

            </div>

            <div style={{height:200, width:200, backgroundColor:'cyan'}}>

            </div>

        </>
    )
}

export default StyleSapmle
