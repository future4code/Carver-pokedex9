import React, {useContext} from 'react';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import GlobalStateContext from '../../global/GlobalStateContext';
import Header from '../../components/Header/Header';
import { PokeListContainer } from './styled';
import { useHistory } from 'react-router-dom';
import { goToPokemonsList, goToPokedex } from '../../routers/coordinator';

const PokemonsListScreen = () => {
    const history = useHistory()
    const { pokemons } = useContext(GlobalStateContext);
    
    return (
        <>
            <Header
                home = {goToPokemonsList}
                pokedex = {goToPokedex}
                history = {history}
            />
            
            <PokeListContainer>
                {pokemons && pokemons.map ((poke) => {
                    return <PokemonCard key={poke.name} poke={poke} />
                })}
            </PokeListContainer>
        </>
    )
}

export default PokemonsListScreen;