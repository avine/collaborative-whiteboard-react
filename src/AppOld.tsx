import './AppOld.scss';
import './collaborative-whiteboard/styles/cw.core.scss';
import React, { useState } from 'react';
import Canvas from './collaborative-whiteboard/components/canvas/Canvas';
import {
  BroadcastDrawEvents,
  CanvasSize,
  DrawEvent
} from './collaborative-whiteboard/model';
import {
  drawLineSerieToLinesMapper,
  getDefaultCanvasSize,
  getDefaultDrawOptions
} from './collaborative-whiteboard/operator';

const App: React.FC = () => {
  const [canvasSize, setCanvasSize] = useState<CanvasSize>(
    getDefaultCanvasSize()
  );

  const [broadcast, setBroadcast] = useState<BroadcastDrawEvents>();

  const sizeHandler = () => {
    setCanvasSize({ height: 400, width: 400 });
  };

  const drawHandler = (drawEvent: DrawEvent) => {
    setBroadcast({
      animate: true,
      events: drawLineSerieToLinesMapper([drawEvent])
    });
  };

  const drawOptions = getDefaultDrawOptions();

  return (
    <div className="app">
      <div className="app__canvas">
        <Canvas
          drawOptions={drawOptions}
          canvasSize={canvasSize}
          draw={drawHandler}
        />
        <Canvas
          drawDisabled
          drawOptions={drawOptions}
          canvasSize={canvasSize}
          broadcast={broadcast}
        />
      </div>
      <button type="button" onClick={sizeHandler}>
        Change size
      </button>
    </div>
  );
};

export default App;
