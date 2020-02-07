/* eslint-disable react/prop-types */
import classNames from 'classnames';
import React from 'react';

export interface ToolProps {
  title?: string;
  classNameModifier?: string;
  active?: boolean;
  clickHandler?: () => void;
  doubleClickHandler?: () => void;
}

const Tool: React.FC<ToolProps> = ({
  title,
  classNameModifier,
  active,
  clickHandler,
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
      title={title}
      className={className}
      onClick={clickHandler}
      onKeyDown={() => {}}
      onDoubleClick={doubleClickHandler}
    >
      {children}
    </div>
  );
};

Tool.defaultProps = {
  classNameModifier: 'cw-tool-group__action--tool',
  active: false,
  clickHandler: () => {},
  doubleClickHandler: () => {}
};

export default Tool;
