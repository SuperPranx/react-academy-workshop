import React, {useState} from 'react';
import TrackMouse from './components/TrackMouse';

const App = () => {

  return <>
    <h3>Render props</h3>
    <TrackMouse>
      {(x, y) => <span>Current coordinates ({x}, {y})</span>}
    </TrackMouse>
  </>
};

export default App;
