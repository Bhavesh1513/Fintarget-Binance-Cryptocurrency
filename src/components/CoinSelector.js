import React from 'react';
import { symbols } from '../constants/constants';
import CustomDropdown from './CustomDropdown';

const CoinSelector = ({ selectedCoin, onChange }) => {
  return (
    <CustomDropdown
      label="Select Coin"
      options={symbols}
      selectedValue={selectedCoin}
      onChange={onChange}
    />
  );
};

export default CoinSelector;
