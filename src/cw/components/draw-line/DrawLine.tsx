/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
import React from 'react';
import { DrawOptions } from '../../Model';
import { getDefaultDrawOptions } from '../../Operator';
import ColorPicker from '../color-picker/ColorPicker';

export interface DrawLineProps {
  lineWidthMax?: number;
  drawOptions: DrawOptions;
  drawOptionsChange?: (drawOptions: DrawOptions) => void;
}
const DrawLine: React.FC<DrawLineProps> = ({
  lineWidthMax,
  drawOptions,
  drawOptionsChange
}) => {
  const lineWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    drawOptionsChange({ ...drawOptions, lineWidth: +event.target.value });
  };

  const colorChange = (color: string) => {
    drawOptionsChange({ ...drawOptions, strokeStyle: color });
  };

  return (
    <>
      <div className="cw-draw-line__controller">
        <input
          className="cw-draw-line__field"
          type="range"
          min="1"
          max={lineWidthMax}
          value={drawOptions.lineWidth}
          onChange={lineWidthChange}
        />
        <span className="cw-draw-line__number">{drawOptions.lineWidth}</span>
      </div>
      <div className="cw-draw-line__controller">
        <ColorPicker
          color={drawOptions.strokeStyle}
          colorChange={colorChange}
        />
      </div>
    </>
  );
};

export default DrawLine;

DrawLine.defaultProps = {
  lineWidthMax: 30,
  drawOptions: getDefaultDrawOptions(),
  drawOptionsChange: () => {}
};
