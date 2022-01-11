import * as Styled from '../../styled-components/styled-components';
import logoImage from '../../images/headerImage/pokemon-logo.png';

const Header = (props) => {
    return (
        <Styled.DisplayHeader>
        
            <Styled.ImagemPrincipalHeader src={logoImage}/>
           
            <Styled.DisplayButton>
                <Styled.ButtonHeaderConfig onClick={() => {props.home(props.history)}}>Home</Styled.ButtonHeaderConfig>
                <Styled.ButtonHeaderConfig onClick={() => {props.pokedex(props.history)}}>Pokedex</Styled.ButtonHeaderConfig>
            </Styled.DisplayButton>
            
            
        </Styled.DisplayHeader>
        
    )
}


export default Header;