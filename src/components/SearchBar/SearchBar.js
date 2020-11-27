import React, { useState } from 'react';
// import PokemonList from '../PokemonList/PokemonList';
import PropTypes from 'prop-types';



const SearchBar =  () => {
    // const [search, setInput] = useState("");

    // const handleChange = (e) => {
    //     setInputValue(e.target.value);
    // }

    // // const handleClick = () => {
    // //     setShowValues(!showValues);
    // // }

    // return (
    //     <div>
    //         <input
    //         type="text"
    //         placeHolder="Search your pokemon..."
    //         onChange={(e) => handleChange()} />

    //         {/* <button onClick={ handleClick() }>Copiar</button> */}
    //     </div>
    // )

    const [searchInput, setSearchInput] = useState('');
    const handleChange = val => {
        setSearchInput(val);
        console.log("value", val);
    }

    console.log('searchInput en search bar', searchInput);
    return (
        <div>
            <input type="text" value={searchInput} onChange={(e) => handleChange(e.target.value)} placeholder="Search your pokemon" />
        </div>
        )
};

SearchBar.propTypes = {
    searchInput: PropTypes.string.isRequired,
};


export default SearchBar;