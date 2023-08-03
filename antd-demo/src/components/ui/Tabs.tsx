import React from 'react';
import { Tabs } from 'antd';

const arrs = ['Search', 'Rated'];

const Tab: React.FC = (arrs) => (
  <Tabs
    defaultActiveKey="1"
    centered
    items={new Array(2).fill(null).map((_, i) => {
      const id = String(i + 1);
      return {
        label: `${arrs}`,
        key: id,
        children: `Content of Tab Pane ${id}`,
      };
    })}
  />
);

export default Tab;