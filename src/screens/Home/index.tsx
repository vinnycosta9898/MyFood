import { Container, TitleText } from "./styles";
import { api } from "../../lib/axios";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { ReciepeCard } from "../../components/ReciepeCard";
import { useNavigation } from "@react-navigation/native";

interface ReciepesProps{
  id: string
  link_imagem: string
  receita: string
  ingredientes: string
}

export function Home(){
  const [reciepes, setReciepes] = useState<ReciepesProps[]>([])

  const navigation = useNavigation()

  async function getListReciepes(){
    const response = await api.get('/todas')
    setReciepes(response.data)
  }

  function handleGoToReciepe(reciepeId: string){
    navigation.navigate('reciepe', { reciepeId })
  }

  useEffect(() => {
    getListReciepes()  
  }, [])

  return(
    <Container>
      <TitleText style={{marginTop: 90, marginBottom: 20}}>
        Principais receitas
      </TitleText>
        <FlatList
          data={reciepes}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <ReciepeCard
              key={item.id}
              link_imagem={item.link_imagem}
              receita={item.receita}
              onPress={() => handleGoToReciepe(item.id)}             
            />
          )}  
        />
    </Container>
  )
}