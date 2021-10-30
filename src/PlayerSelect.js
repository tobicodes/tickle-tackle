// @flow
import React, { type Node } from "react";
import { players } from "./players";

import { Select } from "antd";

const { Option } = Select;

export const PlayerSelect = (): Node => {
  const data = players.map((x) => x.name).sort((a, b) => a.localeCompare(b));
  const options = data.map((x) => <Option value={x}>{x}</Option>);

  return (
    <Select
      showSearch
      style={{ width: 200 }}
      placeholder="Select a person"
      optionFilterProp="children"
    >
      {options}
    </Select>
  );
};
