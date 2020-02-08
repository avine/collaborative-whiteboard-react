/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react';
import { BroadcastDrawEvents, DrawEvent } from '../../Model';
import { getDefaultCanvasSize, getDefaultDrawOptions } from '../../Operator';
import CanvasService from '../../Service';
import Canvas from '../canvas/Canvas';
import CanvasTool from '../canvas-tool/CanvasTool';

// FIXME: Missing the "cw-whiteboard" css (because in React the component itself is NOT a DOM element)

export interface WhiteboardProps {
  fitParentElement?: boolean;
}

const Whiteboard: React.FC<WhiteboardProps> = ({ fitParentElement }) => {
  const [service] = useState(new CanvasService());
  const [historyCut, setHistoryCut] = useState<BroadcastDrawEvents>();

  const [canvasSize, setCanvasSize] = useState(getDefaultCanvasSize());
  const canvasContainer = useRef<HTMLDivElement>();

  useEffect(() => {
    if (fitParentElement) {
      const element = canvasContainer.current;
      // Fit the container
      element.style.width = '100%';
      element.style.height = '100%';
      // Freeze both container and canvas sizes
      const { width, height } = element.getBoundingClientRect();
      element.style.width = `${width}px`;
      element.style.height = `${height}px`;
      setCanvasSize({ width, height });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const subscription = service.broadcastHistoryCut$.subscribe(setHistoryCut);
    return () => subscription.unsubscribe();
  }, [service]);

  const [showCut, setShowCut] = useState(false);
  const [showGuides, setShowGuides] = useState(true);

  const [drawOptions, setDrawOptions] = useState(getDefaultDrawOptions());

  const [broadcast, setBroadcast] = useState<BroadcastDrawEvents>();
  service.broadcast$.subscribe(_broadcast => setBroadcast(_broadcast));

  const drawHandler = (event: DrawEvent) => service.emit(event);

  return (
    <>
      <CanvasTool
        service={service}
        drawOptions={drawOptions}
        drawOptionsHandler={setDrawOptions}
        showGuides={showGuides}
        showGuidesHandler={setShowGuides}
        showCut={showCut}
        showCutHandler={setShowCut}
      />
      <div className="cw-whiteboard__canvas" ref={canvasContainer}>
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

Whiteboard.defaultProps = {
  fitParentElement: true
};

export default Whiteboard;
