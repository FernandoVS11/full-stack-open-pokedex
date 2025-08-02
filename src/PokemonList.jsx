import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const PokemonList = ({ pokemonList }) => {
  return (
    <div className="list-container">
      {pokemonList.map(({ id, name }) => (
        <Link key={id} to={`/pokemon/${name}`} className="list-item" style={{ backgroundImage: `url(${`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`})` }}>
          <div
            className="list-item-name"
          >
            {name}
          </div>
        </Link>
      ))}
    </div>
  )
}
PokemonList.propTypes = {
  pokemonList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired
};

export default PokemonList
