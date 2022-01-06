import styled from 'styled-components'

// ==== Display Geral ====

export const DisplayPrincipal = styled.div `
    display: grid;
    grid-template-rows: 100px 1fr;
`

export const DisplayButton = styled.div `
    display: flex;
    justify-content: space-between;
    width: 500px;
` 

// ==== Display Header ====

export const DisplayHeader = styled.div `
    background-color: #e00000;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 1px #d10000 solid;
`
export const ImagemPrincipalHeader = styled.img `
    height: 75px;
`
export const ButtonHeaderConfig = styled.button `
    display: flex;
    background-color: #e00000;
    border: 1px #e00000 solid;
    border-radius: 10px;
    width: 250px;
    height: 30px;
    font-size: 24px;
    font-weight: bold;
    color: #ffcb05;
    text-shadow: 2px 0 0 #395ea9, -2px 0 0 #395ea9, 0 2px 0 #395ea9, 0 -2px 0 #395ea9, 1px 1px #395ea9, -1px -1px 0 #395ea9, 1px -1px 0 #395ea9, -1px 1px 0 #395ea9;
    cursor: pointer;
`

export const TitleHeader = styled.h1 `
    color: #ffcb05;
    text-shadow: 2px 0 0 #395ea9, -2px 0 0 #395ea9, 0 2px 0 #395ea9, 0 -2px 0 #395ea9, 1px 1px #395ea9, -1px -1px 0 #395ea9, 1px -1px 0 #395ea9, -1px 1px 0 #395ea9;
`
