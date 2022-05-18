import React, {useContext} from 'react';
import {SelectContext} from './Select';

const Option = ({children, value}) => {
  const {selectedOption, updateSelection} = useContext(SelectContext);
  const isActive = selectedOption && selectedOption.value === value;

  return (
    <div className="option"
         style={{
           fontWeight: isActive ? 'bold' : 'normal',
           color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.5)',
           border: '1px solid white',
           marginBottom: '2px',
           padding: '5px'
         }}
         onClick={() => updateSelection({value, children})}>
      {children}
    </div>
  );
};

export default Option;
