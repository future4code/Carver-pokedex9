import * as Styled from '../../styled-components/styled-components';
import logoImage from '../../images/headerImage/pokemon-logo.png';

const Header = () => {
    return (
        <Styled.DisplayHeader>
        
            <Styled.ImagemPrincipalHeader src={logoImage}/>
           
            <Styled.DisplayButton>
                <Styled.ButtonHeaderConfig>Home</Styled.ButtonHeaderConfig>
                <Styled.ButtonHeaderConfig>Pokedex</Styled.ButtonHeaderConfig>
            </Styled.DisplayButton>
        </Styled.DisplayHeader>
        
    )
}

export default Header;