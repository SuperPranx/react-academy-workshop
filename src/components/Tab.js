import React, { useContext } from 'react';
import { TabsContext } from './Tabs';

export default ({ children, value }) => {
  const { selectedTab, changeSelection } = useContext(TabsContext);
  const isSelected = value === selectedTab;

  return (
    <div
      onClick={() => changeSelection(value)}
      style={{
        cursor: 'pointer',
        backgroundColor: isSelected ? 'purple' : 'rgba(0,0,0,0)'
      }}
    >
      {children}
    </div>
  );
};
