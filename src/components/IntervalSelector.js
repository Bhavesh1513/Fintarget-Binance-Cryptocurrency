import React from 'react';
import { intervals } from '../constants/constants';
import CustomDropdown from './CustomDropdown';

const IntervalSelector = ({ selectedInterval, onChange }) => {
  return (
    <CustomDropdown
      label="Select Interval"
      options={intervals}
      selectedValue={selectedInterval}
      onChange={onChange}
    />
  );
};

export default IntervalSelector;
