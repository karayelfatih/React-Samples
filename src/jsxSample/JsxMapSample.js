import React from 'react'

function JsxSample3() {

    let cities = ['İstanbul', 'Londra', 'Moskova', 'Havana', 'Tahran', 'Atina']

    //Bu şehirleri ul içerisindeki li de göster
    return (
        <>
            <ul>
                {
                    cities.map((item) => {

                       return (<li>{item}</li>)

                    })
                }

                {
                    cities.map((item) =>  (<li>{item}</li>))
                }
            </ul>


        </>
    )
}

export default JsxSample3


