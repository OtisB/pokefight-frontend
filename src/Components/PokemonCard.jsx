import { Link } from "react-router-dom";
import "./PokemonCard.css";

function PokemonCard({ pokemon }) {

  return (
    <Link to={`/pokemon/${pokemon.id}`}>
      <section className="poke-card" key={pokemon.id}>
        <div className="card-image-container">
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt={pokemon.name.english} />
        </div>
        <div className="card-content">
          <h2>{pokemon.name.english}</h2>
        </div>
      </section>
    </Link>
  )
}

export default PokemonCard;
