import React from 'react';
import { Tabs } from 'antd';
import Search from './input-search';

const arrs = ['Search', 'Rated'];

const Tab: React.FC = () => (
  <Tabs
    defaultActiveKey="1"
    centered
    items={new Array(2).fill(null).map((_, i) => {
      const id = String(i + 1);
      return {
        label: arrs[i],
        key: id,
        children: id === "1" ? <Search />: null,
      };
      
    })}
  />
);

export default Tab;