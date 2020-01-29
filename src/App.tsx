import './App.scss';
import React, { useState } from 'react';
import Canvas from './cw/canvas/Canvas';
import Icon from './cw/icon/Icon';
import { BroadcastDrawEvents, CanvasSize, DrawEvent } from './cw/Model';
import {
  drawLineSerieToLinesMapper,
  getDefaultCanvasSize,
  getDefaultDrawOptions
} from './cw/Operator';

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
      <Icon icon="drawLine" />
      <Icon icon="undo" />
      <Icon icon="redo" />
      <Icon icon="cut" />
      <Icon icon="undoAll" />
      <Icon icon="noGuides" />
      <Icon icon="redraw" />
      <Icon icon="expand" />
      <Icon icon="collapse" />
      <Icon icon="drag" />
      <Icon icon="dispose" />
      <br />
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
