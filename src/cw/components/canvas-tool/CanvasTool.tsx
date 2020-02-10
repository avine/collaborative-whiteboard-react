/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import { DrawOptions } from '../../Model';
import CanvasServiceContext from '../../ServiceContext';
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
}

const CanvasTool: React.FC<CanvasToolProps> = ({
  drawOptions,
  drawOptionsHandler,
  showGuides,
  showGuidesHandler,
  showCut,
  showCutHandler
}) => {
  const service = useContext(CanvasServiceContext);

  const [showDrawLine, setShowDrawLine] = useState(false);

  const drawLine = (
    <ToolContent
      title="Draw line"
      dispose={() => setShowDrawLine(!showDrawLine)}
    >
      <DrawLine
        drawOptions={drawOptions}
        drawOptionsHandler={drawOptionsHandler}
      />
    </ToolContent>
  );

  const cut = (
    <ToolContent title="Cut" dispose={() => showCutHandler(!showCut)}>
      <Cut />
    </ToolContent>
  );

  return (
    <>
      <ToolGroup>
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
