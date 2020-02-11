/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
import classNames from 'classnames';
import React from 'react';
import { getDefaultColors, defaultColor } from '../../operator';

export interface ColorPickerProps {
  colors?: string[];
  color?: string;
  colorHandler?: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  colors,
  color,
  colorHandler
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
            tabIndex={index}
            key={clr}
            style={{ backgroundColor: clr }}
            className={className(clr)}
            onClick={() => colorHandler(clr)}
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
  colorHandler: () => {}
};

export default ColorPicker;
