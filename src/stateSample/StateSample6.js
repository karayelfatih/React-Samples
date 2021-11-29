import React,{useState} from 'react'

function StateSample6() {

    var defaultCities = ['Ankara' , 'İstanbul','Trabzon', 'Ordu' , 'bursa','edirne','Antalya']
    const [cities, setCities] = useState(defaultCities)
    
    const add = () =>{
        setCities ([...defaultCities,'Afyon']);

    }
    return (
        <>
            <ul>
                {
                    cities.map((item) => <li>{item}</li>)
                }
            </ul>
            <button onClick = {add}>Add City</button>
        </>
    )
}

export default StateSample6
