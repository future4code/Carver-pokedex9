import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import { BASE_URL } from '../../constants/urls';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';


const PokemonDetailScreen = () => {
    
    const [pokeDetail, setPokeDetail] = useState({});
    const {name} = useParams()

    useEffect (() => {
        getPokemonDetail(name)
    }, [])
    

    const getPokemonDetail = (name) => {
        axios
        .get(`${BASE_URL}/pokemon/${name}`)
        .then(res => {
            setPokeDetail(res.data)
        })
        .catch(error => {
            console.log(error.message)
        });
    }
      
    
    return(
        <>
        <h1>PokemonDetailScreen</h1>
        </>
    )
}

export default PokemonDetailScreen;