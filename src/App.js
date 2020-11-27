import './App.css';
// import PropTypes from 'prop-types';
import PokemonList from './components/PokemonList/PokemonList';
import SearchBar from './components/SearchBar/SearchBar';

const App = () => {
  return (
    <div className="App">
      <PokemonList />
    </div>
  );
}

export default App;
