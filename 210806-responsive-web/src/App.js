import { ThemeProvider } from "styled-components";
import MainPage from "./MainPage";
import media from "./media";
import theme from "./theme";
function App() {
  return (
    <>
      <ThemeProvider theme={{ ...theme, ...media }}>
        <MainPage />
      </ThemeProvider>
    </>
  );
}

export default App;
