import React from 'react';
import ToolContent from '../tool-content/ToolContent';
import Tool from './Tool';

export default {
  title: 'Tool',
  component: Tool
};

export const Default = () => {
  return (
    <>
      <Tool
        title="Link 1"
        content={() => <ToolContent title="Title 1" dispose={() => {}} />}
      >
        Action 1
      </Tool>

      <Tool
        title="Link 2"
        content={() => <ToolContent title="Title 2" dispose={() => {}} />}
      >
        Action 1
      </Tool>
    </>
  );
};
