import * as Styled from '../../styled-components/styled-components';

const DetailsHeader = (props) => {
    return (
        <Styled.DisplayHeader>
        
            <Styled.TitleHeader>{props.pokeName}</Styled.TitleHeader>
           
            <Styled.DisplayButton>
                <Styled.ButtonHeaderConfig onClick={() => {props.home(props.history)}}>Home</Styled.ButtonHeaderConfig>
                <Styled.ButtonHeaderConfig onClick={() => {props.removePoke(props.history)}}>Remover Pokemon</Styled.ButtonHeaderConfig>
            </Styled.DisplayButton>
            
        </Styled.DisplayHeader>
        
    )
}

export default DetailsHeader;