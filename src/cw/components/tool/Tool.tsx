/* eslint-disable react/prop-types */
import classNames from 'classnames';
import React from 'react';

export interface ToolProps {
  classNameModifier?: string;
  title?: string;
  active?: boolean;
  activeChange?: () => void;
  doubleClickHandler?: () => void;
}

const Tool: React.FC<ToolProps> = ({
  classNameModifier,
  title,
  active,
  activeChange,
  doubleClickHandler,
  children
}) => {
  const className = classNames('cw-tool-group__action', classNameModifier, {
    'cw-tool-group__action--active': active
  });
  return (
    <div
      role="button"
      tabIndex={0}
      className={className}
      onClick={activeChange}
      onKeyDown={activeChange}
      onDoubleClick={doubleClickHandler}
      title={title}
    >
      {children}
    </div>
  );
};

Tool.defaultProps = {
  classNameModifier: 'cw-tool-group__action--tool',
  active: false,
  activeChange: () => {},
  doubleClickHandler: () => {}
};

export default Tool;
