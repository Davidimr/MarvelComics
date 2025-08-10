import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
export const Header = styled.header`
  display: flex;
  width: 100%;
  height: 100px;
  background-color: red;
  justify-content: space-between;
  background-image: radial-gradient(black 1px, transparent 0);
  background-size: 7px 7px;
  background-position: -10px -10px;

  .Logo {
    display: flex;
    height: 100%;
    padding: 10px;
    user-select: none;
    &:hover {
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
`;
export const ComicsDisplay = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 100px);
  background-color: #ebebeb;
`;

export const ComicContainer = styled.div`
  display: flex;
  width: 100%;
  min-width: 0;
 align-items: baseline;
  .image-container {
    padding-bottom: 10px;
  }

  img {
    width: 100%;
    object-fit: cover;
    padding: 15px;
  }
  .slide-card {
    margin-top: 20px;
    transition: all 0.3s;
    border-radius: 16px;
    width: 100%;
    min-width: 300px ;
    height: 500px;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
   
    &:hover {
      transform: scale(105%);
    }
  }
  .information {
    
    position: absolute;
    bottom: 0;
    padding: 2rem;
    width: 100%;
    height: fit-content;
    background: linear-gradient(to bottom, transparent, rgba( 0,0,0,0.8));
    border-bottom-right-radius: 16px;
    border-bottom-left-radius: 16px;
    span {
      font-family: "Roboto", sans-serif;
      color: #ffff;
      font-weight: bold;
      cursor: pointer;
      transition: 0.2s ease-in-out;
      &:hover {
        color: #3483fa;
      }
    }
    p {
      color: #ffff;
      margin-top: 10px;
      font-size: larger;
      font-weight: 900;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;
export const SlideStyled = styled.div`
  display: flex;
`;
