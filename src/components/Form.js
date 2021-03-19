import React, { useState, useContext, useEffect } from 'react';
import Select from './Select'
import { CategoriesContext } from '../context/CategoriesContext'
import { RecipesContext } from '../context/RecipesContext'

const Form = () => {
    const [inputs, setInputs] = useState({
        ingredient: '',
        category: ''
    });
    const [isComplete, setIsComplete] = useState(false)

    const { categories } = useContext(CategoriesContext);
    const { setParams } = useContext(RecipesContext);

    const { ingredient, category } = inputs;


    useEffect(() => {
        if (ingredient !== '' || category !== '') {
            setIsComplete(true);
        } else {
            setIsComplete(false);
        }
    }, [ingredient, category])

    const onInputChangeHandler = (e) => {
        setInputs({
            category: '',
            ingredient: e.target.value
        })
    }

    const onSelectChangeHandler = (e) => {
        setInputs({
            ingredient: '',
            category: e.target.value
        });
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setParams(inputs)
    }

    return (
        <form className='col-12'
            onSubmit={onSubmitHandler}>
            <fieldset className='text-center'>
                <legend>Busca cocktails por categoria o Ingrediente</legend>
            </fieldset>
            <div className='row mt-4'>
                <div className='col-md-4'>
                    <input
                        className='form-control'
                        type='text'
                        name='ingredient'
                        placeholder='Ingrediente. Ej: Gin'
                        onChange={onInputChangeHandler}
                        value={inputs.ingredient}
                    />
                </div>
                <div className='col-md-1'>

                <span className='orSpan'> O </span>
                </div>
                <div className='col-md-4 mb-4'>
                    <Select
                        options={categories}
                        onChangeHandler={onSelectChangeHandler}
                        selected={inputs.category}
                    />
                </div>
                <div className='col-md-3'>
                    <input
                        className={`btn btn-block ${isComplete ? 'btn-primary' : 'btn-secondary' }`}
                        type='submit'
                        value='Buscar Receta'
                        disabled={!isComplete}
                    />
                </div>

            </div>
        </form>
    );
};

export default Form;