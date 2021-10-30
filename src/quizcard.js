// @flow
import React, { type Node, useState } from "react";
import { players } from "./players";
import { Heading, Text } from "gestalt";
import { Card, Button, message } from "antd";

import { Select } from "antd";
const { Option } = Select;

export const getRandomElement = (elements: Array<any>): any => {
  return elements[Math.floor(Math.random() * elements.length)];
};

export const QuizCard = (): Node => {
  const [player, setPlayer] = useState(getRandomElement(players)); // the initial question player
  const [selectedPlayer, setSelectedPlayer] = useState(""); // the player chosen from the dropdown

  const [score, setScore] = useState(0);
  const MAX_SCORE = 5;

  // for setting up the select options
  const data = players.map((x) => x.name).sort((a, b) => a.localeCompare(b));
  const options = data.map((x) => <Option value={x}>{x}</Option>);

  const handleSelectChange = (a, b) => {
    setSelectedPlayer(a);
  };

  const handleClickReset = () => {
    setScore(0);
    setSelectedPlayer("");
  };

  const handleClickNext = () => {
    const isCorrect = isGuessCorrect();
    if (isCorrect) {
      message.success("You got it!", 1);
      setScore(score + 1);
    } else {
      message.error("Nah bruv", 1);
    }

    // get a new question
    const player = getRandomElement(players);
    // check that this player is not the same as the last one
    setPlayer(player);
  };

  const isGuessCorrect = () => {
    return selectedPlayer === player.name;
  };

  return (
    <Card
      style={{
        width: 500,
        minHeight: "40vh",
        margin: "60px auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        border: "1px solid",
        borderRadius: "20px",
      }}
    >
      <Heading color="white">Who am I?</Heading>

      {score === MAX_SCORE ? (
        <>
          <Text> congrats, you win</Text>
          <Button onClick={handleClickReset}>Reset</Button>
        </>
      ) : (
        <>
          <div style={{ marginTop: "56px" }}>
            <div style={{ margin: "0 auto", padding: "12px" }}>
              <Text>{`I'm a player who ${player.abilities[0]}`}</Text>
            </div>
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Select a person"
              optionFilterProp="children"
              onChange={handleSelectChange}
            >
              {options}
            </Select>
          </div>
          <div style={{ marginTop: "12px" }}>
            <Text>
              Score: {score}/{MAX_SCORE}
            </Text>
          </div>
          <div style={{ marginTop: "144px" }}>
            <Button
              disabled={!selectedPlayer}
              type={"primary"}
              onClick={handleClickNext}
            >
              Next
            </Button>
            <Button style={{ marginLeft: "12px" }} onClick={handleClickReset}>
              Reset
            </Button>
          </div>
        </>
      )}
    </Card>
  );
};

const WinScreen = () => {
  return <></>;
};
