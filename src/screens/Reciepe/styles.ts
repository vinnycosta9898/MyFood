import { styled } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.gray_500};
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
`

export const HeaderContainer = styled.View`
  width: 96%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 20px 0;
`

export const ReciepeImage = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 16px; 
`

export const TitleText = styled.Text`
  color: ${({ theme }) => theme.COLORS.white};
  font-size: ${({ theme }) => theme.FONT_SIZE.xlg}px;
  font-weight: bold;
  padding: 0 40px;
  text-align: center;
`

export const ReciepePrepareContainer = styled.View`
  width: 96%;
`

export const RegularText = styled.Text`
  color: ${({ theme }) => theme.COLORS.white};
  font-size: ${({ theme }) => theme.FONT_SIZE.lg}px;
  margin: 5px 0;
`
