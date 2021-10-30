import "./App.css";
import "antd/dist/antd.css";
import * as React from "react";
import { QuizCard } from "./quizcard";

function App() {
  return (
    <div className="App">
      <h1 style={{ color: "tomato", fontSize: "4em" }}>TT Squid Games</h1>
      <p style={{ color: "tomato" }}>
        PS - If you get less than 60%, you're off the team
      </p>

      <QuizCard />
    </div>
  );
}

export default App;
