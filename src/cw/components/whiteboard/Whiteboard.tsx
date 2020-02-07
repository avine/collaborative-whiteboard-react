import React, { useState, useEffect } from 'react';
import { BroadcastDrawEvents, DrawEvent } from '../../Model';
import { getDefaultCanvasSize, getDefaultDrawOptions } from '../../Operator';
import CanvasService from '../../Service';
import Canvas from '../canvas/Canvas';
import Cut from '../cut/Cut';
import DrawLine from '../draw-line/DrawLine';
import Icon from '../icon/Icon';
import ToolContent from '../tool-content/ToolContent';
import Tool from '../tool-group/Tool';
import ToolGroup from '../tool-group/ToolGroup';

const Whiteboard = () => {
  const [service] = useState(new CanvasService());
  const [historyCut, setHistoryCut] = useState<BroadcastDrawEvents>();

  useEffect(() => {
    const subscription = service.broadcastHistoryCut$.subscribe(setHistoryCut);
    return () => subscription.unsubscribe();
  }, [service]);

  const [showDrawLine, setShowDrawLine] = useState(false);
  const [showCut, setShowCut] = useState(false);
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

  const cut = (
    <ToolContent title="Cut" dispose={() => setShowCut(!showCut)}>
      <Cut service={service} />
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

        <Tool title="Cut" clickHandler={() => setShowCut(!showCut)}>
          <Icon icon="cut" />
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
      {showCut ? cut : null}

      <div className="cw-whiteboard__canvas">
        <Canvas
          className="cw-whiteboard__canvas-draw"
          drawOptions={drawOptions}
          canvasSize={canvasSize}
          showGuides={showGuides}
          broadcast={broadcast}
          draw={drawHandler}
        />
        {showCut && (
          <Canvas
            className="cw-whiteboard__canvas-cut"
            drawOptions={drawOptions}
            canvasSize={canvasSize}
            showGuides={!showGuides}
            drawDisabled
            broadcast={historyCut}
          />
        )}
      </div>
    </>
  );
};

export default Whiteboard;
