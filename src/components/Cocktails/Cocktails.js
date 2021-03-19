import React, {useContext} from 'react';
import {RecipesContext} from '../../context/RecipesContext'
import Cocktail from './Cocktail'

const Cocktails = () => {

    const {recipes} = useContext(RecipesContext);

    return (
        <div className='row mt-5'>
            {recipes.map(recipe=>(
                <Cocktail
                    data={recipe}
                    key={recipe.idDrink}    
                />
            ))}
        </div>  
    );
};

export default Cocktails;