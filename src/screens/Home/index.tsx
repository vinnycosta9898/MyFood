import { Container, TitleText } from "./styles";
import { api } from "../../lib/axios";
import { useEffect, useState } from "react";
import { FlatList, ScrollView } from "react-native";
import { ReciepeCard } from "../../components/ReciepeCard";

interface ReciepesProps{
  id: string
  link_imagem: string
  receita: string
  ingredientes: string
}

export function Home(){
  const [reciepes, setReciepes] = useState<ReciepesProps[]>([])

  async function getListreciepes(){
    const response = await api.get('/todas')
    console.log(response.data[0])
    setReciepes(response.data)
  }

  useEffect(() => {
    getListreciepes()  
  }, [])

  return(
    <Container>
      <TitleText style={{marginTop: 90, marginBottom: 20}}>
        Principais receitas
      </TitleText>
        <FlatList
          data={reciepes}
          renderItem={({ item }) => (
            <ReciepeCard
              key={item.id}
              ingredientes={item.ingredientes}
              link_imagem={item.link_imagem}
              receita={item.receita}              
            />
          )}  

        />
    </Container>
  )
}