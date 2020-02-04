import React, { useState } from 'react';

import { BroadcastDrawEvents, DrawEvent } from '../../Model';
import { getDefaultCanvasSize, getDefaultDrawOptions } from '../../Operator';
import CanvasService from '../../Service';
import Canvas from '../canvas/Canvas';
import Icon from '../icon/Icon';
import ToolGroup from '../tool-group/ToolGroup';
import Tool from '../tool/Tool';

const Whiteboard = () => {
  const [service] = useState(new CanvasService());

  const [showGuides, setShowGuides] = useState(true);

  const [broadcast, setBroadcast] = useState<BroadcastDrawEvents>();
  service.broadcast$.subscribe(_broadcast => setBroadcast(_broadcast));

  const drawHandler = (event: DrawEvent) => service.emit(event);

  const drawOptions = getDefaultDrawOptions();

  const canvasSize = getDefaultCanvasSize();

  return (
    <>
      <ToolGroup>
        <Tool title="Undo" activeChange={() => service.undo()}>
          <Icon icon="undo" />
        </Tool>

        <Tool title="Redo" activeChange={() => service.redo()}>
          <Icon icon="redo" />
        </Tool>

        <Tool title="Undo all" activeChange={() => service.undoAll()}>
          <Icon icon="undoAll" />
        </Tool>

        <Tool
          title="Guides"
          active={showGuides}
          activeChange={() => setShowGuides(!showGuides)}
        >
          <Icon icon="noGuides" />
        </Tool>

        <Tool title="Redraw" activeChange={() => service.redraw()}>
          <Icon icon="redraw" />
        </Tool>
      </ToolGroup>

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
