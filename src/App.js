import React, {useState} from 'react';
import Tab from './components/Tab';
import Tabs from './components/Tabs';

const App = () => {
  const [tab, setTab] = useState('what');
  const messages = {what: 'that is the question', where: 'wouldn\'t you like to know?!?', when: 'it really was about time'}

  const onTabChange = newValue => {
    console.log(`App getting tab state update to ${newValue}`);
    setTab(newValue);
  }

  return <>
    <h3>Controlled Tabs</h3>
    <button onClick={() => onTabChange('when')}>It's about time</button>
    <Tabs value={tab} onChange={onTabChange}>
      <Tab value='what'>Object</Tab>
      <Tab value='where'>Location</Tab>
      <Tab value='when'>Time</Tab>
    </Tabs>
    {tab ? <div>{messages[tab]}</div> : ''}
    <h3>Uncontrolled Tabs</h3>
    <Tabs>
      <Tab value='what'>Object</Tab>
      <Tab value='where'>Location</Tab>
      <Tab value='when'>Time</Tab>
    </Tabs>
  </>
};

export default App;
