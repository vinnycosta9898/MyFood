import { Container, TitleText, ButtonStyled, ButtonText } from "./styles";
import { AntDesign } from '@expo/vector-icons';

export function SignIn(){
  return(
    <Container>
      <TitleText>Faça o login</TitleText>
      <ButtonStyled>
        <AntDesign 
          name="google" 
          size={24} 
          color="black" />
        <ButtonText>Fazer login com o Google</ButtonText>
      </ButtonStyled>
    </Container>
  )
}