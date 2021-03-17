import React, { useState, useContext } from 'react';
import Select from './Select'
import {CategoriesContext} from '../context/CategoriesContext'
import {RecipesContext} from '../context/RecipesContext'

const Form = () => {
    const [inputs, setInputs] = useState({
        ingredient: '',
        category: ''
    });

    const {categories} = useContext(CategoriesContext);
    const {setParams} = useContext(RecipesContext);

    const onChangeHandler = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
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
                        onChange={onChangeHandler}
                    />
                </div>
                <div className='col-md-4'>
                    <Select
                        options={categories}
                        onChangeHandler={onChangeHandler}
                        selected={inputs.category}
                    />
                </div>
                <div className='col-md-4'>
                    <input
                        className='btn btn-block btn-primary'
                        type='submit'
                        value='Buscar Receta'
                    />
                </div>

            </div>
        </form>
    );
};

export default Form;