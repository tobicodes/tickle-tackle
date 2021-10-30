// @flow

import React, { type Node } from "react";
import { Table, Tag, Select } from "antd";
import { Text } from "gestalt";
import { players } from "./players";
import { PlayerSelect } from "./PlayerSelect";

const { Option } = Select;

export const PlayerTable = (): Node => {
  const columns = getColumns();
  const data = players;

  return (
    <Table
      style={{ maxWidth: "75vw", margin: "0 auto" }}
      pagination={{ pageSize: 10 }}
      size="middle"
      dataSource={data}
      columns={columns}
    ></Table>
  );
};

const getColumns = () => {
  return [
    {
      title: "Nickname",
      dataIndex: "nickname",
      key: "nickname",
      defaultSortOrder: "descend",
      sorter: (a, b) => b.nickname.localeCompare(a.nickname),
      render: (nickname) => <Text size="lg">{nickname}</Text>,
    },
    // {
    //   title: "Positions",
    //   dataIndex: "positions",
    //   key: "positions",
    //   render: (positions) => {
    //     return (
    //       <div>
    //         {positions.map((position) => {
    //           return <Tag style={{ marginRight: "10px" }}>{position}</Tag>;
    //         })}
    //       </div>
    //     );
    //   },
    // },
    {
      title: "Clue 1",
      dataIndex: `abilities`,
      key: "abilities",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (a, b, index) => {
        return <PlayerSelect key={b.name} />;
      },
    },
  ];
};
