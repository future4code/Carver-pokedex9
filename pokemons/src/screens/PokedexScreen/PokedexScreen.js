import Header from '../../components/Header/Header';
import { useHistory } from 'react-router-dom';
import { goToPokemonsList, goToPokedex } from '../../routers/coordinator'


const PokedexScreen = () => {

    const history = useHistory()
    
    return(
        <>
        <Header
            home = {goToPokemonsList}
            pokedex = {goToPokedex}
            history = {history}
        />
        <h1>PokedexScreen</h1>
        </>
    )
}

export default PokedexScreen;