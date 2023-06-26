import React from "react";
import { Routes, Route, Link, HashRouter } from "react-router-dom";
import Main from "./components/list/Main";
import Character from "./components/list/Character";
import CharacterDetail from "./components/list/CharacterDetail";
import GlobalStyle from "./components/styled/Global";
import { useAxios } from "./hooks/useAxios";

const App = () => {
  const { data } = useAxios("https://gist.githubusercontent.com/wonchuring/86b161825fea586c9b58bd4732aef860/raw/ddc06c7e3032745e37feaf47b4ff8115849f11e0/MS.json");
  return (
    <>
      <GlobalStyle />
      <HashRouter>
        <Routes>
          <Route path="/" index element={<Main />} />

          <Route>
            <Route element={<Character />} />
            <Route path="/character/:characterID" element={<CharacterDetail data={data} />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
