import React, {useContext, useEffect} from 'react';
import {SelectContext} from './Select';

const Option = ({children, value}) => {
  const {selectedOption, updateSelection, registerOption, unregisterOption} = useContext(SelectContext);
  const isActive = selectedOption && selectedOption.value === value;

  useEffect(() => {
    registerOption({value, children});
    return () => {
      unregisterOption({value, children});
    }
  }, []);

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
