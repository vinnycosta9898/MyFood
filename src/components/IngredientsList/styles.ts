import { styled } from "styled-components/native"; 

export const Container = styled.View`
  width: 96%;
  height: max-content;
`

export const RegularText = styled.Text`
  color: ${({ theme }) => theme.COLORS.white};
  font-size: ${({ theme }) => theme.FONT_SIZE.lg}px;
  font-weight: bold;
  margin: 10px 0;
`

export const IngredientsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`