import { Container, ReciepeImage, TitleText } from "./styles";

interface ReciepeCardProps{
  link_imagem: string
  ingredientes: string
  receita: string
}

export function ReciepeCard({ link_imagem, ingredientes, receita } : ReciepeCardProps){
  return(
    <Container>
      <ReciepeImage
        source={{ uri: link_imagem }}
      />
      <TitleText>
        {receita}
      </TitleText>
    </Container>
  )
}