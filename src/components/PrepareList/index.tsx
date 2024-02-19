import { removedNumbers } from "../../utils/removednumbers"
import { Container, IngredientsContainer, RegularText, TitleText } from "./styles"

interface PrepareListProps{
  modo_preparo: any
}

export function PrepareList({ modo_preparo } : PrepareListProps){
  const prepareList = modo_preparo?.split(". ")

  const list = removedNumbers(String(prepareList))

  console.log(new Array(list))

  return(
    <Container>
      <TitleText>
        Modo Preparo
      </TitleText>
      
      {list &&  list.map((item) => {
        return(
          <IngredientsContainer>
              <RegularText>
                {item}
              </RegularText>
          </IngredientsContainer>
        )
      })}
    </Container>
  )
}