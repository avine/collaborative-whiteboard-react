import React from 'react';

import ToolContent from './ToolContent';

export default {
  title: 'ToolContent',
  component: ToolContent
};

export const Default = () => {
  return (
    <ToolContent title="Tool Content" dispose={() => alert('Close')}>
      ToolContent
    </ToolContent>
  );
};
