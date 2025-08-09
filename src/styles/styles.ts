import styled from "styled-components";


export const MainContainer = styled.div`
display: flex;
flex-direction: row;

width: 100%;
height: 100%;
`
export const Header = styled.header`
display: flex;
width: 100%;
height: 100px;
background-color: red;
justify-content: space-between;

background-image: radial-gradient(black 1px, transparent 0);
background-size: 7px 7px;
background-position: -10px -10px;


.Logo{
  display: flex;
  height: 100%;
  padding: 10px;
  user-select: none;
    &:hover{
        cursor: pointer;
    }
  }
h1 {
  font-family: "Bangers", system-ui;
  align-items: center;
  font-weight: 400;
  font-size: 50px;
  color: white;
}
`
export const SearchBar = styled.div`
display: flex;
align-items: center;

`