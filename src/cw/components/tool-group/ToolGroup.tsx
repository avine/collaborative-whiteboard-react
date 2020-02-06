/* eslint-disable prefer-template */
import classNames from 'classnames';
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import Draggable from 'react-draggable';
import Icon from '../icon/Icon';
import Tool from '../tool/Tool';

export interface ToolGroupProps {}

// eslint-disable-next-line react/prop-types
const ToolGroup: React.FC<ToolGroupProps> = ({ children }) => {
  const [layoutVertical, setLayoutVertical] = useState(false);
  const [collapse, setCollapse] = useState(false);

  const className = classNames('cw-tool-group', {
    'cw-tool-group--vertical': layoutVertical
  });

  return createPortal(
    <Draggable handle=".cw-tool-group__action--drag" bounds="body">
      <div className={className}>
        <Tool
          title="Drag / Change direction"
          classNameModifier="cw-tool-group__action--drag"
          doubleClickHandler={() => setLayoutVertical(!layoutVertical)}
        >
          <Icon icon="drag" />
        </Tool>
        {!collapse && children}
        <Tool
          title={collapse ? 'Expand' : 'Collapse'}
          active={collapse}
          clickHandler={() => setCollapse(!collapse)}
        >
          <Icon icon={collapse ? 'expand' : 'collapse'} />
        </Tool>
      </div>
    </Draggable>,
    document.body
  );
};

export default ToolGroup;
