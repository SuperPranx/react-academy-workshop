import React from 'react';
import Select from './components/Select';
import Option from './components/Option';

const App = () => {

  return <>
    <h3>Select and option</h3>
    <Select>
      <Option value="fruit01">Apple</Option>
      <Option value="fruit02">Cherry</Option>
      <Option value="fruit03">Tomato</Option>
    </Select>
  </>
};

export default App;
