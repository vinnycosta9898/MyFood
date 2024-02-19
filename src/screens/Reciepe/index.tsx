import { useEffect, useState } from "react";
import { Container, HeaderContainer, ReciepeImage, ReciepePrepareContainer, RegularText, TitleText } from "./styles";
import { api } from "../../lib/axios";
import { useNavigation, useRoute } from "@react-navigation/native";
import { IngredientsList } from "../../components/IngredientsList";
import { Ionicons } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from "react-native";
import { PrepareList } from "../../components/PrepareList";

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
  const navigation = useNavigation()
  
  async function fetchReciepe(){
    const response = await api.get(`/${reciepeId}`)
    setReciepe(response.data)
  }
  
  useEffect(() => {
    fetchReciepe()
  }, [reciepeId])

  return(
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderContainer>
          <TouchableOpacity style={{position: 'absolute', left: 0}} onPress={() => navigation.goBack()}>
            <Ionicons
              name="chevron-back"
              color="#fff"
              size={24}
            />
          </TouchableOpacity>
          <TitleText>
            {reciepe?.receita}
          </TitleText>
        </HeaderContainer>
        <ReciepeImage
          source={{uri: reciepe?.link_imagem}}
        />
        <IngredientsList
          ingredientes={reciepe?.ingredientes}
        />
        <ReciepePrepareContainer>
          <PrepareList
            modo_preparo={reciepe?.modo_preparo}
          />
        </ReciepePrepareContainer>
      </ScrollView>
    </Container>
  )
}