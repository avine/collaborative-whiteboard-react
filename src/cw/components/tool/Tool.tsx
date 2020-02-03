/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { ToolContentProps } from '../tool-content/ToolContent';

export interface ToolProps {
  title?: string;
  content?: React.FunctionComponentFactory<ToolContentProps>;
  /**
   * By default, when `content` is NOT provided, `active` is always `false`, and `activeChange` always emits `true`.
   * When "switch mode" is enabled, `active` is alternately `true` and `false`.
   */
  noContentSwitchMode?: boolean;
  activeChange?: (active: boolean) => void;
}

const Tool: React.FC<ToolProps> = ({
  title,
  content,
  noContentSwitchMode,
  activeChange,
  children
}) => {
  const [isActive, setActive] = useState(false);
  const activeHandler = () => {
    if (content || noContentSwitchMode) {
      setActive(!isActive);
      activeChange(!isActive);
    } else {
      activeChange(true);
    }
  };
  return (
    <>
      <div
        role="button"
        tabIndex={0}
        onClick={activeHandler}
        onKeyDown={activeHandler}
        title={title}
      >
        {children}
      </div>
      {content && isActive ? content({ title, dispose: activeHandler }) : null}
    </>
  );
};

export default Tool;
