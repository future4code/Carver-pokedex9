import React, {useEffect, useState} from 'react';
import DetailsHeader from '../../components/Header/DetailsHeader';
import axios from 'axios';
import { BASE_URL } from '../../constants/urls';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from 'react-router-dom';
import { goToPokemonsList, goToPokedex } from '../../routers/coordinator'


const PokemonDetailScreen = () => {
    
    const history = useHistory()
    const {name} = useParams()
    const [pokeStat, setPokeStat] = useState([])
    const [pokeType, setPokeType] = useState([])
    const [pokeMove, setPokeMove] = useState([])
    const [pokeSpriteBack, setSpriteBack] = useState('')
    const [pokeSpriteFront, setSpriteFront] = useState('')

    useEffect (() => {

        const getPokemoDetail = () => {
            axios
            .get(`${BASE_URL}/pokemon/${name}`)
            .then(res => {
                setPokeStat(res.data.stats)
                setPokeType(res.data.types)
                setPokeMove(res.data.moves)
                setSpriteBack(res.data.sprites.back_default)
                setSpriteFront(res.data.sprites.front_default)
                console.log(res.data)
            })
            .catch(error => {
                console.log(error.message)
            });
        } 

        return getPokemoDetail()
    }, [])
    
    const capitilze = name[0].toUpperCase() + name.substr(1);
    return(
        <>
        <DetailsHeader
            pokeName = {capitilze}
            home = {goToPokemonsList}
            history = {history}
        />
        <div> <img src={pokeSpriteFront}/> </div>
        <div> <img src={pokeSpriteBack}/> </div>

        {pokeStat.map(item => {
            return <div> {item.stat.name} : {item.base_stat} </div>
        })}
        
        {pokeType.map(item => {
            return <div> {item.type.name}</div>
        })} 
        
        <div>{pokeMove.map(item => {
            return <div>{item.move.name}</div>
        })}</div>
        </>
    )
}

export default PokemonDetailScreen;