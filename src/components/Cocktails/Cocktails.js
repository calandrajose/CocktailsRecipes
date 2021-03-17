import React, {useContext} from 'react';
import {RecipesContext} from '../../context/RecipesContext'
import Cocktail from './Cocktail'

const Cocktails = () => {

    const {recipes} = useContext(RecipesContext);

    return (
        <div className='row mt-5'>
            {recipes.map(recipe=>(
                <Cocktail
                    imageUrl={recipe.strDrinkThumb}
                    name={recipe.strDrink}
                    key={recipe.idDrink}    
                    id={recipe.idDrink}    
                />
            ))}
        </div>  
    );
};

export default Cocktails;