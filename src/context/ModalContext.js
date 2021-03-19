import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const ModalContext = createContext();

const ModalProvider = (props) => {
    const [recipesId, setRecipesId] = useState(null)
    const [cocktail, setCocktail] = useState({})

    useEffect(() => {
        if (!recipesId) return
        const fetchRecipes = async () => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${recipesId}`;
            const result = await axios(url);
            console.log(result.data.drinks);
            setCocktail(result.data.drinks[0]);
        }
        fetchRecipes()
    }, [recipesId])

    return (
        <ModalContext.Provider
            value={{
                cocktail,
                setRecipesId,
                setCocktail
            }}
        >
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalProvider