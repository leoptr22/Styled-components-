import React from "react";
import styled from "styled-components";
import { List } from "../Ui/List/Index";
import Title from "../Title/Index";
import Account from "../Account/Index";

const StyleContainer = styled.div `
  

  background-color: ${({theme}) => theme.body };
  min-height: 90vh;
  padding: 0px 15vw;
`
const StyleContent= styled.section `
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
@media (max-width: 800px) {

flex-direction: column;

}


`


const Container = () => {
  return (
    <StyleContainer>
      <Title>Smart Bank</Title>
      <StyleContent>
        <Account />
        <List></List>
      </StyleContent>
    </StyleContainer>
  );
};

export default Container;
