import React, {createContext, useState, useEffect} from 'react'
import axios from 'axios'
export const CategoriesContext = createContext();

const CategoriesProvider = (props)=>{
      const [categories, setCategories] = useState([]);

      useEffect(() => {
        const fetchSelectOptions = async () => {
            const result = await axios('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
            setCategories(result.data.drinks);
        }
        fetchSelectOptions()
    }, [])

    return(
        <CategoriesContext.Provider
            value={{
                categories,
                setCategories
            }}>
            {props.children}
        </CategoriesContext.Provider>
    )
}

export default CategoriesProvider