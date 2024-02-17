import { styled } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.gray_500};
  flex-direction: column;
  align-items: center;
`

export const ReciepeImage = styled.Image`
  width: 96%;
  height: 200px;
  border-radius: 16px;
  margin-top: 80px;
`

export const TitleText = styled.Text`
  color: ${({ theme }) => theme.COLORS.white};
  font-size: ${({ theme }) => theme.FONT_SIZE.xlg}px;
  font-weight: bold;
`
