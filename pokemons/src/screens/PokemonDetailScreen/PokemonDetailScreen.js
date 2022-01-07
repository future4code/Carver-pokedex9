import React, { useEffect, useState } from 'react';
import DetailsHeader from '../../components/Header/DetailsHeader';
import axios from 'axios';
import { BASE_URL } from '../../constants/urls';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from 'react-router-dom';
import { goToPokemonsList, goToPokedex } from '../../routers/coordinator'
import { PokeInfosContainer, ImagesContainer, ImgWrapper, TitleContainer, StatsContainer, TypeAndMovesContainer, MovesContainer, TypesContainer } from './styled';


const PokemonDetailScreen = () => {

    const history = useHistory()
    const { name } = useParams()
    const [pokeStat, setPokeStat] = useState([])
    const [pokeType, setPokeType] = useState([])
    const [pokeMove, setPokeMove] = useState([])
    const [pokeSpriteBack, setSpriteBack] = useState('')
    const [pokeSpriteFront, setSpriteFront] = useState('')

    useEffect(() => {

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
    return (
        <>
            <DetailsHeader
                pokeName={capitilze}
                home={goToPokemonsList}
                history={history}
            />
            <PokeInfosContainer>
                <ImagesContainer>
                    <ImgWrapper src={pokeSpriteFront} />
                    <ImgWrapper src={pokeSpriteBack} />
                </ImagesContainer>
                
                <StatsContainer>
                <TitleContainer>Especificações</TitleContainer>
                    {pokeStat.map(item => {
                        return <div>
                            <strong>{item.stat.name}</strong>: {item.base_stat}
                        </div>
                    })}


                </StatsContainer>
                <TypeAndMovesContainer>
                    <TypesContainer>
                        <TitleContainer>Categoria</TitleContainer>
                        {pokeType.map(item => {
                            return <div> {item.type.name}</div>
                        })}
                    </TypesContainer>
                    <MovesContainer>
                        <TitleContainer>Principais habilidades</TitleContainer>
                        {pokeMove.map((item, index) => {
                            return (
                                index < 5 && <p key={item.move.name}>{item.move.name}</p>
                            )
                        })}
                    </MovesContainer>
                </TypeAndMovesContainer>

            </PokeInfosContainer>
        </>
    )

}

export default PokemonDetailScreen;