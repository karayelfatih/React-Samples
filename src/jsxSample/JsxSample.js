import React from 'react'

function JsxSample() {

    //var, let ve const olarak tanımlanıyor
    //Tek yönlü bir akış söz konusu

    const name = "Çağatay"
    const age = 18

    const user = {
        name:'Çağatay',
        surname:'Yıldız',
        age:17.5,
        city:'LA'
    }

    return (
        <>
            <div>
                <span>{name.toUpperCase()}</span>
                <hr></hr>

                <span>{age}</span>

                <hr></hr>

                <span>{user.city}</span>
            </div>
        </>
    )
}

export default JsxSample