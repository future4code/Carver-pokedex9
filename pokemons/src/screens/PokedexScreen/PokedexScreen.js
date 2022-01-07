import React, { useContext } from "react";
import Header from '../../components/Header/Header';
import { useHistory } from 'react-router-dom';
import { goToPokemonsList, goToPokedex } from '../../routers/coordinator'
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import GlobalStateContext from '../../global/GlobalStateContext';
import {PokeListContainer, TitleContainer} from './styled'



const PokedexScreen = () => {

    const history = useHistory()
    const { pokedex } = useContext (GlobalStateContext)
    
    return(
        <>
        <Header
            home = {goToPokemonsList}
            pokedex = {goToPokedex}
            history = {history}
        />
        <TitleContainer>Sua Pokedex</TitleContainer>
        <PokeListContainer>   
        {pokedex &&
          pokedex.map((poke) => {
            return <PokemonCard isPokedex key={poke.name} poke={poke} />;
          })}
        </PokeListContainer>
        </>
    )
}

export default PokedexScreen;