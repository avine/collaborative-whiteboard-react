/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Icon from '../icon/Icon';
import ToolContent from '../tool-content/ToolContent';
import ToolGroup from '../tool-group/ToolGroup';
import Tool from '../tool/Tool';

type SwitchableType = 'drawLine' | 'cut' | 'guides';

const CanvasTool = () => {
  const [active, setActive] = useState<Record<SwitchableType, boolean>>({
    drawLine: false,
    cut: false,
    guides: false
  });

  const switchActive = (content: SwitchableType) => {
    const nextActive = { ...active };
    nextActive[content] = !nextActive[content];
    setActive(nextActive);
  };

  const contents: Record<string, JSX.Element> = {
    drawLine: (
      <ToolContent title="Draw line" dispose={() => switchActive('drawLine')}>
        Hello world Draw line!
      </ToolContent>
    ),
    cut: (
      <ToolContent title="Cut" dispose={() => switchActive('cut')}>
        Hello world Cut!
      </ToolContent>
    )
  };

  return (
    <>
      <ToolGroup>
        <Tool
          title="Draw line"
          active={active.drawLine}
          activeChange={() => switchActive('drawLine')}
        >
          <Icon icon="drawLine" />
        </Tool>

        <Tool title="Undo" activeChange={() => {}}>
          <Icon icon="undo" />
        </Tool>

        <Tool title="Redo" activeChange={() => {}}>
          <Icon icon="redo" />
        </Tool>

        <Tool
          title="Cut"
          active={active.cut}
          activeChange={() => switchActive('cut')}
        >
          <Icon icon="cut" />
        </Tool>

        <Tool title="Undo all" activeChange={() => {}}>
          <Icon icon="undoAll" />
        </Tool>

        <Tool
          title="Guides"
          active={active.guides}
          activeChange={() => switchActive('guides')}
        >
          <Icon icon="noGuides" />
        </Tool>

        <Tool title="Redraw" activeChange={() => {}}>
          <Icon icon="redraw" />
        </Tool>
      </ToolGroup>

      {active.drawLine && contents.drawLine}
      {active.cut && contents.cut}
    </>
  );
};

export default CanvasTool;
