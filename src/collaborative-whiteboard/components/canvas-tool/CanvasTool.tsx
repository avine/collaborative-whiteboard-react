/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import { DrawOptions } from '../../models';
import CwServiceContext from '../../servicesContext';
import Cut from '../cut/Cut';
import DrawLine from '../draw-line/DrawLine';
import Icon from '../icon/Icon';
import ToolContent from '../tool-content/ToolContent';
import Tool from '../tool-group/Tool';
import ToolGroup from '../tool-group/ToolGroup';

export interface CanvasToolProps {
  drawOptions: DrawOptions;
  drawOptionsHandler: (drawOptions: DrawOptions) => void;
  showGuides: boolean;
  showGuidesHandler: (showGuides: boolean) => void;
  showCut: boolean;
  showCutHandler: (showGuides: boolean) => void;
  dragBounds?: string;
}

const CanvasTool: React.FC<CanvasToolProps> = ({
  drawOptions,
  drawOptionsHandler,
  showGuides,
  showGuidesHandler,
  showCut,
  showCutHandler,
  dragBounds
}) => {
  const service = useContext(CwServiceContext);

  const [showDrawLine, setShowDrawLine] = useState(false);

  const drawLine = (
    <ToolContent
      title="Draw line"
      dispose={() => setShowDrawLine(!showDrawLine)}
      dragBounds={dragBounds}
    >
      <DrawLine
        drawOptions={drawOptions}
        drawOptionsHandler={drawOptionsHandler}
      />
    </ToolContent>
  );

  const cut = (
    <ToolContent
      title="Cut"
      dispose={() => showCutHandler(!showCut)}
      dragBounds={dragBounds}
    >
      <Cut />
    </ToolContent>
  );

  return (
    <>
      <ToolGroup dragBounds={dragBounds}>
        <Tool
          title="Draw line"
          clickHandler={() => setShowDrawLine(!showDrawLine)}
        >
          <Icon icon="drawLine" />
        </Tool>

        <Tool title="Undo" clickHandler={() => service.undo()}>
          <Icon icon="undo" />
        </Tool>

        <Tool title="Redo" clickHandler={() => service.redo()}>
          <Icon icon="redo" />
        </Tool>

        <Tool title="Cut" clickHandler={() => showCutHandler(!showCut)}>
          <Icon icon="cut" />
        </Tool>

        <Tool title="Undo all" clickHandler={() => service.undoAll()}>
          <Icon icon="undoAll" />
        </Tool>

        <Tool
          title="Guides"
          active={showGuides}
          clickHandler={() => showGuidesHandler(!showGuides)}
        >
          <Icon icon="noGuides" />
        </Tool>

        <Tool title="Redraw" clickHandler={() => service.redraw()}>
          <Icon icon="redraw" />
        </Tool>
      </ToolGroup>

      {showDrawLine ? drawLine : null}
      {showCut ? cut : null}
    </>
  );
};

export default CanvasTool;