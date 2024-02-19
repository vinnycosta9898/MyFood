import { View } from "react-native";
import { Container, RegularText, IngredientsContainer, TitleText } from "./styles";

interface IngredientListProps{
  ingredientes: string | undefined
}

export function IngredientsList({ ingredientes } : IngredientListProps){
  const ingredientsList = ingredientes?.split(",").map(item => item.trim())

  return(
    <Container>
      <TitleText>
        Ingredientes
      </TitleText>
      
      {ingredientsList && ingredientsList.map((item) => {
        return(
          <IngredientsContainer>
            <View style={{width: 8, height: 8, backgroundColor: '#FFF', borderRadius: 999}}/>
            <RegularText>
              {item}
            </RegularText>
          </IngredientsContainer>
        )
      })}
    </Container>
  )
}