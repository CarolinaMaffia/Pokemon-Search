import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './PokemonList.scss';

const PokemonList = () => {
    const [results, setResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    
    useEffect(() => {
      fetchData();
    }, []);

    async function fetchData() {
      const data = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const dataJson = await data.json();
      setResults(dataJson.results);
    }

    const handleChange = val => {
        setSearchInput(val);
        console.log("value", val);
    }

    console.log(results, 'ola');

    return (
      <div className="container">
        <h2> Pokemon search </h2>
        <div>
            <input type="text" value={searchInput} onChange={(e) => handleChange(e.target.value)} placeholder="Search your pokemon" />
        </div>
      
        <table className="table">
        <tr>
                  <th> 
                    <p> Pokemon Name </p>
                  </th>
                </tr>
          {results
            .filter((item) => {
               return item.name.toLowerCase().includes(searchInput.toLowerCase());
            })
            .map((result) => {
              return (
               <tr>
                  <td>
                    <p> {result.name}</p>
                  </td>
                </tr>
              )
            })
            }
        </table>
      </div>
      )
}

export default PokemonList;