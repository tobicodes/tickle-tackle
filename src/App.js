import { PlayerTable } from "./PlayerTable";
import "./App.css";
import * as React from "react";
import { Heading, Box } from "gestalt";

import "antd/dist/antd.css";
import { QuizCard } from "./quizcard";
// import { players } from "./players";
// import { getRandomElement } from "./quizcard";

// console.log(getRandomElement(players));

function App() {
  return (
    <div className="App">
      <Box margin="12">
        <Heading size="md">tickle tackle</Heading>
        <QuizCard />
      </Box>
      {/* <PlayerTable /> */}
    </div>
  );
}

export default App;
