import { Venus } from "./components/Venus";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./Home";
import { Mercury } from "./components/Mercury";
import { Moon } from "./components/Moon";
import { Mars } from "./components/Mars";
import { Asteroids } from "./components/Asteroids";
import { Jupiter } from "./components/Jupiter";
import { Saturn } from "./components/Saturn";
import { Neptune } from "./components/Neptune";
import { Uranus } from "./components/Uranus";
import { KuiperBelt } from "./components/KuiperBelt";

function App() {
  return (
    <>
      {/* <Route index element={<Planet text={textos[0]}/>}/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" />
          <Route index element={<Home />} />
          <Route />
          <Route path="/venus">
            <Route index element={<Venus />} />
          </Route>
          <Route path="/mercury">
            <Route index element={<Mercury />} />
          </Route>
          <Route path="/moon">
            <Route index element={<Moon />} />
          </Route>
          <Route path="/mars">
            <Route index element={<Mars />} />
          </Route>
          <Route path="/asteroids">
            <Route index element={<Asteroids />} />
          </Route>
          <Route path="/jupiter">
            <Route index element={<Jupiter />} />
          </Route>
          <Route path="/saturn">
            <Route index element={<Saturn />} />
          </Route>
          <Route path="/uranus">
            <Route index element={<Uranus />} />
          </Route>
          <Route path="/neptune">
            <Route index element={<Neptune />} />
          </Route>

          <Route path="/kuiperBelt">
            <Route index element={<KuiperBelt />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
