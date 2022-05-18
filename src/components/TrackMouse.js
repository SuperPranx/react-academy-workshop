import React, {useEffect, useState} from 'react';

const TrackMouse = ({children}) => {
  const [position, setPosition] = useState({});

  const onMovement = event => {
    console.log(event);
    setPosition({x: event.clientX, y: event.clientY});
  };

  return (
    <div onMouseMove={onMovement} style={{height: '500px'}}>
      {children && children(position.x, position.y)}
    </div>
  );
};

export default TrackMouse;
