import { useEffect, useState } from "react";
import { Container, ReciepeImage, TitleText } from "./styles";
import { api } from "../../lib/axios";
import { useRoute } from "@react-navigation/native";
import { IngredientsList } from "../../components/IngredientsList";

type RouteParams = {
  reciepeId: string
}

interface ReciepeProps{
  ingredientes: string
  link_imagem: string
  modo_preparo: string
  receita: string
}

export function Reciepe(){
  const [reciepe, setReciepe] = useState<ReciepeProps>()
  
  const route = useRoute()
  const { reciepeId } = route.params as RouteParams
  
  async function fetchReciepe(){
    const response = await api.get(`/${reciepeId}`)
    console.log(response.data.ingredientes)

    setReciepe(response.data)
  }
  
  useEffect(() => {
    fetchReciepe()
  }, [reciepeId])

  return(
    <Container>
      <ReciepeImage
        source={{uri: reciepe?.link_imagem}}
      />
      <TitleText>
        {reciepe?.receita}
      </TitleText>
      <IngredientsList
        ingredientes={reciepe?.ingredientes}
      />
    </Container>
  )
}