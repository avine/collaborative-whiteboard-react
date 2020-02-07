import React, { useState } from 'react';
import Icon from '../icon/Icon';
import ToolContent from '../tool-content/ToolContent';
import Tool from './Tool';
import ToolGroup from './ToolGroup';

export default {
  title: 'ToolGroup',
  component: ToolGroup
};

export const Default = () => {
  const [active, setActive] = useState({
    drawLine: false,
    undo: false,
    redo: false,
    guides: false
  });

  const switchActive = (content: 'drawLine' | 'undo' | 'redo' | 'guides') => {
    const a = { ...active };
    a[content] = !a[content];
    setActive(a);
  };

  const contents: Record<string, JSX.Element> = {
    drawLine: (
      <ToolContent title="Draw line" dispose={() => switchActive('drawLine')}>
        Hello world Draw line!
      </ToolContent>
    ),
    undo: (
      <ToolContent title="Undo" dispose={() => switchActive('undo')}>
        Hello world Undo!
      </ToolContent>
    )
  };

  return (
    <>
      <ToolGroup>
        <Tool
          title="Draw line"
          active={active.drawLine}
          clickHandler={() => switchActive('drawLine')}
        >
          <Icon icon="drawLine" />
        </Tool>
        <Tool
          title="Undo"
          active={active.undo}
          clickHandler={() => switchActive('undo')}
        >
          <Icon icon="undo" />
        </Tool>
        <Tool title="Redo" active={active.redo} clickHandler={() => {}}>
          <Icon icon="redo" />
        </Tool>
        <Tool
          title="Guides"
          active={active.guides}
          clickHandler={() => switchActive('guides')}
        >
          <Icon icon="noGuides" />
        </Tool>
      </ToolGroup>
      {active.drawLine ? contents.drawLine : null}
      {active.undo ? contents.undo : null}
    </>
  );
};
