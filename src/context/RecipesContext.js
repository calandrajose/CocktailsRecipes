import React, { createContext,useState, useEffect} from 'react'
import axios from 'axios'

export const RecipesContext = createContext();


const RecipesProvider = (props)=>{
    const [params, setParams] = useState({})

    const [recipes, setRecipes] = useState([]);
    const {ingredient, category} = params

  useEffect(() => {
    if(Object.keys(params).length === 0)return
    const fetchRecipes = async ()=>{
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?${ingredient !== '' ? `i=${ingredient}` : `c=${category}`}`;
      const result = await axios(url);
      setRecipes(result.data.drinks);
    }
    fetchRecipes()
  }, [ingredient, category, params]);

    return(
        <RecipesContext.Provider
            value={{
                params,
                recipes,
                setParams,
            }}>
            {props.children}
        </RecipesContext.Provider>
    )
}

export default RecipesProvider