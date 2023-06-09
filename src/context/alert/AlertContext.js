import { createContext,useReducer } from "react"
import  alertReducer from "./AlertReducer"

const AlertContext = createContext()

export const AlertProvider = ({children}) =>{
    const initialstate = null

    const [state,dispatch] = useReducer(alertReducer,initialstate)

    const setAlert =(msg,type) =>{
        dispatch({
            type : 'SET_ALERT',
            payload : {msg,type}
        })
        setTimeout(()=>dispatch({ type : 'REMOVE_ALERT'}), 3000)
    }
    const clearAlert = ()=>{
        dispatch({ type : 'REMOVE_ALERT'})
    }
    return <AlertContext.Provider value = {{alert : state,setAlert,clearAlert}}>
            {children}
        </AlertContext.Provider>
}
export default AlertContext 
