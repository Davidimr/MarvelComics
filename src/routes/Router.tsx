import { BrowserRouter } from "react-router";
import { MainPage } from "../pages/MainPage";

export function Router() {
  return (
    <BrowserRouter>
      <MainPage/>
    </BrowserRouter>
  );
}
