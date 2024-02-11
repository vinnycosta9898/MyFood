import { styled } from "styled-components/native";

export const Container= styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.gray_500};
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const TitleText = styled.Text`
  color: ${({ theme }) => theme.COLORS.white};
  font-size: ${({ theme }) => theme.FONT_SIZE.lg}px;
  font-weight: bold;
`