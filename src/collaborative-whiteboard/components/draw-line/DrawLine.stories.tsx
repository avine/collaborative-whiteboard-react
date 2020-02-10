import React, { useState } from 'react';
import { getDefaultDrawOptions } from '../../Operator';
import DrawLine from './DrawLine';

export default {
  title: 'DrawLine',
  component: DrawLine
};

export const Default = () => {
  const [drawOptions, setDrawOptions] = useState(getDefaultDrawOptions());
  return (
    <DrawLine drawOptions={drawOptions} drawOptionsHandler={setDrawOptions} />
  );
};
