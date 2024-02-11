import { styled } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.gray_500};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`

export const TitleText = styled.Text`
  color: ${({ theme }) => theme.COLORS.white};
  font-weight: bold;
  font-size: ${({ theme }) => theme.FONT_SIZE.xlg}px;
`

export const ButtonStyled = styled.TouchableOpacity`
  width: 320px;
  height: 60px;
  background-color: ${({ theme }) => theme.COLORS.gray_400};;
  border-radius: 8px;

  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.COLORS.white};
  font-size: ${({ theme }) => theme.FONT_SIZE.lg}px;
  font-weight: bold;
`