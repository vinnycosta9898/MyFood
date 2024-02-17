import { styled } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 340px;
  height: 80px;
  background-color: #ffffff10;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  margin: 10px 0;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const ReciepeImage = styled.Image`
  width: 60px;
  height: 100%;
  border-radius: 8px;
`

export const TitleText = styled.Text`
  color: ${({ theme }) => theme.COLORS.white};
  font-size: ${({ theme }) => theme.FONT_SIZE.md}px;
  font-weight: bold;
`