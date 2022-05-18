import React, {useState} from 'react';

export const SelectContext = React.createContext({});

const Select = ({children}) => {
  const [selectedOption, setSelectedOption] = useState();
  const [opened, setOpened] = useState(false);
  const [availableOptions, setAvailableOptions] = useState([]);

  const updateSelection = (option) => {
    setSelectedOption(option);
    setOpened(false);
  }

  const registerOption = (newItem) => {
    setAvailableOptions(prevState => {
      console.log('Registering: ' + newItem.value);
      return [...prevState, newItem];
    });
  }

  const unregisterOption = (item) => {
    setAvailableOptions(prevState => {
      if (prevState.find(current => current.value == item.value)) {
        console.log('Unregistering: ' + item.value);
        return prevState.filter(option => option.value !== item.value);
      }
    });
  }

  const open = () => {
    setOpened(true);
  }

  if (opened) {
    return (
      <SelectContext.Provider value={{selectedOption, updateSelection, registerOption, unregisterOption}}>
        <div style={{padding: '5px', border: '1px solid red'} }>
          {children}
        </div>
      </SelectContext.Provider>
    );
  } else {
    return (
      <div className="select" style={{padding: '5px', border: '1px solid cyan'}} onClick={open}>
        {selectedOption ? selectedOption.children : 'Pick One'}
      </div>
    );
  }
};

export default Select;
