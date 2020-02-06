import React, { useState } from 'react';
import { BroadcastDrawEvents, DrawEvent } from '../../Model';
import { getDefaultCanvasSize, getDefaultDrawOptions } from '../../Operator';
import CanvasService from '../../Service';
import Canvas from '../canvas/Canvas';
import Icon from '../icon/Icon';
import ToolContent from '../tool-content/ToolContent';
import ToolGroup from '../tool-group/ToolGroup';
import Tool from '../tool/Tool';
import DrawLine from '../draw-line/DrawLine';

const Whiteboard = () => {
  const [service] = useState(new CanvasService());

  const [showDrawLine, setShowDrawLine] = useState(false);
  // const [showCut, setShowCut] = useState(false);
  const [showGuides, setShowGuides] = useState(true);

  const [drawOptions, setDrawOptions] = useState(getDefaultDrawOptions());

  const [broadcast, setBroadcast] = useState<BroadcastDrawEvents>();
  service.broadcast$.subscribe(_broadcast => setBroadcast(_broadcast));

  const drawHandler = (event: DrawEvent) => service.emit(event);

  const canvasSize = getDefaultCanvasSize();

  const drawLine = (
    <ToolContent
      title="Draw line"
      dispose={() => setShowDrawLine(!showDrawLine)}
    >
      <DrawLine drawOptions={drawOptions} drawOptionsChange={setDrawOptions} />
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

        <Tool title="Undo all" clickHandler={() => service.undoAll()}>
          <Icon icon="undoAll" />
        </Tool>

        <Tool
          title="Guides"
          active={showGuides}
          clickHandler={() => setShowGuides(!showGuides)}
        >
          <Icon icon="noGuides" />
        </Tool>

        <Tool title="Redraw" clickHandler={() => service.redraw()}>
          <Icon icon="redraw" />
        </Tool>
      </ToolGroup>

      {showDrawLine ? drawLine : null}

      <Canvas
        drawOptions={drawOptions}
        canvasSize={canvasSize}
        showGuides={showGuides}
        broadcast={broadcast}
        draw={drawHandler}
      />
    </>
  );
};

export default Whiteboard;
