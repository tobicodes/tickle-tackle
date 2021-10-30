// @flow

type Position =
  | "GK"
  | "CB"
  | "CM"
  | "LeftWing"
  | "RightWing"
  | "Striker"
  | "False 9";

type Player = {|
  name: string,
  nickname: string,
  positions: Position[],
  number: string,
  abilities: string[],
|};

export const players: Array<Player> = [
  {
    name: "Tobi",
    nickname: "CFO",
    positions: ["CM", "CB", "False 9"],
    number: "+12404089728",
    abilities: ["loves a cheeky meg"],
  },
  {
    name: "AJ",
    nickname: "Coach",
    positions: ["CM", "CB", "False 9"],
    number: "",
    abilities: ["always finds themselves in space but cant finish"],
  },
  {
    name: "Drew",
    nickname: "Social Admin #2",
    positions: ["RightWing", "Striker"],
    number: "",
    abilities: ["shoots to kill no matter who the opposing keeper is"],
  },
  {
    name: "Jide",
    nickname: "Striker back",
    positions: ["CB", "Striker"],
    number: "",
    abilities: ["has a penchant for scoring and missing headers"],
  },
  {
    name: "Kev",
    nickname: "Lewandowski",
    positions: ["CB"],
    number: "",
    abilities: ["thinks they can play every position equally well"],
  },
  {
    name: "Kylie",
    nickname: "admin intern",
    positions: ["CM"],
    number: "",
    abilities: ["likes to swivel, twist and bump into players."],
  },
  {
    name: "Dre",
    nickname: "Cuadrado",
    positions: ["RightWing"],
    number: "",
    abilities: ["is the best crosser on the team"],
  },
  {
    name: "Simon",
    nickname: "the future of the club",
    positions: ["CM"],
    number: "",
    abilities: ["has no left foot"],
  },
  {
    name: "Alain",
    nickname: "titi",
    positions: ["CM"],
    number: "",
    abilities: ["will only shoot if absolutely necessary"],
  },
  {
    name: "Char",
    nickname: "marvel",
    positions: ["CB"],
    number: "",
    abilities: ["plays once every quarter"],
  },
  {
    name: "Erica",
    nickname: "ball playing keeper",
    positions: ["GK"],
    number: "",
    abilities: ["hasn't scored in a year"],
  },
  {
    name: "Austin",
    nickname: "mr fantastic",
    positions: ["False 9"],
    number: "",
    abilities: ["cries for the ball in a high pitch"],
  },
  {
    name: "Matt",
    nickname: "blondie",
    positions: ["GK"],
    number: "",
    abilities: ["will get you free drinks"],
  },
  {
    name: "Alex",
    nickname: "composure in a bottle",
    positions: ["CB"],
    number: "",
    abilities: ["is more composed than a butcher in an abbatoir "],
  },
];
