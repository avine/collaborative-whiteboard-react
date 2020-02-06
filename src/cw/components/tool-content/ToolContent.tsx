/* eslint-disable react/prop-types */
import React from 'react';
import { createPortal } from 'react-dom';
import Draggable from 'react-draggable';
import Icon from '../icon/Icon';

export interface ToolContentProps {
  title: string;
  dispose: () => void;
}

const ToolContent: React.FC<ToolContentProps> = ({
  title,
  dispose,
  children
}) => {
  return createPortal(
    <Draggable handle=".cw-tool-content__action--drag" bounds="body">
      <div className="cw-tool-content">
        <div className="cw-tool-content__header">
          <div className="cw-tool-content__action cw-tool-content__action--drag">
            <Icon icon="drag" />
          </div>
          <span className="cw-tool-content__title">{title}</span>
          <div
            role="button"
            tabIndex={0}
            className="button-reset-css cw-tool-content__action"
            onClick={dispose}
            onKeyDown={() => {}}
          >
            <Icon icon="dispose" />
          </div>
        </div>
        <div className="cw-tool-content__content">{children}</div>
      </div>
    </Draggable>,
    document.body
  );
};

export default ToolContent;

ToolContent.defaultProps = {
  dispose: () => {}
};
