import React , {useState ,useContext} from "react";
import axios from "axios";

const BASE_URL = "http://localhost:3000/api/";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
    const [incomes, setIncomes] = React.useState([]);
    const [expenses, setExpenses] = React.useState([]);
    const [error, setError] = React.useState(null);

    const addIncome = async (income) => {
        try {
            const res = await axios.post(`${BASE_URL}add-income`, income );
            setIncomes(res.data);
        } catch (error) {
            setError(error.res.data.message);
        }
    };

    return (
    <GlobalContext.Provider value={'hello'}>
        {children}
        </GlobalContext.Provider>
    )
    };

    export const useGlobalContext = () => {
        return   useContext(GlobalContext);
    }
    export default GlobalProvider;

