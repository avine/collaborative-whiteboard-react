/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
import classNames from 'classnames';
import React from 'react';
import { getDefaultColors, defaultColor } from '../../Operator';

export interface ColorPickerProps {
  colors?: string[];
  color?: string;
  colorChange?: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  colors,
  color,
  colorChange
}) => {
  const breakIndex = Math.round(colors.length / 3);

  const className = (clr: string) =>
    classNames('cw-color-picker', {
      'cw-color-picker--selected': clr === color
    });

  return (
    <>
      {colors.reduce((elements, clr, index) => {
        if (index && index % breakIndex === 0) {
          elements.push(<br key={`${clr}_br`} />);
        }
        elements.push(
          <span
            role="button"
            tabIndex={0}
            key={clr}
            style={{ backgroundColor: clr }}
            className={className(clr)}
            onClick={() => colorChange(clr)}
            onKeyDown={() => {}}
          />
        );
        return elements;
      }, [] as JSX.Element[])}
    </>
  );
};

ColorPicker.defaultProps = {
  colors: getDefaultColors(),
  color: defaultColor,
  colorChange: () => {}
};

export default ColorPicker;
