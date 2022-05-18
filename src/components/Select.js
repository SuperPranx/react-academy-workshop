import React, {useState} from 'react';

export const SelectContext = React.createContext({});

const Select = ({children}) => {
  const [selectedOption, setSelectedOption] = useState();
  const [opened, setOpened] = useState(false);

  const updateSelection = (option) => {
    setSelectedOption(option);
    setOpened(false);
  }

  const open = () => {
    setOpened(true);
  }

  if (opened) {
    return (
      <SelectContext.Provider value={{selectedOption, updateSelection}}>
        <div style={{padding: '5px', border: '1px solid red'}}>
          {children}
        </div>
      </SelectContext.Provider>
    );
  } else {
    return (
      <div className="select" style={{padding: '5px', border: '1px solid cyan'}} onClick={open}>
        {selectedOption? selectedOption.children : 'Pick One'}
      </div>
    );
  }
};

export default Select;
