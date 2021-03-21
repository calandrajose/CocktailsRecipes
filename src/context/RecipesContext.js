import React, { createContext,useState, useEffect} from 'react'
import axios from 'axios'
import {toggleState} from '../utility'

export const RecipesContext = createContext();


const RecipesProvider = (props)=>{
  const [params, setParams] = useState({})
  const [error, setError] = useState(false)  
    const [recipes, setRecipes] = useState([]);
    const {ingredient, category} = params

  useEffect(() => {
    if(Object.keys(params).length === 0)return
    const fetchRecipes = async ()=>{
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?${ingredient !== '' ? `i=${ingredient}` : `c=${category}`}`;
      const result = await axios(url);
      if(result.data){
        setRecipes(result.data.drinks);
      }else{
        toggleState(2000, setError);
        setRecipes([]);
      }
    }
    fetchRecipes()
  }, [ingredient, category, params]);


    return(
        <RecipesContext.Provider
            value={{
                params,
                recipes,
                setParams,
                error,
            }}>
            {props.children}
        </RecipesContext.Provider>
    )
}

export default RecipesProvider