import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import Promotion from "./components/Promotion";
import JoinEvent from "./components/JoinEvent";
import "./css/App.css";

function App() {
  const bgImage = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/imgs/bg.jpg)`
  };
  return (
    <div className="App" style={bgImage}>
      <HashRouter>
        <Switch>
          <Route path={"/"} exact component={Promotion} />
          <Route path={"/joinevent"} component={JoinEvent} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
