import { ActivityIndicator } from "react-native";
import { Container } from "../ReciepeCard/styles";

export function Loading(){
  return(
    <Container>
      <ActivityIndicator
        size={40}
      />
    </Container>
  )
}