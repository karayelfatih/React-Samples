import { createContext, useState } from "react";

const ToDoContext = createContext(null)

export const ToDoProvider = ({children}) => {

    const [toDos, setToDos] = useState([])

    const values = {
        toDos,
        setToDos
    }

    return <ToDoContext.Provider value={values}>{children}</ToDoContext.Provider>

}

export default ToDoContext




