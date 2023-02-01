import React from "react";
import Info from "./components/Info";
import Quiz from "./components/Quiz";
import { ContextProvider } from "./Context.js";

function App() {
  return (
    <div className="container">
      <Info />
      <ContextProvider>
        <Quiz />
      </ContextProvider>
    </div>
  );
}

export default App;
