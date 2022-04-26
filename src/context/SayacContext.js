import { createContext, useState } from "react";

const SayacContext = createContext(null)

export const SayacProvider = ({children}) => {

    const [sayac, setSayac] = useState(0)

    const values = {
        sayac,
        setSayac
    }

    return <SayacContext.Provider value={values}>{children}</SayacContext.Provider>

}

export default SayacContext