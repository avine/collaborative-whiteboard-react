/* eslint-disable react/prop-types */
import React from 'react';
import Icon from '../icon/Icon';
import ToolContent, { ToolContentProps } from '../tool-content/ToolContent';
import Tool from '../tool/Tool';
import ToolGroup from './ToolGroup';

export default {
  title: 'ToolGroup',
  component: ToolGroup
};

export const Default = () => (
  <ToolGroup>
    <Tool
      title="Draw line"
      content={({ title, dispose }: ToolContentProps) => (
        <ToolContent title={title} dispose={dispose}>
          Hello world Draw line!
        </ToolContent>
      )}
    >
      <Icon icon="drawLine" />
    </Tool>
    <Tool
      title="Undo"
      content={({ title, dispose }: ToolContentProps) => (
        <ToolContent title={title} dispose={dispose}>
          Hello world Undo!
        </ToolContent>
      )}
    >
      <Icon icon="undo" />
    </Tool>
    <Tool title="Redo">
      <Icon icon="redo" />
    </Tool>
    <Tool title="Guides" noContentSwitchMode>
      <Icon icon="noGuides" />
    </Tool>
  </ToolGroup>
);
