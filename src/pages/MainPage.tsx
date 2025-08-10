
import { ComicsDisplay, Header, MainContainer } from "../styles/styles";

import { Comics} from "../components/ComicDisplay";





export function MainPage() {

  return (
    <MainContainer>
      <Header>
        <div className="Logo">
          <h1>Marvel COMICS</h1>
        </div>
      </Header>
      
      <ComicsDisplay>
        <Comics/>
      </ComicsDisplay>
    </MainContainer>
  );
}

