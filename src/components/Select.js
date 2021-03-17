import React from 'react'

const Select = ({options, onChangeHandler, selected}) => {
    return (
        <select
            className='form-control'
            onChange={onChangeHandler}
            value={selected}
            name='category'>
                <option value='' name='--Selecciona categoria--'>--Elegi una categoria--</option>
            {options.map(option => (
                <option key={option.strCategory} value={option.strCategory}>{option.strCategory}</option>
            ))}
        </select>
    )
}
export default Select;
