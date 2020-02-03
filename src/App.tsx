import './App.scss';
import './cw/styles/cw.core.scss';
import React, { useState } from 'react';
import Canvas from './cw/components/canvas/Canvas';
import { BroadcastDrawEvents, CanvasSize, DrawEvent } from './cw/Model';
import {
  drawLineSerieToLinesMapper,
  getDefaultCanvasSize,
  getDefaultDrawOptions
} from './cw/Operator';
import CanvasTool from './cw/components/canvas-tool/CanvasTool';

const App: React.FC = () => {
  const [canvasSize, setCanvasSize] = useState<CanvasSize>(
    getDefaultCanvasSize()
  );

  const [broadcast, setBroadcast] = useState<BroadcastDrawEvents>({
    animate: true,
    events: []
  });

  const drawHandler = (drawEvent: DrawEvent) => {
    setBroadcast({
      animate: true,
      events: drawLineSerieToLinesMapper([drawEvent])
    });
  };

  const sizeHandler = () => {
    setCanvasSize({ height: 500, width: 500 });
  };

  const drawOptions = getDefaultDrawOptions();

  return (
    <div className="App">
      <CanvasTool />
      <Canvas
        drawOptions={drawOptions}
        canvasSize={canvasSize}
        draw={drawHandler}
      />
      &nbsp;&nbsp;
      <Canvas
        drawDisabled
        drawOptions={drawOptions}
        canvasSize={canvasSize}
        broadcast={broadcast}
      />
      <br />
      <button type="button" onClick={sizeHandler}>
        Change size
      </button>
    </div>
  );
};

export default App;
