/* USELESS: <Tool /> should be a child of <TooGroup /> */

import React from 'react';
import Tool from './Tool';

export default {
  title: 'Tool',
  component: Tool
};

export const Default = () => {
  return (
    <>
      <Tool title="Link 1">1</Tool>
      <Tool title="Link 2" active>
        2
      </Tool>
    </>
  );
};
