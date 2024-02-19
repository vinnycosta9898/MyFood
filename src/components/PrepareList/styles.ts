import { styled } from "styled-components/native"; 

export const Container = styled.View`
  width: 96%;
  height: max-content;

  
`

export const TitleText = styled.Text`
  color: ${({ theme }) => theme.COLORS.white};
  font-size: ${({ theme }) => theme.FONT_SIZE.xlg}px;
  font-weight: bold;
  margin: 5px 0;
`

export const RegularText = styled.Text`
  color: ${({ theme }) => theme.COLORS.white};
  font-size: ${({ theme }) => theme.FONT_SIZE.lg}px;
  flex-direction: row;
`

export const IngredientsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 10px;

  background-color: #ffffff10;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 8px;
  flex-direction: column;
  align-items: center;
  margin-top: 10px; 

  
`