/* eslint-disable prefer-template */
import classNames from 'classnames';
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import Draggable from 'react-draggable';

import Icon from '../icon/Icon';

export interface ToolGroupProps {}

// eslint-disable-next-line react/prop-types
const ToolGroup: React.FC<ToolGroupProps> = ({ children }) => {
  const [layoutVertical, setLayoutVertical] = useState(false);
  const [collapse, setCollapse] = useState(false);

  const cssGroup = classNames('cw-tool-group', {
    'cw-tool-group--vertical': layoutVertical
  });

  const cssHide = classNames(
    'cw-tool-group__action',
    'cw-tool-group__action--tool',
    {
      'cw-tool-group__action--collapse': collapse
    }
  );

  const cssCollapse = classNames(
    'cw-tool-group__action',
    'cw-tool-group__action--tool',
    {
      'cw-tool-group__action--active': collapse
    }
  );

  return createPortal(
    <Draggable handle=".cw-tool-group__action--drag" bounds="body">
      <div className={cssGroup}>
        <div
          role="button"
          tabIndex={0}
          className="cw-tool-group__action cw-tool-group__action--drag"
          title="Drag / Change direction"
          onDoubleClick={() => setLayoutVertical(!layoutVertical)}
        >
          <Icon icon="drag" />
        </div>
        {React.Children.map(children, child => (
          <div className={cssHide}>{child}</div>
        ))}
        <div
          role="button"
          tabIndex={0}
          className={cssCollapse}
          title={collapse ? 'Expand' : 'Collapse'}
          onClick={() => setCollapse(!collapse)}
          onKeyDown={() => setCollapse(!collapse)}
        >
          <Icon icon={collapse ? 'expand' : 'collapse'} />
        </div>
      </div>
    </Draggable>,
    document.body
  );
};

export default ToolGroup;
