import { useNavigation } from "@react-navigation/native";
import { Container, ReciepeImage, TitleText } from "./styles";

interface ReciepeCardProps{
  link_imagem: string
  receita: string
  onPress: () => void
}

export function ReciepeCard({ link_imagem, receita, onPress } : ReciepeCardProps){

  return(
    <Container onPress={() => onPress()}>
      <ReciepeImage
        source={{ uri: link_imagem }}
      />
      <TitleText>
        {receita}
      </TitleText>
    </Container>
  )
}