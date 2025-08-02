import React from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';
import { useApi } from './useApi';
import PokemonAbility from './PokemonAbility';
import ErrorMessage from './ErrorMessage';

const formatName = (nameWithDash) => nameWithDash.replace('-', ' ');

const PokemonPage = ({ previous, next }) => {
  const { name } = useParams();
  const { data: pokemon, error, isLoading } = useApi(`https://pokeapi.co/api/v2/pokemon/${name}`);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <div className="pokemon-page">
      <h2>{formatName(name)}</h2>
      <div className="pokemon-image">
        <img
          src={pokemon.sprites.other['official-artwork'].front_default}
          alt={pokemon.name}
        />
      </div>
      <div className="navigation-links">
        {previous && <Link to={`/pokemon/${previous.name}`}>Previous</Link>}
        {next && <Link to={`/pokemon/${next.name}`}>Next</Link>}
      </div>
      {pokemon.abilities.some(a => a.is_hidden) && (
        <PokemonAbility
          abilityName={pokemon.abilities.find(a => a.is_hidden).ability.name}
        />
      )}
    </div>
  );
};

PokemonPage.propTypes = {
  previous: PropTypes.shape({
    name: PropTypes.string.isRequired
  }),
  next: PropTypes.shape({
    name: PropTypes.string.isRequired
  })
};

export default PokemonPage;
