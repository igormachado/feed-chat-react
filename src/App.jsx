import { ThemeProvider } from "styled-components";
import { defautTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Profile } from "./components/Profile";
import { Post } from "./components/Post";
import { profiles } from "./data";

function App() {
  return (
    <ThemeProvider theme={defautTheme}>
      <Header />

      {profiles.map((profile) => {
        if (profile.id === 0) {
          return (
            <Profile
              key={profile.id}
              profileName={profile.profileName}
              avatarUrl={profile.avatarUrl}
              profileRole={profile.profileRole}
            />
          );
        }
      })}

      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
