import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState("")
    const handleInputChange = e =>{

        setInputValue(e.target.value)

        console.log('handleInputChange llamado')
    }

    const handleSubmit = e =>{
        e.preventDefault();

        if( inputValue.trim().length > 0){
        setCategories(categories=>[ inputValue, ...categories ])
        setInputValue("")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="search">Search</label>
            <p>{inputValue}</p>
            <input 
                id="search"
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                 />
        </form>
    )
}

    AddCategory.propTypes = {
        setCategories: PropTypes.func.isRequired
    };

