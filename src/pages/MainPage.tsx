
import { Header, MainContainer } from "../styles/styles";

import { Search } from "../components/Search";





export function MainPage() {

  return (
    <MainContainer>
      <Header>
        <div className="Logo">
          <h1>Marvel COMICS</h1>
        </div>
        <Search/>
      </Header>
      
    </MainContainer>
  );
}

